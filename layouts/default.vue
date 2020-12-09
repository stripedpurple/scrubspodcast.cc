<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          >
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item href="/">Home</b-navbar-item>
        <b-navbar-item href="/bingo">Bingo</b-navbar-item>
        <b-navbar-item href="/about">About</b-navbar-item>
        <b-navbar-item href="/contact">Contact</b-navbar-item>
      </template>

    </b-navbar>
    <section class="main-content">
      <nuxt keep-alive/>
    </section>
  </div>
</template>

<script>
export default {}
</script>
