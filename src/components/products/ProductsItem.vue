<template lang="pug">
  .products-item.has-text-centered
    .products-item__img.mb-4(
      :style="`background-image: url(${image})`"
    )
    .products-item__name.is-size-5.mb-4 {{ name }}
    .products-item__price.is-size-4.has-text-weight-bold {{ priceFormatted }}
    .products-item__info.is-size-6.has-text-weight-medium.has-text-grey
      span {{ basePrice.price }} / 
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

<style lang="sass" scoped>
.products-item
  &__img
    width: 100%
    padding-bottom: 80%
    background-repeat: no-repeat
    background-position: center
    background-size: contain
</style>