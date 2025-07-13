import type Stats from "./stats.interface.ts";
import type ApiType from "./api-type.ts";
import type ApiResistance from "./api-resistance.ts";
import type ResistanceAbility from "./resistance-ability.ts";
import type Evolution from "./evolution.ts";
import type PreEvolution from "./pre-evolution.ts";

export default interface Pokemon {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: Stats;
  apiTypes: ApiType[];
  apiGeneration: number;
  apiResistances: ApiResistance[];
  resistanceModifyingAbilitiesForApi: ResistanceAbility | ResistanceAbility[];
  apiEvolutions: Evolution[];
  apiPreEvolution: string | PreEvolution;
  apiResistancesWithAbilities: ApiResistance[];
}











