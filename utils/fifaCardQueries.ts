import client from "./lib/sanityClient"

export interface FifaCard  {
	_type: 'fifaCard'
	name?: string
	gameVersion?: string
	isGoalkeeper?: boolean
	slug?: { _type: 'slug'; current: string }
	description?: string
	cardImage?: {
		_type: 'cardImage'
		asset: Object
	}
	cardType?: string
	position?: string
	rating?: number
	club?: string
	league?: string
	nation?: string
	strongFoot?: number
	skillMoves?: number
	age?: string
	height?: string
	workRatesAttacking?: string
	workRatesDefensive?: string
	statistics?: object
	linkedArticle?: object
}

export async function getPlayerStats(slug:String) {

	try {
	  const data = await client.fetch(`
		*[_type == "fifaCard" && slug.current == '${slug}'] {
		  ...,
		  cardImage {
			asset-> {
			  _id, metadata {
				lqip, dimensions
			  }
			}
		  },
		}
	  `)
	  return data[0]
	} catch (error) {
	  console.error("Error fetching posts:", error);
	}
  }


 export async function getFifaCards() {
	try {
	  const data = await client.fetch(`*[_type == "fifaCard"]{
		name,
		rating,
		position,
		statistics {
		  shooting { average },
		  passing { average },
		  defense { average },
		  physical { average }
		},
		slug {
		  current
		},
		_id
	  }`);

	  return data;
	} catch (error) {
	  console.error("Error fetching posts:", error);
	}
  }