<template>
  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg"
  >
    <button @click="() => console.log('clicked')" class="lrrfgg">
      click me
    </button>
    <table class="w-full text-sm text-left rtl:text-right">
      <thead class="text-xs">
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            scope="col"
            class="px-6 py-3"
            role="columnheader"
            aria-sort="none"
          >
            <div :key="index" class="flex items-center">
              {{ header }}
              <button
                @click="sortTable(index)"
                class="ml-2"
                :aria-label="`Sort by ${header}`"
                aria-pressed="false"
              >
                <img
                  src="../../assets/icons/up-arrow.svg"
                  alt=""
                  width="10px"
                  height="5px"
                />
                <img
                  src="../../assets/icons/down-arrow.svg"
                  alt=""
                  width="10px"
                  height="5px"
                />
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="body-row">
        <tr
          v-for="(row, rowIndex) in body"
          :ref="setItemRef(rowIndex)"
          :key="rowIndex"
          role="row"
          tabindex="0"
          @mouseenter="handleRowMouseEnter(rowIndex)"
          @mouseleave="handleRowMouseLeave(rowIndex)"
          @keydown="handleRowKeyDown($event, row.slug)"
        >
          <nuxt-link :to="`/${row.slug}`" class="contents">
            <td
              v-for="(item, key, colIndex) in filterRow(row)"
              :key="colIndex"
              class="px-6 py-4"
            >
              <div
                v-if="key === 'OVR'"
                class="body-row__first-column body-row__number-item"
              >
                {{ item }}
              </div>
              <div v-else-if="Number(item)" class="body-row__number-item">
                {{ item }}
              </div>
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
    return {
      itemRefs: [],
    };
  },

  methods: {
    filterRow({ slug, ...rest }) {
      return rest;
    },
    sortTable(columnIndex) {
      // TODO: sort table
      console.log("what the fuck");
    },
    // setItemRef rows for keyboard accesibility
    // Enter: to change pages
    // Tab: to go down the table
    // tab + shift: go up the table
    setItemRef(rowIndex) {
      return (element) => {
        if (!this.itemRefs[rowIndex]) {
          this.itemRefs[rowIndex] = [];
        }
        this.itemRefs[rowIndex] = element;
      };
    },
    handleRowMouseEnter(rowIndex) {
      const ref = this.itemRefs[rowIndex];
      if (ref) ref.focus();
    },
    handleRowMouseLeave(rowIndex) {
      const ref = this.itemRefs[rowIndex];
      if (ref) {
        // Handle mouse leave
      }
    },
    handleRowKeyDown(event, slug) {
      if (event.key === "Enter") {
        this.$router.push(`/${slug}`);
      }
    },
  },
};
</script>

<style scoped>
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

.body-row {
  &__first-column {
    color: var(--background-color-2);
    background-color: white;
  }

  &__number-item {
    border: var(--text-color) 1px solid;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 40px;
    height: 31px;
    display: flex;
  }
}

.body-row :hover {
  background: var(--background-color-2);
}

.body-row :focus {
  outline: 3px solid var(--background-color-2);
}
</style>
