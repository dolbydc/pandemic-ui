<template>
  <div id="app">
    <app-outbreak-tracker></app-outbreak-tracker>
    <app-actions></app-actions>

    <br>

    <app-infection-rate></app-infection-rate>

    <br>

    <v-tabs dark fixed centered>
      <v-tabs-bar slot="activators" class="green">
        <v-tabs-slider class="red"></v-tabs-slider>
        <v-tabs-item
          v-for="i in items"
          :key="i"
          :href="'#tab-' + i"
        >
          <span>{{ i }}</span>
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-content
        v-for="i in items"
        :key="i"
        :id="'tab-' + i"
      >
        <v-card v-if='i == "discarded-infection"' flat>
          <app-discarded-infection></app-discarded-infection>
        </v-card>
        <v-card v-if='i == "infection-cards"' flat>
          <app-infection-cards></app-infection-cards>
        </v-card>
        <v-card v-if='i == "cities"' flat>
          <app-cities></app-cities>
        </v-card>
        <v-card v-if='i == "player-cards"' flat>
          <app-player-cards></app-player-cards>
        </v-card>
      </v-tabs-content>
    </v-tabs>
  </div>
</template>

<script>
  import Actions from './components/Actions.vue'
  import DiscardedInfection from './components/DiscardedInfection.vue'
  import InfectionCards from './components/InfectionCards.vue'
  import Cities from './components/Cities.vue'
  import PlayerCards from './components/PlayerCards.vue'
  import InfectionRate from './components/InfectionRate.vue'
  import OutbreakTracker from './components/OutbreakTracker.vue'

  export default {
    name: 'app',

    data () {
      return {
        items: [
          'player-cards',
          'discarded-infection',
          'infection-cards',
          'cities'
        ]
      }
    },

    components: {
      appActions: Actions,
      appPlayerCards: PlayerCards,
      appDiscardedInfection: DiscardedInfection,
      appInfectionCards: InfectionCards,
      appCities: Cities,
      appInfectionRate: InfectionRate,
      appOutbreakTracker: OutbreakTracker
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
