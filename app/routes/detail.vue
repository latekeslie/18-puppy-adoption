<template lang="html">

      <div class="transition-spot">
        <div>
          <h2 class="title has-text-centered">Ms. Meowy
            <span class="button is-success">
              <span class="icon is-small">
              <i class="fa fa-paw fa-fw"></i>
              </span>
              <span>I'm Adopted!</span>
            </span>
          </h2>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <div class="card is-fullwidth">
                <div class="card-image">
                  <figure class="image">
                    <img src="http://lorempixel.com/200/200/cats/" alt="">
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <nav class="level is-moble">
            <div class="level-item has-text-centered">
              <p class="heading">Age</p>
              <p class="title">4 Months</p>
            </div>
            <div class="level-item has-text-centered">
              <p class="heading">Breed</p>
              <p class="title">Kitteh</p>
            </div>
            <div class="level-item has-text-centered">
              <p class="heading">Color</p>
              <p class="title">Rainbow</p>
            </div>
            <div class="level-item has-text-centered">
              <p class="heading">Sex</p>
              <p class="title">Female</p>
            </div>
          </nav>
          <div class="card is-fullwidth">
            <div class="card-content">
              <h3 class="subtitle">About Me</h3>
              <p>Aloof, You are honored by my presence</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';
export default {
  data() {
    return {
      puppies: this.$select('puppies')
    };
  },

  mounted() {
    store.dispatch(findAll('puppies'));
  },

  methods: {

  },
};
</script>
