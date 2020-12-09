export const state = () => ({
  currentlyPlaying: 0
})

export const mutations = {
  setCurrentlyPlaying(state, id) {
    state.currentlyPlaying = id
  },
  remove(state, { todo }) {
    state.currentlyPlaying = 0
  }
}
