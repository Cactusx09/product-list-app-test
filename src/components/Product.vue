<template lang="pug">
  .product-item
    .product-item__img
      img(:src="image")
    .product-item__name {{ name }}
    .product-item__price {{ priceFormatted }}
    .product-item__info
      span {{ basePrice.price }}
      |  / 
      span {{ measurement }}

</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    priceFormatted: {
      type: String,
      required: true,
    },
    basePrice: {
      type: Object,
    },
    measurement: {
      type: String,
    },
  },
}
</script>