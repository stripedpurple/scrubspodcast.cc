export default async ({store, from}) => {
  let isInitPageLoad = !from

  if (isInitPageLoad) {
    await store.dispatch('getPosts')
  }

}
