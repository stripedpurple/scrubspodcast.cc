<template>
  <div class="container player" v-if="!!id && id !== 0">
    <div class="columns">
      <div class="column">
        <iframe allow="autoplay" width="100%" height="200"
                :src="'https://www.iheart.com/podcast/60367049/episode/' + id + '/?embed=true'"
                frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    name: 'Player',
    computed: {
      ...mapState({
        id: 'currentlyPlaying'
      })
    }
  }
</script>

<style scoped>
  .player {
    z-index: 1000;
  }
</style>
