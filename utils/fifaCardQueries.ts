export interface FifaCard {
  _type: "fifaCard";
  name: string;
  gameVersion?: string;
  isGoalkeeper?: boolean;
  slug?: { _type: "slug"; current: string };
  description?: string;
  cardImage?: {
    _type: "cardImage";
    asset: Object;
  };
  cardType?: string;
  position?: string;
  rating?: number;
  club?: string;
  league?: string;
  nation?: string;
  strongFoot?: number;
  skillMoves?: number;
  age?: string;
  height?: string;
  workRatesAttacking?: string;
  workRatesDefensive?: string;
  statistics?: object;
  linkedArticle?: object;
}

export async function getPlayerStats(
  slug: String
): Promise<FifaCard[] | undefined> {
  const res = await fetch(`/api/singleCard?slug=${slug}`);
  const data = await res.json();
  return data;
}

export async function getFifaCards(): Promise<FifaCard[] | undefined> {
  const res = await fetch("/api/fetchCards");
  const data = await res.json();
  return data;
}
