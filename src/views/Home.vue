<template>
  <div class="home">
    <div class="container">
      <Searchers />
      <MovieTrigger
        @radio-trigger="
          fetchTriggeredMovies({ trigger: $event }),
            setTriggeredMovie($event),
            setFirstPage()
        "
      />
      <div class="movies-grid">
        <MovieCard
          v-for="movie in moviesInDisplay"
          :key="movie.id"
          :movie="movie"
        />
        <div class="movies-pagination">
          <button
            class="page"
            v-show="defaultPage == pages"
            @click="incrementPageIndex(-1)"
          >
            1
          </button>
          <button class="page selected" disabled>{{ defaultPage }}</button>
          <button
            class="page"
            @click="incrementPageIndex(1)"
            v-show="defaultPage + 1 < pages"
          >
            {{ defaultPage + 1 }}
          </button>
          <button
            class="page"
            @click="incrementPageIndex(2)"
            v-show="defaultPage + 2 < pages"
          >
            {{ defaultPage + 2 }}
          </button>
          <button
            class="page"
            @click="incrementPageIndex(3)"
            v-show="defaultPage + 3 < pages"
          >
            {{ defaultPage + 3 }}
          </button>
          <span v-show="defaultPage != pages" class="page--spacing">...</span>
          <button
            class="page"
            @click="incrementPageIndex(pages - defaultPage)"
            v-show="defaultPage != pages"
          >
            {{ pages }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieTrigger from "../components/MovieTrigger.vue";
import Searchers from "../components/Searchers.vue";
import MovieCard from "../components/MovieCard.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: { MovieTrigger, Searchers, MovieCard },
  data() {
    return {
      defaultPage: 1,
      triggeredMovie: "",
    };
  },
  computed: {
    ...mapState(["moviesInDisplay", "pages"]),
  },
  methods: {
    ...mapActions(["fetchTriggeredMovies"]),
    incrementPageIndex(value) {
      if (value == -1) {
        this.defaultPage = 1;
        return;
      }
      return (this.defaultPage = this.defaultPage + value);
    },
    setTriggeredMovie(value) {
      this.triggeredMovie = value;
    },
    setFirstPage() {
      this.defaultPage = 1;
    },
  },
  watch: {
    async defaultPage() {
      await this.fetchTriggeredMovies({
        trigger: this.triggeredMovie,
        page: this.defaultPage,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 100px);
  padding-top: 3rem;

  .movies-grid {
    position: relative;
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

    .movies-pagination {
      position: absolute;
      bottom: -3rem;
      left: 50%;
      transform: translateX(-50%);

      .page--spacing {
        margin: 0 1rem;
      }

      .page {
        background-color: #fff;
        color: var(--clr-background);
        border: 1px solid var(--clr-accent);
        border-radius: 5px;
        padding: 0.2rem 0.5rem;
        margin-right: 0.5rem;
        cursor: pointer;

        &.selected {
          background-color: var(--clr-accent);
        }

        &:nth-child(5) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
