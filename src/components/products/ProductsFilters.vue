<template lang="pug">
  div
    div(
      v-for="(isSelected, name) in buttons"
      :key="name"
    )
      b-checkbox(
        :value="isSelected"
        @input="propertyToogled(name)"
      ) {{ name }}

    b-slider(
      :value="priceValue"
      @input="priceChanged($event)"
      :min="min"
      :max="max"
    )
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      requires: true,
    },
    max: {
      type: Number,
      requires: true,
    },
    priceRange: {
      type: Object,
    },
  },

  data() {
    return {
      buttons: {
        'Neu': false,
        'Laktosefrei': false,
        'Vegan': false,
        'Vegetarisch': false,
        'Halal': false,
        'Verf\u00fcgbar': false,
      },
    }
  },

  computed: {
    priceValue() {
      return [this.min, this.max]
    },
  },

  methods: {
    propertyToogled(propertyName) {
      this.buttons[propertyName] = !this.buttons[propertyName]
      const selectedProperties = Object.keys(this.buttons).filter(key => this.buttons[key]);
      this.$emit('property-toogled', selectedProperties)
    },
    priceChanged([min, max]) {
      this.$emit('update:price-range', { min, max })
    },
  },
}
</script>