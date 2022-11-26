import createDB from '../../requestAPI.js';
import findConfig from 'find-config';
import dotenv from 'dotenv';

const configs = dotenv.config({ path: findConfig('.env') });
const id = configs.parsed.NAVER_CLIENT_ID;
const key = configs.parsed.NAVER_CLIENT_SECRET;
console.log(id, key);

const obj = {
  query: '블랙 팬서: 와칸다 포에버',
  display: 10,
  start: 1,
  genre: '',
  country: '',
  yearfrom: '',
  yearto: '',
};

// createDB(obj, id, key);
console.log();
