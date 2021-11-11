<template>
  <div class="movie-card">
    <div class="movie-card--rating">{{ movie.vote_average }}</div>
    <img
      v-if="movie.poster_path"
      class="movie-card--banner"
      :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`"
      :alt="`${movie.title} banner`"
    />
    <img
      v-else
      class="movie-card--banner"
      src="https://via.placeholder.com/300x450"
      :alt="`${movie.title} banner`"
    />
    <div class="movie-card--infos">
      <h4 class="movie-card--infos--title">{{ movie.title }}</h4>
      <div class="movie-card--infos--year">
        {{ movie.release_date.split("-")[0] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  max-width: 200px;
  border-radius: 5px;

  &:hover > .movie-card--infos,
  &:active > .movie-card--infos {
    display: flex;
  }

  @media (max-width: 575.98px) {
    max-width: 300px;
  }

  &--rating {
    position: absolute;
    display: flex;
    z-index: 99;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    top: -10px;
    left: 0;
    height: 20px;
    width: 50px;
    background-color: var(--clr-accent);
    color: var(--clr-background);
    font-weight: 700;
  }

  &--banner {
    border-radius: 5px;
  }

  &--infos {
    position: absolute;
    inset: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 5px;
    padding: 1rem;

    &--title {
      text-align: center;
    }

    &--year {
      font-weight: 700;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
  }
}
</style>
