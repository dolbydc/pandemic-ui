<template>
  <div id="infection-rate">
     <v-container fluid grid-list-sm>
      <v-layout row>
        <v-flex xs3></v-flex>
        <v-flex xs1>
          <div class='circle'><img src='static/images/biohazard.gif' width='45' height='45'></img></div>
          <div class='circle-label'>2</div>
        </v-flex>
        <v-flex xs1>
          <div class='circle'></div>
          <div class='circle-label'>2</div>
        </v-flex>
        <v-flex xs1>
          <div class='circle'></div>
          <div class='circle-label'>2</div>
        </v-flex>
        <v-flex xs1>
          <div class='circle'></div>
          <div class='circle-label'>3</div>
        </v-flex>
        <v-flex xs1>
          <div class='circle'></div>
          <div class='circle-label'>3</div>
        </v-flex>
        <v-flex xs1>
          <div class='circle'></div>
          <div class='circle-label'>4</div>
        </v-flex>
        <v-flex xs1>
          <div class='circle'></div>
          <div class='circle-label'>4</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    infectionsRate () {
      this.$store.getters.infectionsRate
    }
  }
}
</script>

<style>
#infection-rate {
  background-color: cornflowerblue;
  width: 45%;
  margin-left: 27.5%;
}
.circle {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: green;
  border: 3px solid lightgreen
}
.circle-label {
  font-size: 20pt;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  margin-left: -5%;
}
img {
  margin-top: -1px;
}
</style>
