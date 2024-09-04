import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Grid, Typography } from '@mui/material';
import Header from './components/Header';
import RepositoryInput from './components/RepositoryInput';
// import Visualization from './components/Visualization';
import { IRepoInput, IRepositoryInfo, IRepoAnalysis } from './utils/interfaces';
import { trackRepository, analyzeRepository } from './Api/api';
import RepositoryCard from './components/RepositoryCard';
import { extractJsonFromMessage } from './utils/helpers';
import { mockRepoInfo, mockResult } from './utils/mockdata';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmDisable, setConfirmDisable] = useState(false);
  const [repoInfo, setRepoInfo] = useState<IRepositoryInfo | null>(null);
  const [repositories, setRepositories] = useState<IRepositoryInfo[]>([]);
  const [disable, setDisable] = useState(false);
  const [repoAnalysis, setRepoAnalysis] = useState<IRepoAnalysis | null>(null);
  const [analysisStatus, setAnalysisStatus] = useState<{
    [key: string]: boolean;
  }>({});

  const handleAddRepo = async (repoInput: IRepoInput) => {
    setConfirmDisable(true);
    try {
      const result = await trackRepository(
        repoInput.remote,
        repoInput.repository,
        repoInput.branch,
      );
      if (result && result.status === 'completed') {
        setRepoInfo(result);
        setRepositories((prevRepos) => [...prevRepos, result]);
        setModalOpen(false);
      }
      setModalOpen(false);
    }
    catch (error) {
      console.error('error tracking repo', error);
      setModalOpen(true);
    }
    setConfirmDisable(false);
    setModalOpen(false);
  };

  const handleCreateAnalysis = async (repoInput: IRepoInput) => {
    setDisable(true);
    try {
      const result = await analyzeRepository('cyclomatic-complexity', repoInput);
      if (result && result.message) {
        const jsonMessage = extractJsonFromMessage(result.message);
        result.message = jsonMessage;

        setRepoAnalysis(result);
        setAnalysisStatus((prevStatus) => ({
          ...prevStatus,
          [repoInput.repository]: true,
        }));
      }
    }
    catch (error) {
      console.error('failed', error);
    }
    setDisable(false);
  };

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };


  return (
    <React.StrictMode>
      <Header />
      <Grid container spacing={2} sx={{ flexGrow: 1, padding: 2 }}>
        <Grid
          item
          xs={12}
          display='flex'
          flexDirection='column'
          alignItems='flex-end'
          justifyContent='space-between'
        >
          <Button variant='outlined' onClick={handleClick} sx={{ p: 2, m: 2 }}>
            Enter New Repository
          </Button>
        </Grid>
        {modalOpen && (
          <RepositoryInput
            isOpen={modalOpen}
            onClose={handleClose}
            onConfirm={(repoInput: IRepoInput) => handleAddRepo(repoInput)}
            confirmDisable={confirmDisable}
          />
        )}
        {repositories.length > 0 ? (
          <Grid container>
            {repositories.map((repo) => (
              <Grid item xs={12} key={repo.sha} sx={{ m: 2 }}>
                <RepositoryCard
                  repositoryInfo={repo}
                  handleCreateAnalysis={handleCreateAnalysis}
                  disable={disable}
                  repoAnalysis={repoAnalysis}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant='h5' color='textSecondary' m={2}>
            No repositories tracked yet.
          </Typography>
        )}
      </Grid>
    </React.StrictMode>
  );
}

export default App;
