<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="img" :alt="title" loading=lazy>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">{{title}}</p>
          <NuxtLink class="subtitle is-size-6 has-text-primary" :to="'/player?episode='+ id" style="display: flex;align-items: center; margin-top: .5rem"><b-icon icon="play-circle"/> Listen Now</NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.title{
  margin-bottom: .5rem !important;
}
</style>
