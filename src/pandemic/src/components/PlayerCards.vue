<template>
  <div id="player-cards">
    <v-data-table
      v-bind:headers="headers"
      :items="playerCards"
      class="elevation-1"
      >
      <template slot="items" scope="props">
        <td>{{ props.item.name }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {text: 'Name', value: 'name', sortable: false}
      ]
    }
  },
  computed: {
    playerCards () {
      return this.$store.getters.playerCards
    }
  }
}
</script>

<style>
</style>
