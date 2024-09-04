import React from 'react';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IRepoAnalysis } from '../utils/interfaces';
import CirclePackingGraph from './CirclePackingGraph';


type TDetailProps = {
    repoAnalysis: IRepoAnalysis | null;
    expanded: boolean;
    onToggle: () => void;
}

export default function AnalysisDetails({ repoAnalysis, expanded, onToggle }: TDetailProps) {
  let analysis;
  let endMessage;
  if (repoAnalysis && typeof repoAnalysis.message === 'object' && repoAnalysis.message !== null) {
    analysis = repoAnalysis.message.Analysis;
    endMessage = repoAnalysis.message.endMessage;
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Analysis Results</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          height: 'calc(100vh - 48px)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Grid
          container
          sx={{
            height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          spacing={2}
        >
          <Grid
            item
            xs={10}
            sx={{ display: 'flex', height: '100%', overflow: 'hidden' }}
          >
            {repoAnalysis && repoAnalysis.message.Analysis && analysis ? (
              <CirclePackingGraph data={analysis} />
            ) : (
              <Typography>No data available for heatmap</Typography>
            )}
          </Grid>
          {endMessage && (
            <Grid item xs={2}>
              <Typography variant='body2' color='textSecondary'>
                {endMessage}
              </Typography>
            </Grid>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
