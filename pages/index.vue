<template>
  <div class="loading-container" v-if="loading">
    <Loader />
  </div>
  <section  v-else>
    <TableComponent :headers="tableHeaders" :body="getFifaCards" />
    <!-- TODO: Pagination -->
  </section>
</template>

<script>
import TableComponent from "../components/table";
import { getFifaCards } from "../utils/fifaCardQueries";
import Loader from "../components/loader";

export default {
  data() {
    return {
      fifaCards: [],
      tableHeaders: [
        "Name",
        "OVR",
        "POS",
        "Type",
        "PAC",
        "SHO",
        "DRI",
        "DEF",
        "PHY",
        "WR",
      ],
      loading: true
    };
  },

  components: {
    TableComponent,
    Loader,
  },

  computed: {
    getFifaCards() {
      return this.fifaCards.map((card) => {
        console.log(card, '---------')
        return {
          Name: card.name,
          OVR: card.rating,
          POS: card.position || "",
          Type: card.isGoalkeeper ? 'GK': 'Pl',
          PAC: card.statistics.physical?.average || "",
          SHO: card.statistics.shooting?.average || "",
          DRI: card.statistics.dribbling?.average || "",
          DEF: card.statistics.defense?.average || "",
          PHY: card.statistics.physical?.average || "",
          WR: card.workRatesAttacking,
          slug: card.slug.current,
        };
      });
    },
  },

  mounted() {
    this.getCardsList();
  },

  methods: {
    async getCardsList() {
      this.loading = true
      try {
        const data = await getFifaCards();
        if (data) {
          this.fifaCards = data;
        }
        this.loading = false
      } catch (error) {
        console.error("Error fetching posts:", error);
        this.loading = false
      }
    },
  },
};
</script>

<style scoped></style>
