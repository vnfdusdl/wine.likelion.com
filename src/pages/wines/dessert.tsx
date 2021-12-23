import type { NextPage } from "next";
// import { Loading, Error, WineCard } from '../../components';
// import { useWineData } from '../../hooks/useWineData';
// import { Wine } from '../../types/Wine';
import { WineCardList } from '../../components/WineCardList';

const DessertWinePage: NextPage = () => {
    const name = "dessert";
    // const { data, error} = useWineData(name);
    
    // if(error) return <Error />;
    // if(!data) return <Loading />;

    return (
        <div>
            <WineCardList name={name}/>
        </div>
        )
}
export default  DessertWinePage;
