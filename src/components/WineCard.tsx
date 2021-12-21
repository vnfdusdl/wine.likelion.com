//와인의 자료형을 정해놓은 Wine을 갖고온다
import { Wine } from '../types/Wine';

//wineData는 Wine이 정해놓은 자료형을 따라야 한다
interface WineProps {
    wineData: Wine;
}

// WineCard는 port.tsx에서 넘겨주는 인자,
// 즉, 'WineProps'가 정해준 자료형을 따라야 하는 wineData를 받아서
// HTML 태그를 반환하는 함수이다
export const WineCard = ({ wineData }: WineProps) => {
    const { wine, winery } = wineData;
    return (
        <div>
            <h2>{wine}</h2>
            <p>{winery}</p>
        </div>
    )
}