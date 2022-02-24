import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem/CurrentDayDescriptionItem';

type Props = {
    forecast: any[];
};

const CurrentDayDescription = ({ forecast }: Props) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {forecast.map(item => (
                <CurrentDayDescriptionItem {...item} key={item.name} />
            ))}
        </div>
    </div>
);

export default CurrentDayDescription;
