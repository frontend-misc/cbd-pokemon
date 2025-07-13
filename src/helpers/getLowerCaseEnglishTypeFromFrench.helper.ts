import FrenchToEnglishTypeEnum from './type/enums/french-to-english-type.enum.ts';
import { normalizeWord } from '../utils/normalizeWord.utils.ts';

export function getLowerCaseEnglishTypeFromFrench(type: string): string {
  const englishType: string =
    FrenchToEnglishTypeEnum[
      normalizeWord(type).toUpperCase() as keyof typeof FrenchToEnglishTypeEnum
    ] ?? '';

  return englishType.toLowerCase();
}
