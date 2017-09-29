<template>
  <div id="infection-cards">
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex sm4 v-for="i in infectionCards"
                    v-bind:key="i">
          <app-infection-card :name='i.name' :color='i.virus'></app-infection-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import InfectionCard from './InfectionCard.vue'

export default {
  data () {
    return {
      headers: [
        {text: 'Name', value: 'name'}
      ],
      pagination: {
        sortBy: 'name'
      }
    }
  },
  computed: {
    infectionCards () {
      return this.$store.getters.infectionCards
    }
  },
  components: {
    appInfectionCard: InfectionCard
  }
}
</script>

<style>
</style>
