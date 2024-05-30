<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right">
      <thead class="text-xs">
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            scope="col"
            class="px-6 py-3"
          >
            <div :key="index" class="flex items-center">
              {{ header }}
              <a href="#" class="ml-2">
                <img
                  src="../../assets/icons/up-arrow.svg"
                  alt="Up arrow icon"
                  width="10px"
                  height="5px" />
                <img
                  src="../../assets/icons/down-arrow.svg"
                  alt="down arrow icon"
                  width="10px"
                  height="5px"
              /></a>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="body-row">
        <tr v-for="(row, index) in body" :key="index">
          <nuxt-link :to="`/${row.slug}`" class="contents">
            <td
              v-for="(item, key, id) in filterRow(row)"
              :key="id"
              class="px-6 py-4"
            >
              <div v-if="key === 'OVR'" class="first-column number-item">
                {{ item }}
              </div>
              <div v-else-if="Number(item)" class="number-item">{{ item }}</div>
              <span v-else>{{ item }}</span>
            </td>
          </nuxt-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "TableComponent",
  props: {
    rows: {
      type: Array,
      default: [],
    },
    headers: {
      type: Array,
      default: [],
    },
    body: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },

  methods: {
    filterRow({ slug, ...rest }) {
      return rest;
    },
  },
};
</script>

<style scoped>
.number-item {
  border: var(--text-color) 1px solid;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 31px;
  display: flex;
}
.contents:hover {
  background-color: white;
}
.first-column {
  color: var(--background-color-2);
  background-color: white;
}
table {
  background: linear-gradient(
    180deg,
    var(--background-color-1) 10%,
    var(--background-color-3) 52%,
    var(--background-color-4) 70%
  );
}
th {
  @apply mr-2;
}
.body-row :hover {
  background: var(--background-color-3)
}
</style>
