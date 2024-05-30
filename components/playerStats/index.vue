<template>
  <div class="player-stats">
    <ul>
      <li class="player-stats__header">
        <span class="player-stats__header-title">{{
          formatHeader(header)
        }}</span>
        <span class="text-lg">{{ headerValue }}</span>
      </li>
      <li
        v-for="(value, name, index) in stats"
        class="player-stats__body-value"
      >
        <span>{{ name }}</span>
        <span class="ml-2">{{ value }}</span>
      </li>
    </ul>
  </div>
</template>
<!-- TODO: capitalize headers -->
<script>
export default {
  name: "PlayerStats",
  props: {
    header: {
      type: String,
      default: "",
    },
    stats: {
      type: Object,
      default: [],
    },
    headerValue: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    formatHeader(str) {
      if (str.length < 3) {
        return str.toUpperCase();
      }
      return str.slice(0, 3).toUpperCase();
    },
  },
};
</script>

<style scoped lang="scss">
.player-stats {
  @apply max-w-sm mx-auto;
  min-width: 130px;
  @media (max-width: 1074px) {
    @apply text-sm;
  }

  &__header {
    @apply border-y-2 flex justify-between items-center py-2;
  }
  &__header-title {
    @apply text-lg font-bold;
  }
  &__body-value {
    @apply flex justify-between items-center py-2 capitalize
  }
}
</style>
