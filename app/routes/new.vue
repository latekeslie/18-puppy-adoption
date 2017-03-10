<template lang="html">
  <div class="">
    <form >
      <h2>{{formValues.name}}</h2>
      <input type="text" name="name" v-model="formValues.name">
      <input type="text" name="age" v-model="formValues.age">
      <select name="sex" v-model="formValues.sex">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      <input type="text" name="color" v-model="formValues.color">
      <input type="text" name="breed" v-model="formValues.breed">
      <input type="text" name="image_url" v-model="formValues.image_url">
      <textarea description="description" rows="8" cols="80">Description</textarea>
    </form>
  </div>
</template>

<script>
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
    };
  },

  methods: {

  },
};
</script>
