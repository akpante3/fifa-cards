<template>
  <section class="loading-container" v-if="loading">
    <Loader />
  </section>
  <main class="table-wrapper"  v-else>
    <TableComponent :headers="tableHeaders" :body="fifaCards" />
    <!-- TODO: Pagination -->
  </main>
</template>

<script>
import TableComponent from "../components/table/index.vue";
import { getFifaCards } from "../utils/fifaCardQueries.ts";
import Loader from "../components/loader/index.vue";

export default {
  name: "Home",
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

  mounted() {
    this.getCardsList();
  },

  methods: {
    async getCardsList() {
      this.loading = true
      try {
        const data = await getFifaCards();
        // const res = await fetch('/api/fetchCards')
        // const data = await res.json()

        if (data) {
          this.updateFifaCards(data)
        }
        this.loading = false
      } catch (error) {
        console.error("Error fetching Cards:", error);
        this.loading = false
      }
    },
    updateFifaCards(data) {
      this.fifaCards = data.map((card) => {
        return {
          Name: card.name,
          OVR: card.rating,
          POS: card.position || "",
          Type: card.isGoalkeeper ? 'GK': 'Pl',
          PAC: card.statistics?.physical?.average ?? "",
          SHO: card.statistics?.shooting?.average || "",
          DRI: card.statistics?.dribbling?.average || "",
          DEF: card.statistics?.defense?.average || "",
          PHY: card.statistics?.physical?.average || "",
          WR: card.workRatesAttacking,
          slug: card.slug.current,
        };
      });
    },
  },
};
</script>

<style scoped>
.table-wrapper {
  @apply mb-9;
  max-width: 1500px;
}
</style>
