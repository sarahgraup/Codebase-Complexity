import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography,CardActions, Box, } from '@mui/material';
import { IRepoAnalysis, IRepoInput, IRepositoryInfo } from '../utils/interfaces';
import SpinnerButton from '../common/SpinnerButton';
import AnalysisDetails from './AnalysisDetails';

type TRepoCardProps = {
  repositoryInfo: IRepositoryInfo;
  handleCreateAnalysis: (info: IRepoInput) => void;
  disable: boolean;
  repoAnalysis: IRepoAnalysis|null;
};

export default function RepositoryCard({ repositoryInfo, handleCreateAnalysis, disable, repoAnalysis}: TRepoCardProps) {
  const { repository, remote, branch } = repositoryInfo;
  const [buttonText, setButtonText] = useState<string>(
    "Generate Cyclomatic Complexity"
  );
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleButtonClick = () => {
    if (buttonText === "View Analysis") {
      setExpanded((prev) => !prev); 
    } else {
      handleCreateAnalysis({ repository, remote, branch });
    }
  };
  
    useEffect(() => {
      if (repoAnalysis) {
        setButtonText("View Analysis");
      } else {
        setButtonText("Generate Cyclomatic Complexity");
      }
    }, [repoAnalysis]);

  
  return (
    <Card
      variant="outlined"
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {repositoryInfo.repository}
        </Typography>
        <Typography color="textSecondary">
          Remote: {repositoryInfo.remote}
        </Typography>
        <Typography color="textSecondary">
          Branch: {repositoryInfo.branch}
        </Typography>
        <Typography color="textSecondary">
          Status: {repositoryInfo.status}
        </Typography>
        <Typography color="textSecondary">
          Files Processed: {repositoryInfo.filesProcessed}
        </Typography>
        <Typography color="textSecondary">
          Number of Files: {repositoryInfo.numFiles}
        </Typography>
      </CardContent>
      <CardActions>
        <SpinnerButton
          onClick={handleButtonClick}
          variant="contained"
          isLoading={disable && buttonText !== "View Analysis"}
        >
          {buttonText}
        </SpinnerButton>
      </CardActions>
      {repoAnalysis && (
           <Box sx={{ flexGrow: 1, minHeight: 0 }}>
        <AnalysisDetails
          repoAnalysis={repoAnalysis}
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          />
          </Box>
          
      )}
    </Card>
  );
}
