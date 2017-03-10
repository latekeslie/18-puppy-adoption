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
          <li class="panel-block">
            <div class="media">
              <div class="media-left">
                <img src="http://lorempixel.com/75/75/cats/" alt="">
              </div>
              <div class="media-content">
                <h1>Dog Name</h1>
                <a href="/detail">Read more</a>
              </div>
            </div>
          </li>
          <li class="panel-block">
            <div class="media">
              <div class="media-left">
                <img src="http://lorempixel.com/75/75/cats/" alt="">
              </div>
              <div class="media-content">
                <h1>Dog Name</h1>
                <a href="/detail">Read more</a>
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
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
