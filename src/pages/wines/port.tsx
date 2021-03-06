import type {NextPage} from "next";
// API를 이용해 와인 관련 데이터를 갖고 오는 useWineData를 가지고 온다. 
// 와인 데이터의 자료형을 정해놓은 Wine을 가져온다.
import { WineCardList } from '../../components/WineCardList';

const PortWinePage : NextPage = () => {
    const name = 'port';
    //useWineData에 'port'를 인자로 넣어주면 useWineData는 API가 제공하는 port 와인 관련 데이터 fetch를 시도한다.
    //데이터를 성공적으로 받아오면 data에 할당하고, 에러가 나면 error에 에러내용을 할당한다.
    
    // error가 났다면 Error 컴포넌트를 반환한다.
    // Error가 무엇을 반환하는지는 components 폴더의 Error.tsx에서 확인할 수 있다.
    // 데이터가 아직 없지만 에러는 아닐 때, 즉 로딩중일 때를 뜻한다.
    // data를 아직 받아오지 못했다면 Loading 컴포넌트를 반환한다.
    // Loading이 무엇을 반환하는지는 components 폴더의 Loading.tsx에서 확인할 수 있다.
    // error도 없고, data도 받아왔다면 아래의 코드를 반환한다.
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}


export default PortWinePage;