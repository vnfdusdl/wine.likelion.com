import type { NextPage } from "next";
import { WineCardList } from '../../components/WineCardList';


const WhitesWinePage: NextPage = () => {
    const name = "whites";
    

    return (
        <div>
            <WineCardList name ={name}/>
        </div>
        )
}
export default  WhitesWinePage;
