import type ApiType from '../../services/pokemon-api/interfaces/api-type.ts';
import type { JSX } from 'react';
import EnglishTypeToFrench from '../../helpers/type/enums/english-to-french-type.enum.ts';
import { getLowerCaseEnglishTypeFromFrench } from '../../helpers/getLowerCaseEnglishTypeFromFrench.helper.ts';
import TypeCard from '../TypeCard';

interface TypeCardListProps {
  type: Map<string, ApiType>;
  typeCount: Map<string, number>;
}

function TypeCardList({ type, typeCount }: TypeCardListProps): (null | JSX.Element)[] {
  const featuredTypes: EnglishTypeToFrench[] = [
    EnglishTypeToFrench.FIRE,
    EnglishTypeToFrench.WATER,
    EnglishTypeToFrench.GRASS,
    EnglishTypeToFrench.ELECTRIC,
    EnglishTypeToFrench.DRAGON,
    EnglishTypeToFrench.FIGHTING,
  ];

  return featuredTypes.map((typeName) => {
    const apiType = type.get(typeName);
    if (!apiType) return null;

    return (
      <TypeCard
        key={`type-card-${typeName}`}
        image={apiType.image}
        number={typeCount.get(typeName) ?? 0}
        type={typeName}
        imageBackgroundClass={`${getLowerCaseEnglishTypeFromFrench(typeName)}-type-bg-color`}
        unitClass={`${getLowerCaseEnglishTypeFromFrench(typeName)}-type-color`}
      />
    );
  });
}

export default TypeCardList;
