<template lang="html">
  <div class="">

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
