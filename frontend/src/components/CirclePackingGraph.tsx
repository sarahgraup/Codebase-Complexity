import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';
import {
  IAnalysisData, IFunction,
} from '../utils/interfaces';


interface CirclePackingGraphProps {
  data: IAnalysisData;
  onNodeClick: (node: d3.HierarchyCircularNode<IHierarchyNode>) => void;
}
interface IHierarchyNode {
  name: string;
  children?: IHierarchyNode[];
  complexity?: number;
  value?: number;
}

export default function CirclePackingGraph({
  data,
  onNodeClick,
}: CirclePackingGraphProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [hierarchicalData, setHierarchicalData] = useState<IHierarchyNode | null>(null);

  useEffect(() => {
    if (!data || !data.Folders) return;

    const transformData = (data: IAnalysisData) => {
      const root: IHierarchyNode = { name: 'root', children: [] };
      data.Folders.forEach((folderObj) => {
        Object.entries(folderObj).forEach(([folderName, folder]) => {
          const folderNode: IHierarchyNode = { name: folderName, children: [] };

          Object.entries(folder.Files).forEach(([filePath, file]) => {
            const fileNode: IHierarchyNode = {
              name: filePath,
              value: file.fileNumOfLines,
              children: file.Functions.map((func: IFunction) => ({
                name: func.functionName,
                complexity: func.complexity,
                value: func.funcNumOfLines,
              })),
            };
            folderNode.children!.push(fileNode);
          });

          root.children!.push(folderNode);
        });
      });

      return root;
    };

    setHierarchicalData(transformData(data));
  }, [data]);

  useEffect(() => {
    if (!hierarchicalData || !svgRef.current) return;

    const box = svgRef.current.parentElement;
    const width = box?.clientWidth || 500;
    const height = box?.clientHeight || 500;

    const color = d3
      .scaleLinear<string>()
      .domain([0, 10])
      .range(['yellow', 'red'])
      .interpolate(d3.interpolateHcl);

    const pack = d3.pack<IHierarchyNode>().size([width, height]).padding(3);

    const root = pack(
      d3
        .hierarchy(hierarchicalData)
        .sum((d) => d.value || 1)
        .sort((a, b) => (b.value || 0) - (a.value || 0)),
    );
    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `-${width / 2} -${height / 2} ${width} ${height}`)
      .attr('width', width)
      .attr('height', height)
      .attr(
        'style',
        `max-width: 100%; height: auto; display: block; margin: 0 -14px; background: ${color(
          0,
        )}; cursor: pointer;`,
      );

    const node = svg
      .selectAll('circle')
      .data(root.descendants().slice(1))
      .join('circle')
      .attr('fill', (d) => (d.data.complexity ? color(d.data.complexity) : 'white'))
      .attr('pointer-events', (d) => (!d.children ? 'none' : null))
      .on('mouseover', function () {
        d3.select(this).attr('stroke', '#000');
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', null);
      })
      .on(
        'click',
        (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()),
      );
    const label = svg
      .selectAll<SVGTextElement, d3.HierarchyCircularNode<IHierarchyNode>>('text')
      .data(root.descendants())
      .join('text')
      .style('font', '10px sans-serif')
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
      .style('fill-opacity', (d) => (d.parent === root ? 1 : 0))
      .style('display', (d) => (d.parent === root ? 'inline' : 'none'))
      .text(
        (d) => d.data.name,
      );


    let focus = root;
    let view: [number, number, number];

    const zoomTo = (v: [number, number, number]) => {
      const k = width / v[2];

      view = v;

      label.attr(
        'transform',
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`,
      );
      node.attr(
        'transform',
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`,
      );
      node.attr('r', (d) => d.r * k);
    };

    const zoom = (
      event: MouseEvent,
      d: d3.HierarchyCircularNode<IHierarchyNode>,
    ) => {
      focus = d;
      const duration = event.altKey ? 7500 : 750;

      label
        .filter(function (d) {
          return (
            d.parent === focus || d3.select(this).style('display') === 'inline'
          );
        })
        .transition()
        .duration(duration)
        .style('fill-opacity', (d) => (d.parent === focus ? 1 : 0))
        .on('start', function (d) {
          if (d.parent === focus) this.style.display = 'inline';
        })
        .on('end', function (d) {
          if (d.parent !== focus) this.style.display = 'none';
        });
    };
    zoomTo([root.x, root.y, root.r * 2]);

    svg.on('click', (event) => zoom(event, root));
  }, [hierarchicalData, onNodeClick]);

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg
        ref={svgRef}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
}

