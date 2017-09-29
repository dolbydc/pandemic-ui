<template>
  <div id="cities">
    <v-data-table
      v-bind:headers="headers"
      :items="cities"
      selected-key="name"
      class="elevation-1"
      >
      <template slot="items" scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.infections || '' }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {text: 'Name', value: 'name', sortable: false},
        {text: 'Infections', value: 'infections', sortable: false}
      ],
      pagination: {
        sortBy: 'name'
      }
    }
  },
  computed: {
    cities () {
      return this.$store.getters.cities
    }
  }
}
</script>

<style>
</style>
