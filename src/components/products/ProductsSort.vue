<template lang="pug">
  .products-sort.columns
    b-field.column.is-4.is-offset-8.has-addons
      .control(v-if="by")
        b-button.control(@click="$emit('update:by', '')")
          b-icon(icon="times")
          
      
      b-select.products-sort__select(
        :value="by || null"
        @input="$emit('update:by', $event)"
        placeholder="Choose sort"
        expanded
      )
        option(value="name") Name
        option(value="price") Price

      .control(v-if="by")
        b-button(@click="$emit('update:order', order === 'ASC' ? 'DESC' : 'ASC')") 
          b-icon(:icon="iconName")
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