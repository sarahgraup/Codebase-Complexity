import express, { Request, Response, NextFunction } from 'express';
import apiClient from 'utils/apiClient';
import { queryApi, details } from 'utils/apiUrls';
import { BadRequestError } from 'expressError';
import { analysisMessages, getAnalysisMessage } from 'utils/analysisUtils';


export const trackRepository = async (req: Request, res: Response, next: NextFunction) => {
  const { remote, repository, branch } = req.body;
  try {
    const response = await apiClient.post(details.index, {
      remote,
      repository,
      branch,
    });
    const { statusEndpoint } = response.data;

    console.log('status endpoint', statusEndpoint);

    const getResponse = await apiClient.get(statusEndpoint);
    console.log('repo info', getResponse.data);
    res.json(getResponse.data);

    // res.json(response.data);
  } catch (error) {
    next(error);
  }
};

export const getRepoInfo = async (req: Request, res: Response, next: NextFunction) => {
  const { repositoryId } = req.params;
  console.log("repository id", repositoryId);
   if (!repositoryId) {
     console.error("Repository ID is undefined");
     return;
   }
  try {
    const response = await apiClient.get(details.repo(repositoryId));
    console.log(response);
    res.json(response.data);

    
  } catch (err) {
    console.error('error', err);

    next(new Error(`${err} and repo id ${repositoryId}`));
  }
}

export const analyzeRepository = async (req: Request, res: Response, next: NextFunction) => {
  const { analysisType, repository, sessionId } = req.body;

  if (!Object.keys(analysisMessages).includes(analysisType)) {
    return next(new BadRequestError('Invalid analysis type'));
  }
  const analysisMessage = getAnalysisMessage(analysisType);
  console.log("mesasge", analysisMessage, "repo", repository);



  try {
    const response = await apiClient.post(queryApi, {
      messages: [analysisMessage],
      repositories: [repository]
    });
    console.log("repsonse", response);
    res.json(response.data);
  } catch (error) {
    console.error("there is error");
    next(error);
  }
};
