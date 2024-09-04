const details = {
  index: 'repositories',
  repo: (repositoryId: string) => `repositories/${repositoryId}`,
};

const queryApi = '/query';

export { details, queryApi };
