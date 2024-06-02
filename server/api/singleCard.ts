import client from "~/utils/lib/sanityClient";
import { getFifaCards } from "~/utils/fifaCardQueries";


// export default defineEventHandler((event) => {
//     const query = getQuery(event)
  
//     return { a: query.foo, b: query.baz }
//   })
//   /api/query?foo=bar&baz=qux
export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    try {
        const data = await client.fetch(`
          *[_type == "fifaCard" && slug.current == '${query.slug}'] {
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
        console.error("Error fetching card:", error);
      }
});