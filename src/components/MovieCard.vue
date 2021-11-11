<template>
  <div class="movie-card">
    <div class="movie-card--rating">7.1</div>
    <img
      src="https://image.tmdb.org/t/p/w300/h5UzYZquMwO9FVn15R2eK2itmHu.jpg"
      alt="Venon"
    />
  </div>
</template>

<script>
export default {
  name: "MovieCard",
};
</script>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  max-width: 200px;
  border-radius: 5px;

  &--rating {
    position: absolute;
    display: flex;
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
}
</style>
