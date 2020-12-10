<template>
  <section class="section">
    <div class="container player">
      <div class="columns">
        <div class="column">
          <iframe allow="autoplay" width="100%" height="200"
                  :src="'https://www.iheart.com/podcast/60367049/episode/' + $route.query.episode + '/?embed=true&autoplay=true'"
                  frameborder="0"></iframe>

          <div v-html="getEpisodeById($route.query.episode).description"></div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'Player',
    computed: {
      // ...mapState({
      //
      // })
      ...mapGetters([
        'getEpisodeById'
      ])
    }
  }
</script>
