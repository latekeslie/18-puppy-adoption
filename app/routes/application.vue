<template lang="html">
  <div class="app">

    <nav class="nav">
      <div class="nav-left">
          <router-link class="nav-item is-brand" :to="{ name: 'index' }">Puppies</router-link>
      </div>
      <div class="nav-right">
        <router-link class="nav-item" :to="{ name: 'index' }">All Puppies</router-link>
        <router-link class="nav-item" :to="{ name: 'new' }">Add Puppy</router-link>
      </div>
    </nav>

    <div class="section">
      <div class="container">
        <ul class="panel">
          <li class="panel-heading">Adopt a pupper</li>
          <li v-for="puppy in puppies" :puppies="puppy" class="panel-block">
            <div class="media">
              <div class="media-left">
                <img v-bind:src="puppy.image" alt="">
              </div>
              <div class="media-content">
                <h1>{{puppy.name}}</h1>
                <router-link :to="{ name: 'detail', id: puppy.id }">Read more</router-link>
                <!-- <a href="/detail">Read more</a> -->
              </div>
            </div>
          </li>

        </ul>

        <main>
          <transition>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </main>
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
