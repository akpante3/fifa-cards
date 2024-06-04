<template>
  <div class="table-wrapper">
    <table>
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
      <tbody class="table-wrapper__body-row">
        <tr
          v-for="(row, rowIndex) in body"
          :ref="setItemRef(rowIndex)"
          :key="rowIndex"
          role="row"
          tabindex="0"
          @mouseenter="handleRowMouseEnter(rowIndex)"
          @mouseleave="handleRowMouseLeave(rowIndex)"
          @keydown="handleRowKeyDown($event, row.slug, rowIndex)"
        >
          <nuxt-link :to="`/${row.slug}`" class="contents">
            <td
              v-for="(item, key, colIndex) in filterRow(row)"
              :key="colIndex"
              class="px-6 py-4"
            >
              <div
                :class="{
                  'table-wrapper__body-row__first-column': key === 'OVR',
                  'table-wrapper__body-row__number-item':
                    key === 'OVR' || Number(item),
                }"
              >
                {{ item }}
              </div>
              <!-- <span v-if="key !== 'OVR' && Number(item)">{{ item }}</span> -->
            </td>
          </nuxt-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
const itemRefs = ref(null)


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
      // itemRefs: [],
    };
  },

  methods: {
    filterRow({ slug, ...rest }) {
      return rest;
    },
    sortTable(columnIndex) {
      // TODO: sort table
    },
    // setItemRef for accesibility
    // Enter: to change pages
    // Tab: to go down the table
    // tab + shift: go up the table
    setItemRef(rowIndex) {
      return (element) => {
        if (itemRefs[rowIndex]) {
          itemRefs[rowIndex] = [];
        }
        itemRefs[rowIndex] = element;
      };
    },
    handleRowMouseEnter(rowIndex) {
      const ref = itemRefs[rowIndex];
      if (ref) ref.focus();
    },
    handleRowMouseLeave(rowIndex) {
      const ref = itemRefs[rowIndex];
      if (ref) {
        // Handle mouse leave
      }
    },
    handleRowKeyDown(event, slug, rowIndex) {
      if (event.key === "Enter") {
        this.$router.push(`/${slug}`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
table {
  @apply w-full text-sm text-left rtl:text-right;
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

.table-wrapper {
  @apply relative overflow-x-auto shadow-md sm:rounded-lg;

  &__body-row {
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

  &__body-row :hover {
    background: var(--background-color-2);
  }

  &__body-row :focus {
    outline: 3px solid var(--background-color-2);
  }
}
</style>
