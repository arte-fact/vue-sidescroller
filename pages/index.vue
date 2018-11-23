<template>
  <section class="container">
    <div>
      <player/>
    </div>
  </section>
</template>

<script>
import Player from '~/components/Player.vue'

export default {
  components: {
    Player
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

