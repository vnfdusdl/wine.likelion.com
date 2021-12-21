// 데이터를 가져오는 데 사용되는 도구인 useSWR을 가지고 온다.(SWR을 사용할 것)
import useSWR from 'swr';
// (axios를 이용해 API에서 데이터를 받아오는) fetcher를 가지고 온다. (우리가 정의한 것.)
import { fetcher } from '../utils/fetcher'
// constant 폴더에 url에서 반복되는 부분을 상수로 할당해놓은 상수 WINE_API_ENDPOINT를 갖고 온다. 
import { WINE_API_ENDPOINT } from '../constants';

// useSWR 부분 추상화하여 함수를 정의했다. 
// useWindData는 자료형이 string이어야 하는 path를 인자로 받아서 (path에는 아래의 port와 같은 키워드를 넣어줄 것)
// WINE_API_ENDPOINT과 함께 useSWR에 인자로 넣어준다
//그러면 useSWR이 fetcher를 통해 갖고온 데이터를 반환한다. 
export const useWineData = (path: string) => {
    return useSWR(`${WINE_API_ENDPOINT}${path}`, fetcher);
}

// 아래의 추상화 한 것이다. 우리가 사용할 api의 url이 맨뒤만 다르고 같기때문에 반복을 줄이고자 했음.
// const { data, error } = useSWR('https://api.sampleapis.com/wines/port', fetcher);
