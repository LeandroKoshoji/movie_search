<template>
  <div class="home">
    <div class="container">
      <Searchers />
      <MovieTrigger />
      <div class="movies-grid">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  </div>
</template>

<script>
import MovieTrigger from "../components/MovieTrigger.vue";
import Searchers from "../components/Searchers.vue";
import MovieCard from "../components/MovieCard.vue";
export default {
  name: "Home",
  components: { MovieTrigger, Searchers, MovieCard },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 100px);
  padding-top: 3rem;

  .movies-grid {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 1rem;
    row-gap: 2rem;
    justify-content: space-between;

    @media (max-width: 575.98px) {
      justify-content: center;
      grid-template-columns: 300px;
    }
  }
}
</style>
