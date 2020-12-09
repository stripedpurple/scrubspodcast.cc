<template>
  <div>
    <b-navbar wrapper-class="container" spaced>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="/img/logo.png"
            alt="Fake Doctors Real Friends"
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

    <Player/>
  </div>
</template>

<script>
import Player from "../components/Player";

export default {
  component: [
    Player
  ],
  middleware: 'load-posts'
}
</script>
