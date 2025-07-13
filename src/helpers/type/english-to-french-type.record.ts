import FrenchTypeToEnglish from './enums/french-to-english-type.enum.ts';
import EnglishTypeToFrench from './enums/english-to-french-type.enum.ts';

const ENGLISH_TYPE_TO_FRENCH_: Record<string, string> = {
  [FrenchTypeToEnglish.NORMAL]: EnglishTypeToFrench.NORMAL,
  [FrenchTypeToEnglish.COMBAT]: EnglishTypeToFrench.FIGHTING,
  [FrenchTypeToEnglish.VOL]: EnglishTypeToFrench.FLYING,
  [FrenchTypeToEnglish.POISON]: EnglishTypeToFrench.POISON,
  [FrenchTypeToEnglish.SOL]: EnglishTypeToFrench.GROUND,
  [FrenchTypeToEnglish.ROCHE]: EnglishTypeToFrench.ROCK,
  [FrenchTypeToEnglish.INSECTE]: EnglishTypeToFrench.BUG,
  [FrenchTypeToEnglish.SPECTRE]: EnglishTypeToFrench.GHOST,
  [FrenchTypeToEnglish.ACIER]: EnglishTypeToFrench.STEEL,
  [FrenchTypeToEnglish.FEU]: EnglishTypeToFrench.FIRE,
  [FrenchTypeToEnglish.EAU]: EnglishTypeToFrench.WATER,
  [FrenchTypeToEnglish.PLANTE]: EnglishTypeToFrench.GRASS,
  [FrenchTypeToEnglish.ELECTRIK]: EnglishTypeToFrench.ELECTRIC,
  [FrenchTypeToEnglish.PSY]: EnglishTypeToFrench.PSYCHIC,
  [FrenchTypeToEnglish.GLACE]: EnglishTypeToFrench.ICE,
  [FrenchTypeToEnglish.DRAGON]: EnglishTypeToFrench.DRAGON,
  [FrenchTypeToEnglish.TENEBRES]: EnglishTypeToFrench.DARK,
  [FrenchTypeToEnglish.FEE]: EnglishTypeToFrench.FAIRY,
};

export default ENGLISH_TYPE_TO_FRENCH_;
