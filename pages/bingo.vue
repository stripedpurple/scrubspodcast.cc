<template>
  <section class="section">
    <div class="container">
      <div class="columns column">
        <b-button type="is-success" outlined @click="shuffleCard">New Card</b-button>
      </div>
      <div class="columns bordered is-mobile is-multiline">
        <div class="column is-one-fifth has-background-dark has-text-white" v-for="letter in 'BINGO'"><p
          class="has-text-centered has-text-weight-bold is-size-1">{{letter}}</p></div>

        <div class="column is-one-fifth" v-for="(opt, key) in options.slice(0,25)"
             @click="selected[key] = !selected[key]" :class="{'has-background-success': !!selected[key]}">
          <p class="has-text-centered ">{{key == 12 ? 'Free Space' : opt }}</p></div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        selected: {
          0: '',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: '',
          8: '',
          9: '',
          10: '',
          11: '',
          12: '',
          13: '',
          14: '',
          15: '',
          16: '',
          17: '',
          18: '',
          19: '',
          20: '',
          21: '',
          22: '',
          23: '',
          24: '',
        },
        options: [
          'Dan speaks',
          'Crew shout-out',
          'Guest star on podcast',
          '"Another One"',
          '"You know what I mean?"',
          'Donald sings',
          'Ask Bill segment',
          'Sports talk',
          'Star Wars talk',
          'Joelle speaks',
          'Donald is late',
          'John C. McGinley praise',
          'Fan gets more than 2 questions',
          '"5, 6, 7, 8!" from Bill Lawrence',
          'Garden State mention',
          'Remember the Titans mention',
          'Season 9 mention',
          '"Medical Jargon"',
          'Nurse appreciation',
          '"Ask The Todd" segment',
          '"Scrubs Wiki" segment',
          'Audition story',
          'Donald not knowing his lines',
          'Ringtone idea',
          '"That\'s so funny"',
          'Donald finishes the recap in 30 seconds exactly',
          'Donald finishes the recap in under 30 seconds',
          'Donald finishes the recap in over 30 seconds',
          'Weed talk',
          '"C\'mon buddy."',
          '"But _____ always crushes it."',
          'Bill accused of being "freaky"',
          '"Whatcha tryina get into Adeosun??',
          'Donald references hip-hop or rap',
          'Someone forgets filming a scene',
          'Donald complains about his social media following',
          'Zach sings',
          'Zach mentions musicals',
          'Praise of The Todd\'s line(s)',
          'Zach and Donald argue',
          '"Can we get (back) to the show, Donald?!"',
          'Joshua Radin shout-out',
          'Thunderous applause',
          'Donald does his Oprah voice',
          'Zach gets mad at Donald for Oprah voice or being loud',
          'Zach does his Aaron Neville impression',
          'Donald does his Aaron Neville impression',
          'Donald does his Neil Diamond impression',
          'Tennis talk',
        ]
      }
    },
    created() {
      this.shuffleCard()
    },
    methods: {
      shuffleCard() {
        this.options = shuffle(this.options);
        for (let key in this.selected){
          this.selected[key] = false;
        }
        this.$forceUpdate()
      }
    }
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
</script>

<style scoped>
  .columns.bordered {
    border: 2px solid #363636;
  }

  .columns.bordered.is-mobile > .column.is-one-fifth {
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.25);
    display: flex;
    cursor: pointer;
  }

  .columns.bordered.is-mobile > .column.is-one-fifth > p {
    font-size: 12px;
    user-select: none;
  }

  @media screen and (min-width: 700px) {
    .columns.bordered.is-mobile > .column.is-one-fifth {
      height: 7rem;
    }

    .columns.bordered.is-mobile > .column.is-one-fifth > p {
      font-size: 20px;
    }
  }
</style>
