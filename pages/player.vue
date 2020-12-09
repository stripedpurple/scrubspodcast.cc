<template>
  <div class="container player">
    <div class="columns">
      <div class="column">
        <iframe allow="autoplay" width="100%" height="200"
                :src="'https://www.iheart.com/podcast/60367049/episode/' + $route.query.episode + '/?embed=true'"
                frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Player',
}
</script>
