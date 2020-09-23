<template lang="pug">
  .products
    b-field
      b-select(
        :value="by"
        @input="$emit('update:by', $event)"
        placeholder="Choose sort"
      )
        option(value="name") Name
        option(value="price") Price

      div(v-if="by")
        b-button(
          @click="$emit('update:order', order === 'ASC' ? 'DESC' : 'ASC')"
        ) 
          b-icon(
            :icon="iconName"
          )

        b-button(@click="$emit('update:by', '')")
          b-icon(icon="times")

</template>

<script>
export default {
  props: {
    by: {
      type: String,
      required: true,
    },
    order: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconName() {
      const iconName = this.by === 'name' ? 'sort-alpha' : 'sort-numeric' 
      const iconDirection = this.order === 'ASC' ? 'down' : 'up' 
      return `${iconName}-${iconDirection}`
    },
  }
}
</script>

<style lang="sass" scoped>

</style>