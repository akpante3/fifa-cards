import client from "~/utils/lib/sanityClient";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

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
        `);
    return data[0];
  } catch (error) {
    console.error("Error fetching card:", error);
  }
});
