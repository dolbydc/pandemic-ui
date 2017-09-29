<template>
  <div id="infection-card">
    <v-card class='evevation-25'>
      <v-card-media
        class="black--text"
        height="150px"
        v-bind:src='cardImage'>
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-top flexbox>
              <span class='headline'>{{ name }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['name', 'color'],

  computed: {
    cardImage () {
      switch (this.color) {
        case 'yellow':
          return 'static/images/yellow_infection_small.png'
        case 'red':
          return 'static/images/red_infection_small.png'
        case 'blue':
          return 'static/images/blue_infection_small.png'
        case 'black':
          return 'static/images/black_infection_small.png'
      }
    }
  }
}
</script>

<style>
#infection-card {
  width: 300px;
  height: 150px;
  margin: 15px 0 15px 0;
  padding: 15px;
}
.headline {
  font-size: 10pt !important;
  margin-top: -23px;
  margin-left: 10px;
}
</style>
