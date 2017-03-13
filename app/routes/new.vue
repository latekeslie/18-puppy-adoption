<template lang="html">
  <div class="transition-spot">
    <form class="control">
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
