import client from "~/utils/lib/sanityClient";

export default defineEventHandler(async () => {
    try {
        const data = await client.fetch(`*[_type == "fifaCard"]{
          name,
          rating,
          position,
          statistics {
            shooting { average },
            passing { average },
            defense { average },
            physical { average },
            dribbling { average },
            isGoalkeeper
          },
          workRatesAttacking,
          slug {
            current
          },
          _id
        }`);
  
        return data;
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
});
