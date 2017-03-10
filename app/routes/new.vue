<template lang="html">
  <div class="">
    <form v-model="formValues">
      <input type="text" name="name">
      <input type="text" age="age">
      <select name="sex">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      <input type="text" color="color">
      <input type="text" breed="breed">
      <input type="text" image="image_url">
      <textarea description="description" rows="8" cols="80">Description</textarea>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: this.$select('formValues'),
    };
  },

  methods: {

  },
};
</script>
