import { Loading, Error, WineCard } from '.';
import { useWineData } from '../hooks/useWineData';
import { Wine } from '../types/Wine';

interface WineCardListProps {
    name: string;
}

export const WineCardList = ({ name }: WineCardListProps) => {
    const { data, error } = useWineData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>Wine</h1>
            <main>
                {/* useWindData를 통해 받아온 data를 map을 통해 하나하나 windeData라는 이름으로 넘겨준다. */}
                {data.map((wineData: Wine) => {
                    return (
                        <WineCard
                            key={`port-wine-list=${wineData.id}`}
                            wineData={wineData}
                        />
                    );
                })}
            </main>
        </div>
    );
};
