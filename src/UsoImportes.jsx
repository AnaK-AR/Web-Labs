import { heroes } from './data/hero';

export const UsoImportes = () => {
    return (
      <div>
        <h1>Lista de Heroes</h1>
        <ul>
          {hero.map((hero, index) => (
            <li key={index}>
              {airport.code} - {airport.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };