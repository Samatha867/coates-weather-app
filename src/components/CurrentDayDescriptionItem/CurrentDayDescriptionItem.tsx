type Props = {
    name: string;
    value: number;
    unit: string;
};

const CurrentDayDescriptionItem = ({ name, value, unit }: Props) => (
    <div className="d-flex justify-content-between">
        <p className="mb-0 font-weight-bolder text-uppercase">{name}</p>
        <p className="mb-0">
            {value} {unit}
        </p>
    </div>
);

export default CurrentDayDescriptionItem;
