<template lang="html">
  <div class="transition-spot">
    <form class="control" v-on:submit.prevent="add(formValues)">
      <h2 class="title">Found a Pupper? We Can Help!</h2>
      <label for="name">Name</label>
      <p class="control">
        <input class="input" type="text" name="name" v-model="formValues.name">
      </p>
      <label for="age">Age</label>
      <p class="control">
        <input class="input" type="text" name="age" v-model="formValues.age">
      </p>
      <label for="sex">Sex</label>
      <p class="control">
        <select name="sex" v-model="formValues.sex">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </p>
      <label for="color">Color</label>
      <p class="control">
        <input class="input" type="text" name="color" v-model="formValues.color">
      </p>
      <label for="breed">Breed</label>
      <p class="control">
        <input class="input" type="text" name="breed" v-model="formValues.breed">
      </p>
      <label for="image_url">image_url</label>
      <p class="control">
        <input class="input" type="text" name="image_url" v-model="formValues.image_url">
      </p>
      <label for="description">Description</label>
      <p class="control">
        <textarea class="textarea" description="description" rows="8" cols="80">Description</textarea>
      </p>
      <p class="control">
        <router-link class="button is-outlined router-link-active":to="{ name: 'index' }">Back</router-link>
        <button class="button is-primary">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
import store from '../store';
import { create } from '../actions/puppy';

export default {
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image: '',
      },
      //puppy: this.$select('puppy')
    };
  },
  // save(data) {
  //   store.dispatch(update(data._id, data)).then(() => {
  //     //redirect
  //     this.$router.push({ name: 'index' });
  //   });
  // },

  methods: {
    add(formData) {
      store.dispatch(create(formData)).then(() => {
        this.$router.push({ name: 'index' });
      });
      console.log(formData)
      // dispatch that create action with this form data
    },
  },
};
</script>
