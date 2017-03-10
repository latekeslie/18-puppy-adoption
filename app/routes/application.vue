<template lang="html">
  <div class="app">

    <nav class="nav">
      <div class="nav-left">
          <h1><a href="/" class="nav-item is-active">Puppies</a></h1>
      </div>
      <div class="nav-right">
        <a href="/" class="nav-item">All Puppies</a>
        <a href="/new" class="nav-item">Add Puppy</a>
      </div>
    </nav>

    <aside class="menu">
      <h5 class="menu-label">Adopt a pupper</h5>
      <ul class="menu-list">
        <li class="media">
          <div class="media-left">
            <img src="http://lorempixel.com/75/75/cats/" alt="">
          </div>
          <div class="media-content">
            <h1>Dog Name</h1>
            <a href="/detail">Read more</a>
          </div>
        </li>
        <li class="media">
          <div class="media-left">
            <img src="http://lorempixel.com/75/75/cats/" alt="">
          </div>
          <div class="media-content">
            <h1>Dog Name</h1>
            <a href="/detail">Read more</a>
          </div>
        </li>
        <li class="media">
          <div class="media-left">
            <img src="http://lorempixel.com/75/75/cats/" alt="">
          </div>
          <div class="media-content">
            <h1>Dog Name</h1>
            <a href="/detail">Read more</a>
          </div>
        </li>
        <li class="media">
          <div class="media-left">
            <img src="http://lorempixel.com/75/75/cats/" alt="">
          </div>
          <div class="media-content">
            <h1>Dog Name</h1>
            <a href="/detail">Read more</a>
          </div>
        </li>
      </ul>
    </aside>

    <main>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </main>



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
