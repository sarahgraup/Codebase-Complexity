import dotenv from 'dotenv';

dotenv.config();

interface Config {
  API_KEY: string;
  API_URL: string;
  PORT: number;
}
const API_KEY = process.env.API_KEY || 'secret';
const API_URL = process.env.API_URL || 'url';
const PORT = Number(process.env.PORT) || 3001;

const config: Config = {
  API_KEY,
  API_URL,
  PORT,
};

export default config;
