import './main-card.scss';

interface MainCardProps {
  numberOfPokemons: number;
}

function MainCard({ numberOfPokemons }: MainCardProps) {
  return (
    <div className="main-card">
      <div className="main-card__header">
        <h1 className="main-card__header__title">Pokemon</h1>
        <p className={'main-card__header__number'}>{numberOfPokemons}</p>
      </div>
      <p>Pokemon list.</p>
    </div>
  );
}

export default MainCard;
