<template>
  <div id="actions">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media src="/static/images/infection_back.png" height='300px'></v-card-media>
          <v-card-title><h3>Pandemic</h3></v-card-title>
          <v-card-actions>
            <v-btn primary v-if="gameState === 'new'" @click='createBoard'>Create</v-btn>
            <v-btn primary v-else-if="gameState === 'initializing'" @click='initBoard'>Initialize</v-btn>
            <v-btn primary v-else-if="gameState === 'initialized'" @click='infect'>Infect</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    gameState () {
      return this.$store.getters.gameState
    }
  },
  methods: {
    createBoard () {
      this.$store.commit('sendAction', {action: 'INIT', data: 'INIT'})
    },
    initBoard () {
      this.$store.commit('sendAction', {action: 'SEED', data: 'SEED'})
    },
    infect () {
      this.$store.commit('sendAction', {action: 'INFECT', data: 'INFECT'})
    }
  }
}
</script>

<style>
#actions {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
