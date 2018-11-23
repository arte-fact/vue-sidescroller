<template>
  <span>
    <img class="player" :src="sprite">
    <span v-on:keyup.left="moveLeft"></span>
  </span>
</template>

<style>
  .player {
    height: 100px;
    width: auto;
  }
</style>

<script>
  const IDLE = "idle"
  const RUN = "run"

  export default {
    data: function () {
      return {
        frame: 1,
        status: '',
        sprite: require('../static/adventurer/idle/adventurer-idle-00.png'),
        numberOfSprites: 3,
        state: IDLE
      }
    },
    mounted: {
      this.animate()
    },
    methods: {
      animate() {
        this.frame++
        this.sprite = require(`../static/adventurer/idle/adventurer-${this.state}-0${this.frame % this.numberOfSprites}.png`)
        setTimeout(this.animate, 100)
      }
    }
  }


</script>
