<template>
  <div class="movie-nav">
    <div class="movie-nav--item">
      <input
        type="radio"
        name="movie-trigger"
        id="popular"
        value="popular"
        v-model="triggerRadio"
      />
      <label for="popular">Populares</label>
    </div>
    <div class="movie-nav--item">
      <input
        type="radio"
        name="movie-trigger"
        id="top_rated"
        value="top_rated"
        v-model="triggerRadio"
      />
      <label for="top_rated">Melhores</label>
    </div>
    <div class="movie-nav--item">
      <input
        type="radio"
        name="movie-trigger"
        id="now_playing"
        value="now_playing"
        v-model="triggerRadio"
      />
      <label for="now_playing">Nos Cinemas</label>
    </div>
    <div class="movie-nav--item">
      <input
        type="radio"
        name="movie-trigger"
        id="upcoming"
        value="upcoming"
        v-model="triggerRadio"
      />
      <label for="upcoming">Em Breve</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieTrigger",
  data() {
    return {
      triggerRadio: "",
    };
  },
  watch: {
    triggerRadio() {
      this.$emit("radio-trigger", this.triggerRadio);
    },
  },
  created() {
    this.triggerRadio = "popular";
  },
};
</script>

<style lang="scss" scoped>
.movie-nav {
  text-align: center;

  &--item {
    display: inline-block;
    background-color: var(--clr-accent);
    color: var(--clr-background);
    border-radius: 5px;
    margin: 0.5rem 0;

    &:nth-child(-n + 3) {
      margin-right: 0.2rem;
    }

    label {
      position: relative;
      padding: 0 0.5rem;
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
        border-radius: 5px;
      }
    }
  }
}
</style>
