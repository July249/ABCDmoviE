import createDB from '../../requestAPI.js';
import findConfig from 'find-config';
import dotenv from 'dotenv';

const configs = dotenv.config({ path: findConfig('../.env') });
const id = configs.parsed.NAVER_CLIENT_ID;
const key = configs.parsed.NAVER_CLIENT_SECRET;

const obj = {
  query: 'everything',
  display: 10,
  start: 1,
  genre: '',
  country: '',
  yearfrom: '2021',
  yearto: '2022',
};

createDB(obj, id, key);
