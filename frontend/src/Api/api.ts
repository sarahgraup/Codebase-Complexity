import { IRepoInput } from '../utils/interfaces';
import apiClient from './apiClient';


export const trackRepository = async (
  remote: string,
  repository: string,
  branch: string,
) => {
  try {
    const response = await apiClient.post('/track', {
      remote,
      repository,
      branch,
    });
    return response.data;
  }
  catch (error: any) {
    console.error(
      'Error tracking repository:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const analyzeRepository = async (
  analysisType: string,
  repository: IRepoInput,
  sessionId?: string,
) => {
  try {
    const response = await apiClient.post('/analyze', {
      analysisType,
      repository,
      sessionId,
    }, { timeout: 50000 });
    return response.data;
  }
  catch (error: any) {
    console.error(
      'Error analyzing repository:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const fetchRepositoryInfo = async (repositoryId: string) => {
  try {
    const response = await apiClient.get(`/getInfo/${repositoryId}`);

    return response.data;
  }
  catch (error) {
    console.error('Error fetching repository info:', error);
    return null;
  }
};

