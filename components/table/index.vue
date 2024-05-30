<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            scope="col"
            class="px-6 py-3"
          >
            <div :key="index" class="flex items-center">
              {{ header }}
              <a href="#"
                >
                <img src="../../assets/icons/up-arrow.svg" alt="Up arrow icon" class="w-3 h-3" />
                <img src="../../assets/icons/down-arrow.svg" alt="down arrow icon" class="w-3 h-3" /></a>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in body"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <nuxt-link
            :to="`/${row.slug}`"
            class="contents"
          >
            <td
              v-for="(item, key, id) in filterRow(row)"
              :key="id"
              class="px-6 py-4"
            >
              <div v-if="key === 'OVR'" class="first-column">{{ item }}</div>
              <div v-else-if="Number(item)" class="first-column">{{ item }}</div>
              <span v-else>{{ item }}</span>
            </td>
          </nuxt-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { VTable } from 'vuejs-smart-table'

export default {
  name: "TableComponent",
  props: {
    rows: {
      /** @type {import('vue').PropType<row[]>} */
      type: Array,
    },
    rowsPerPage: {
      type: Number,
    },
    headers: {
      type: Array,
    },
    body: {
      type: Array,
    },
  },
  data() {
    return {};
  },

  methods: {
    handleRowClick(slug) {
      console.log(slug, "------");
    },
    filterRow(row) {
      const { slug, ...rest } = row;
      // if (this.header.length === this.rest.length) {
      //   console.log('======= hello')
      // }
      return rest;
    },
  },
};
</script>

<style scoped>
.first-column {
  background-color: white ;
  border: black 1px solid;
  justify-content: center; 
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 31px;
  display:flex

}
</style>
