<template lang="html">

    <div class="transition-spot">
        <div class="is-flex is-flex-between">
          <h2 class=title>Puppies for Adoption</h2>
          <router-link class="button is-primary router-link-active":to="{ name: 'new' }">Add a Pupper</router-link>
        </div>
          <h2 class="subtitle">All doggos have been adopted!!! YAY!!!</h2>
          <h2 class="title">Adopted Puppers</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="puppy in puppies">
                <th></th>
                <th></th>
                <th><router-link :to="{ name: 'details', id: puppy.id }">read more</router-link></th>
              </tr>
            </tbody>
          </table>
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
