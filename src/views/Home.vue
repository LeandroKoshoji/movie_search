<template>
  <div class="home">
    <div class="container">
      <MovieTrigger />
    </div>
  </div>
</template>

<script>
import MovieTrigger from "../components/MovieTrigger.vue";
export default {
  name: "Home",
  components: { MovieTrigger },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 100px);
}
</style>
