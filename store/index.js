export const state = () => ({
  currentlyPlaying: 0,
  posts: []
})

export const mutations = {
  setCurrentlyPlaying(state, id) {
    state.currentlyPlaying = id
  },
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async getPosts ({ commit }) {
   let posts = await this.$axios.$get('https://us.api.iheart.com/api/v3/podcast/podcasts/60367049/episodes?sortBy=startDate-desc&limit=1000')
    commit('setPosts', posts.data)
  }
}

export const getters = {
  getEpisodeById: (state) => (id) => {
    return  state.posts.filter(x => x.id == id )[0]
  }
}
