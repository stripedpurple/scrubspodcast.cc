<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column">
          <div class="columns is-multiline is-justify-content-center">
            <div class="column is-full">
              <h1 class="title">Latest Episode</h1>
              <iframe v-if="posts.length > 0" allow="autoplay" width="100%" height="200"
                      :src="'https://www.iheart.com/podcast/60367049/episode/' + posts[0].id + '/?embed=true'"
                      frameborder="0"></iframe>
              <div style="margin-top: 1rem">
                <h2 class="is-size-4 has-text-weight-bold">Description</h2>
                <div v-if="posts.length > 0" v-html="posts[0].description"></div>
              </div>
              <br><br>
              <h2 class="is-size-4 has-text-weight-bold">
                Listen On
              </h2>

              <div class="buttons">
                <b-button icon-left="heart" type="is-danger">iHeart Radio</b-button>
                <b-button icon-left="apple" type="is-dark">Apple Podcast</b-button>
                <b-button icon-left="google" type="is-light">Google Podcast</b-button>
                <b-button icon-left="spotify" type="is-success">Spotify</b-button>
              </div>

            </div>
            <div class="column is-full">
              <hr>
            </div>
            <div class="column is-full">
              <h2 class="title">Cast &amp; Crew</h2>
            </div>
            <div class="column is-one-third" v-for="(profile, key) in profiles" :key="key">
              <SocialCard :name="profile.name" :title="profile.title"
                          :profileImg="profile.profileImg" :socials="profile.socials"/>
            </div>
          </div>
        </div>

        <div class="column is-one-third">
          <p class="title is-size-4 pl-4">Available Episodes</p>
          <aside style="max-height: 600px;overflow-y: scroll; padding: 0 .75rem">
            <div class="columns is-multiline">
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
import Player from "../components/Player";
import SocialCard from "~/components/SocialCard";
import {mapState} from 'vuex';


export default {

  name: 'HomePage',
  data() {
    return {
      profiles: [
        {
          name: "Zach Braff",
          title: 'Host',
          profileImg: 'zach-braff.jpg',
          socials: [
            {
              title: 'Instagram',
              icon: 'instagram',
              profileLink: 'https://www.instagram.com/zachbraff/'
            },
            {
              title: 'Twitter',
              icon: 'twitter',
              profileLink: 'https://twitter.com/zachbraff'
            },
            {
              title: 'Spotify',
              icon: 'spotify',
              profileLink: 'https://open.spotify.com/user/zacharysilver'
            },
          ]
        },
        {
          name: "Donald Faison",
          title: 'Host',
          profileImg: 'donald-faison.jpg',
          socials: [
            {
              title: 'Instagram',
              icon: 'instagram',
              profileLink: 'https://www.instagram.com/donald_aison'
            },
            {
              title: 'Twitter',
              icon: 'twitter',
              profileLink: 'https://twitter.com/donald_faison'
            },
          ]
        },
        {
          name: "Joelle Monique",
          title: 'Producer',
          profileImg: 'joelle-monique.jpg',
          socials: [
            {
              title: 'Instagram',
              icon: 'instagram',
              profileLink: 'https://www.instagram.com/joelle_monique/'
            },
            {
              title: 'Twitter',
              icon: 'twitter',
              profileLink: 'https://twitter.com/JoelleMonique'
            },
          ]
        },
        {
          name: "Danl Goodman",
          title: 'Podcast Editor, Engineer, and Producer',
          profileImg: 'danl.jpg',
          socials: [
            {
              title: 'Instagram',
              icon: 'instagram',
              profileLink: 'https://www.instagram.com/djdanl/'
            },
            {
              title: 'Twitch',
              icon: 'twitch',
              profileLink: 'https://www.twitch.tv/dj_danl'
            },
            {
              title: 'Twitter',
              icon: 'twitter',
              profileLink: 'https://twitter.com/JoelleMonique'
            },
          ]
        },
        {
          name: "Scrubs Wiki",
          title: 'Your goto scrubs knowledge base',
          profileImg: 'scrubs-wiki.png',
          socials: [
            {
              title: 'Twitter',
              icon: 'twitter',
              profileLink: 'https://twitter.com/scrubswiki'
            },
          ]
        },
        {
          name: "Bill Lawrence",
          title: 'Scrubs Creator',
          profileImg: 'bill-lawrence.jpeg',
          socials: [
            {
              title: 'Twitter',
              icon: 'twitter',
              profileLink: 'https://twitter.com/VDOOZER'
            }, {
              title: 'YouTube',
              icon: 'youtube',
              profileLink: 'https://www.instagram.com/vdoozer/'
            }
          ]
        },
        {
          name: "iHeart Radio",
          title: 'Production Company',
          profileImg: 'iheart.jpg',
          socials: [
            {
              title: 'Twitter',
              icon: 'twitter',
              profileLink: 'https://twitter.com/iHeartRadio'
            }, {
              title: 'YouTube',
              icon: 'youtube',
              profileLink: 'https://www.youtube.com/user/iHeartRadio'
            }, {
              title: 'Facebook',
              icon: 'facebook',
              profileLink: 'https://www.facebook.com/iheartradio'
            }, {
              title: 'Instagram',
              icon: 'instagram',
              profileLink: 'https://www.instagram.com/iHeartRadio/'
            },
          ]
        },
      ]
    }
  },
  component: [
    Card,
    Player,
    SocialCard
  ],
  computed: {
    ...mapState({
      posts: 'posts'
    })
  }
}
</script>
