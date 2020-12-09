<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-rounded">
        <img :src="'/img/' + profileImg" alt="name">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ title }}</p>
        </div>
      </div>

    </div>
    <footer class="card-footer">

        <a class="card-footer-item" :href="social.profileLink" v-for="(social, key) in socials" :key="key" target="_blank" rel="noreferrer nofollow">
                  <b-icon :icon="social.icon"/></a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    profileImg: {
      type: String,
      required: true
    },
    socials: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.card-content,
.media-content,
.media {
  height: 100%;
}
</style>
