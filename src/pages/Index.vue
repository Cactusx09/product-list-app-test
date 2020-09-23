<template lang="pug">
  layout
    products-list(
      v-if="products.length"
      :products="products"
    )
    
</template>

<script>
import axios from 'axios'
import Layout from '@layouts/default/DefaultLayout'
import ProductsList from '@components/products/ProductsList'

export default {
  components: {
    Layout,
    ProductsList,
  },

  data() {
    return {
      products: [],
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