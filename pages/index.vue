<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column">
          <h1 class="title">Latest Episode</h1>
          <iframe allow="autoplay" width="100%" height="200" :src="'https://www.iheart.com/podcast/60367049/episode/' + posts[0].id + '/?embed=true'" frameborder="0"></iframe>
          <div  style="margin-top: 1rem">
            <p class="is-size-4 has-text-weight-bold">Description</p>
            <div v-html="posts[0].description"></div>
          </div>
        </div>
        <div class="column is-one-third">
          <aside style="max-height: 600px;overflow-y: scroll; padding: 0 .5rem">
            <div class="columns is-multiline">
              <div class="column is-full">
                <p class="title is-size-4">Available Episodes</p>
              </div>
              <div class="column is-full" v-for="(post, key) in posts" :key="key">
                <Card :title="post.title" :img="post.imageUrl" :id="post.id"/>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {

  name: 'HomePage',
  component: [
    Card
  ],
  data() {
    return {

    }
  },
  async asyncData({ $axios }) {
    const post = await $axios.$get(`https://us.api.iheart.com/api/v3/podcast/podcasts/60367049/episodes?sortBy=startDate-desc`)
    console.log(post)
    return { posts: post.data }
  }
}
</script>
