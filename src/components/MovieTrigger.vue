<template>
  <div class="movie-nav">
    <div class="movie-nav--item">
      <label for="popular">Populares</label>
      <input type="radio" name="movie-trigger" id="popular" value="popular" />
    </div>
    <div class="movie-nav--item">
      <label for="topRated">Melhores</label>
      <input type="radio" name="movie-trigger" id="topRated" value="topRated" />
    </div>
    <div class="movie-nav--item">
      <label for="onTheather">Nos Cinemas</label>
      <input
        type="radio"
        name="movie-trigger"
        id="onTheather"
        value="onTheather"
      />
    </div>
    <div class="movie-nav--item">
      <label for="upComming">Em Breve</label>
      <input
        type="radio"
        name="movie-trigger"
        id="upComming"
        value="upComming"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieTrigger",
};
</script>

<style lang="scss" scoped></style>
