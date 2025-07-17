import EnglishTypeToFrench from './type/enums/english-to-french-type.enum.ts';

function isFeaturedType(type: string): boolean {
  return (
    type === EnglishTypeToFrench.DRAGON ||
    type === EnglishTypeToFrench.FIGHTING ||
    type === EnglishTypeToFrench.ELECTRIC ||
    type === EnglishTypeToFrench.GRASS ||
    type === EnglishTypeToFrench.WATER ||
    type === EnglishTypeToFrench.FIRE
  );
}

export default isFeaturedType;
