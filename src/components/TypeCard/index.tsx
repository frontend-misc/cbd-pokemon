import './type-card.scss';

interface TypeCardProps {
  image: string;
  type: string;
  number: number;
  unitClass: string;
  imageBackgroundClass: string;
}

function TypeCard({ image, type, number, imageBackgroundClass, unitClass }: TypeCardProps) {
  return (
    <div className="type-card">
      <div className="type-card__header">
        <img src={image} alt={type} className={`image type-circle ${imageBackgroundClass}`} />
        <div className="type">{type} type</div>
      </div>
      <div className="type-card__body">
        <div className="number">{number}</div>
        <div className={`${unitClass} unit`}>{number <= 1 ? 'Pokemon' : 'Pokemons'}</div>
      </div>
    </div>
  );
}

export default TypeCard;
