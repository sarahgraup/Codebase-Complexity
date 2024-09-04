import React, { useState } from 'react';
import { Grid } from '@mui/material';
import CirclePackingGraph from './CirclePackingGraph';
import { IAnalysisData } from '../utils/interfaces';

interface AnalysisVisualizationProps {
  data: IAnalysisData;
}

export default function AnalysisVisualization({ data }:AnalysisVisualizationProps) {
  const [selectedNode, setSelectedNode] = useState<any>(null);
  console.log("analysis data: ", data);

  const handleNodeClick = (node: any) => {
      setSelectedNode(node);
      console.log('selected node', node);
  };

  return (
    <Grid container style={{ height: "100%", width: "100%" }}>
      <Grid item xs={12} sx={{ height: "100%", width: "100%" }}>
        <CirclePackingGraph data={data} onNodeClick={handleNodeClick} />
      </Grid>
    </Grid>

  );
};

