<template lang="pug">
  .products
    div(v-if="products.length > 0")
      products-filters(
        v-bind.sync="priceMinMax"
        :price-range.sync="priceRange"
        @property-toogled="filterByProperties($event)"
      )

      products-sort(v-bind.sync="sortOptions")

      .products__list
        products-item(
          v-for="productItem in sortedProducts"
          :key="productItem.id"
          v-bind="productItem"
        )
</template>

<script>
import ProductsItem from '@components/products/ProductsItem'
import ProductsFilters from '@components/products/ProductsFilters'
import ProductsSort from '@components/products/ProductsSort'

export default {
  components: { 
    ProductsItem,
    ProductsFilters,
    ProductsSort,
  },

  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      filteredProducts: this.products,
      priceRange: {
        min: 0,
        max: 0,
      },
      sortOptions: {
        by: '',
        order: 'ASC',
      },
    }
  },

  computed: {
    sortedProducts() {
      if (this.sortOptions.by) {
        const { order, by: sortBy } = this.sortOptions
        let sortedProductsArray = [...this.filteredByPrice].sort((productA, productB) => {
          return String(productA[sortBy]).localeCompare(String(productB[sortBy]))
        })
        return order === 'ASC' ? sortedProductsArray : sortedProductsArray.reverse() 
      }
      return this.filteredByPrice
    },
    priceMinMax() {
      const { min, max } = this.filteredProducts.reduce(
        (acc, { price }) => ({
          min: Math.min(acc.min, price),
          max: Math.max(acc.max, price),
        }),
        { min: Number.MAX_SAFE_INTEGER, max: 0 }
      )
      return{
        min: Math.floor(min),
        max: Math.floor(max) + 1,
      }
    },
    filteredByPrice() {
      const { min, max } = this.priceRange
      return this.filteredProducts.filter((product) => product.price >= min && product.price <= max)
    },
  },

  methods: {
    filterByProperties(selectedProperties) {
      this.filteredProducts = this.products.filter((product) => {
        return selectedProperties.every(prop => product.properties.includes(prop))
      })
    },
  }
}
</script>

<style lang="sass" scoped>
.products
  padding: 2rem
  &__list
    display: grid
    grid-template-columns: repeat(auto-fill, 25%)
</style>