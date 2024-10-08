import { IAnalysisData } from './interfaces';


export const extractJsonFromMessage = (message: string):
  { Analysis: IAnalysisData; endMessage: string } => {
  const jsonStartIndex = message.indexOf('{');
  const jsonEndIndex = message.lastIndexOf('}');
  const startMessage = message.lastIndexOf('`');

  if (jsonStartIndex === -1 || jsonEndIndex === -1) {
    throw new Error('No JSON found in the message.');
  }

  const jsonString = message.slice(jsonStartIndex, jsonEndIndex + 1);
  let endMessage = message.slice(jsonEndIndex + 1).trim();
  endMessage = endMessage.replace(/^```/, '').replace(/```$/, '').trim();
  const Analysis = JSON.parse(jsonString);
  return { Analysis, endMessage };
};


