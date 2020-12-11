<template>
  <div>
    <b-navbar wrapper-class="container" spaced>
      <template slot="brand">
        <b-navbar-item href='/'>
          <picture>
            <source :srcSet="require('~/assets/img/logo.png?webp')" type="image/webp" loading=lazy/>
            <source :srcSet="require('~/assets/img/logo.png')" type="image/jpeg" loading=lazy/>
            <img :src="require('~/assets/img/logo.png')" loading=lazy/>
          </picture>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item href="/">Home</b-navbar-item>
        <b-navbar-item href="/bingo">Bingo</b-navbar-item>
        <b-navbar-item href="https://cottonbureau.com/stores/fake-doctors-real-friends-with-zach-donald#/shop" target="_blank" rel="noreferrer nofollow">Merch</b-navbar-item>
        <b-navbar-item href="https://www.iheart.com/content/2020-05-28-ringtones/" target="_blank" rel="noreferrer nofollow">Ringtones</b-navbar-item>
        <b-navbar-item href="/about">About</b-navbar-item>
        <b-navbar-item href="/contact">Contact</b-navbar-item>
      </template>

    </b-navbar>
    <section class="main-content">
      <nuxt/>
    </section>

    <!-- <Player/> -->
  </div>
</template>

<script>
// import Player from "../components/Player";

export default {
  component: [
    // Player
  ],
  mounted() {  
    if (window.history.length <= 2) {
      this.$store.dispatch('getPosts')
    }
  }
}
</script>