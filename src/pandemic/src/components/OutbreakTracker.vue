<template>
  <div id="outbreak-tracker">
    <div class='diamond'></div>
    <div class='diamond'></div>
    <div class='diamond'></div>
    <div class='diamond'></div>
    <div class='diamond'></div>
    <div class='diamond'></div>
    <div class='diamond'></div>
  </div>
</template>

<script>
export default {
  computed: {
    totalOutbreaks () {
      this.$store.getters.totalOutbreaks
    }
  }
}
</script>

<style>
#outbreak-tracker {
  position: fixed;
  left: 0;
  top: 0;
  width: 100px;
  height: 500px;
  margin-left: 27.5%;
}
.diamond {
	width: 0;
	height: 0;
	border: 50px solid transparent;
	border-bottom-color: red;
	position: relative;
	top: -50px;
}
.diamond:after {
	content: '';
	position: absolute;
	left: -50px;
	top: 50px;
	width: 0;
	height: 0;
	border: 50px solid transparent;
	border-top-color: red;
}
.left {
  left: -250%;
}
.right {
  right: -200%;
}

</style>
