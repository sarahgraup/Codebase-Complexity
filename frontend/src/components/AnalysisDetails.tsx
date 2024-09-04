import React, {useMemo} from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
    Typography,
  Box
} from "@mui/material";
// import { flattenedData } from "../utils/helpers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IRepoAnalysis } from "../utils/interfaces";
import AnalysisVisualization from "./AnalysisVisualization";
import SelectionPanel from "./SelectionPanel";


type TDetailProps = {
    repoAnalysis: IRepoAnalysis | null;
    expanded: boolean;
    onToggle: () => void;
}
export default function AnalysisDetails({ repoAnalysis, expanded, onToggle }: TDetailProps) {

    let analysis;
    let endMessage;
    if (repoAnalysis && typeof repoAnalysis.message==='object' && repoAnalysis.message !==null) {
        analysis = repoAnalysis.message.Analysis;
        endMessage = repoAnalysis.message.endMessage;
    };

    return (
      <Accordion
        sx={{
          height: expanded ? "calc(100vh - 200px)" : "auto",
          display: "flex",
          flexDirection: "column",
        }}
        expanded={expanded}
        onChange={onToggle}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Analysis Results</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
            height: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Grid container sx={{ height: "100%" }}>
            {/* <Grid item xs={12} sx={{ height: "100%" }}> */}
            {repoAnalysis && repoAnalysis.message.Analysis ? (
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                <AnalysisVisualization data={repoAnalysis.message.Analysis} />
              </Box>
            ) : (
              <Typography>No data available for heatmap</Typography>
            )}
            {/* <Grid item xs={4} sx={{ height: "100%" }}> */}

            {/* <SelectionPanel data={data} onSelectNode={handleNodeClick} selectedNode={selectedNode} /> */}

            {/* </Grid> */}
            {endMessage && (
              <Typography variant="body2" color="textSecondary">
                {endMessage}
              </Typography>
            )}
            {/* </Grid> */}
          </Grid>
        </AccordionDetails>
      </Accordion>
    );
}