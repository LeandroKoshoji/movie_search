<template>
  <div class="movie-nav">
    <div class="movie-nav--item">
      <input type="radio" name="movie-trigger" id="popular" value="popular" />
      <label for="popular">Populares</label>
    </div>
    <div class="movie-nav--item">
      <input type="radio" name="movie-trigger" id="topRated" value="topRated" />
      <label for="topRated">Melhores</label>
    </div>
    <div class="movie-nav--item">
      <input
        type="radio"
        name="movie-trigger"
        id="onTheather"
        value="onTheather"
      />
      <label for="onTheather">Nos Cinemas</label>
    </div>
    <div class="movie-nav--item">
      <input
        type="radio"
        name="movie-trigger"
        id="upComming"
        value="upComming"
      />
      <label for="upComming">Em Breve</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieTrigger",
};
</script>

<style lang="scss" scoped>
.movie-nav {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  padding: 0.5rem, 0;
  border-radius: 5px;

  &--item {
    display: inline-flex;
    background-color: var(--clr-accent);
    color: var(--clr-background);

    label {
      position: relative;
      padding: 0.25rem 0.5rem;
      transition: background linear 0.5s;
      cursor: pointer;
    }

    input[type="radio"] {
      display: none;

      &:checked + label {
        font-weight: 700;
        transform: scale(1.01);
        background-color: #fff;
        color: var(--clr-background);
        box-shadow: var(--box-shadow);
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        border: 2px solid var(--clr-accent);
      }
    }
  }
}
</style>
