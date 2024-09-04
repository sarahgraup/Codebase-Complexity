import React, { useState } from 'react';
import { Grid } from '@mui/material';
import CirclePackingGraph from './CirclePackingGraph';
import { IAnalysisData } from '../utils/interfaces';


interface AnalysisVisualizationProps {
  data: IAnalysisData;
}

export default function AnalysisVisualization({ data }:AnalysisVisualizationProps) {
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const handleNodeClick = (node: any) => {
    setSelectedNode(node);
  };

  return (
    <Grid container style={{ height: '100%', width: '100%' }}>
      <Grid
        item
        xs={12}
        sx={{
          height: '100%', width: '100%', margin: '20px 20px', padding: '20px 20px',
        }}
      >
        <CirclePackingGraph data={data} />
      </Grid>
    </Grid>

  );
}

