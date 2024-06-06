<template>
  <section class="loading-container" v-if="loading">
    <Loader />
  </section>

  <main class="detail-page" v-else>
    <section class="detail-page__player-stats" v-if="computedPlayerStats">
      <img
        v-if="cardImage"
        :src="$urlFor(cardImage).size(180).url()"
        alt="Player card image"
        height="180"
        width="220"
        loading="lazy"
      />
      <div class="detail-page__player-stats-table">
        <div v-for="(value, name, index) in computedPlayerStats" :key="index">
          <PlayerStats
            class="detail-page__player-stats-table-item"
            :header="name"
            :headerValue="getAverageStat(name)"
            :stats="filterStat(value)"
          />
        </div>
      </div>
    </section>
    <section class="detail-page__info-wrapper">
      <h1 class="detail-page__player-name">{{ player.name }}</h1>
      <nuxt-link class="underline" to="/">View all cards</nuxt-link>
    </section>
    <section class="detail-page__player-info">
      <div
        v-for="(value, name, index) in playerInfo"
        class="detail-page__player-info-item"
        :key="index"
      >
        <span class="detail-page__player-info-name"> {{ name }} </span>
        <span class="detail-page__player-info-value"> {{ value }} </span>
      </div>
    </section>
  </main>
</template>

<script>
import PlayerStats from "../components/playerStats/index.vue";
import Loader from "../components/loader/index.vue";
import { getPlayerStats } from "../utils/fifaCardQueries";

export default {
  name: "PlayerCardDetails",
  data() {
    return {
      player: {},
      loading: true,
    };
  },
  components: {
    PlayerStats,
  },

  mounted() {
    this.playerStat();
  },
  computed: {
    computedPlayerStats() {
      let result = [];
      if (this.player.statistics) {
        result = this.player.statistics;
      }
      return result;
    },
    cardImage() {
      return this.player.cardImage ? this.player.cardImage : "";
    },
    playerInfo() {
      if (this.player) {
        return {
          club: this.player?.club || "",
          league: this.player?.league || "",
          nation: this.player?.nation || "",
          strongFoot: this.player?.strongFoot || "",
          age: this.player?.age || "",
          height: this.player?.height || "",
          workRatesAttacking: this.player.workRatesAttacking || "",
        };
      }
      return {};
    },
  },
  methods: {
    async playerStat() {
      const router = useRouter();
      this.loading = true;

      try {
        const data = await getPlayerStats(this.$route.params.slug);

        if (!data) {
          console.log("am i invincible");
          router.push({ path: "/404" });
          return;
        }

        if (data) {
          this.player = data;
        }

        this.loading = false;
      } catch (error) {
        console.error("Error fetching Player Stat:", error);
        this.loading = false;
      }
    },
    filterStat(stats) {
      return Object.fromEntries(
        Object.entries(stats).filter(([key]) => key !== "average")
      );
    },
    getAverageStat(name) {
      return this.computedPlayerStats[`${name}`]?.average;
    },
  },
};
</script>

<style scoped lang="scss">
@import "[slug].scss";
</style>
