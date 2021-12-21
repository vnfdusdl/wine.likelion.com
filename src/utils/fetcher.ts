// fetch를 쉽게 해주는 axios를 가지고 온다.
import axios from 'axios';

// fetcher는 자료형이 string이어야 하는 url을 받아서 그 url에 해당하는 API에서 데이터를 받아온다.
export const fetcher = (url: string) => axios.get(url).then(res => res.data);
