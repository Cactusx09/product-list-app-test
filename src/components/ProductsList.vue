<template lang="pug">
  .products-list
    product(
      v-for="productItem in products"
      :key="productItem.id"
      v-bind="productItem"
    )
</template>

<script>
import axios from 'axios'
import Product from '@components/Product'

export default {
  components: { Product },

  data() {
    return {
      products: [],
      properties: [
        'Neu',
        'Laktosefrei',
        'Vegan',
        'Vegetarisch',
        'Halal',
        'Verf\u00fcgbar'
      ],
    }
  },

  created() {
    axios.get('./api/products.json')
      .then(({ data }) => {
        this.products = data
      })
  },

}
</script>