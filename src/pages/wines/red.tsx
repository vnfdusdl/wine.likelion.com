import type { NextPage } from "next";
import { Loading, Error, WineCard } from '../../components';
import { useWineData } from '../../hooks/useWineData';
import { Wine } from '../../types/Wine';

const RedWinePage: NextPage = () => {
    const name = "reds";
    const { data, error} = useWineData(name);
    
    if(error) return <Error />;
    if(!data) return <Loading />;

    return (
        <div>
            <h1>Red Wines</h1>
            <main>
                {data.map((wineData: Wine) => {
                    return (
                        <WineCard
                        key={`red-wine-list=${wineData.id}`}
                        wineData={wineData}
                        />
                    );
                })}
            </main>
        </div>
        )
}
export default  RedWinePage;
