<template>
  <div class="home">
    <div class="container">
      <Searchers
        @search-query="
          fetchQueryMovies({ query: $event }),
            setTriggeredMovie(null),
            setQuery($event)
        "
      />
      <MovieTrigger
        @radio-trigger="
          fetchTriggeredMovies({ trigger: $event }),
            setTriggeredMovie($event),
            setFirstPage(),
            setQuery(null)
        "
      />
      <Loading v-if="loading" />
      <div class="movies-grid" v-else>
        <MovieCard
          v-for="movie in moviesInDisplay"
          :key="movie.id"
          :movie="movie"
        />
        <div class="movies-pagination">
          <button
            class="page"
            v-show="
              defaultPage == fetchedTotalPages ||
              (defaultPage < fetchedTotalPages && defaultPage != 1)
            "
            @click="setFirstPage()"
          >
            Inicio
          </button>
          <span
            v-show="
              defaultPage == fetchedTotalPages ||
              (defaultPage < fetchedTotalPages && defaultPage != 1)
            "
            class="page--spacing"
            >...</span
          >
          <button
            class="page"
            v-show="defaultPage > 1"
            @click="setPageIndex(-1)"
          >
            {{ defaultPage - 1 }}
          </button>
          <button class="page selected" disabled>{{ defaultPage }}</button>
          <button
            class="page"
            @click="setPageIndex(1)"
            v-show="defaultPage + 1 < fetchedTotalPages"
          >
            {{ defaultPage + 1 }}
          </button>
          <button
            class="page"
            @click="setPageIndex(2)"
            v-show="defaultPage + 2 < fetchedTotalPages"
          >
            {{ defaultPage + 2 }}
          </button>
          <span v-show="defaultPage != fetchedTotalPages" class="page--spacing"
            >...</span
          >
          <button
            class="page"
            @click="setPageIndex(fetchedTotalPages - defaultPage)"
            v-show="defaultPage != fetchedTotalPages"
          >
            {{ fetchedTotalPages }}
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
import Loading from "../components/Loading.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: { MovieTrigger, Searchers, MovieCard, Loading },
  data() {
    return {
      defaultPage: 1,
      triggeredMovie: "",
      queryValue: "",
    };
  },
  computed: {
    ...mapState(["moviesInDisplay", "fetchedTotalPages", "loading"]),
  },
  methods: {
    ...mapActions(["fetchTriggeredMovies", "fetchQueryMovies"]),
    setPageIndex(value) {
      this.defaultPage = this.defaultPage + value;
    },
    setTriggeredMovie(value) {
      this.triggeredMovie = value;
    },
    setFirstPage() {
      this.defaultPage = 1;
    },
    setQuery(value) {
      this.queryValue = value;
    },
  },
  watch: {
    async defaultPage() {
      if (this.triggeredMovie) {
        await this.fetchTriggeredMovies({
          trigger: this.triggeredMovie,
          page: this.defaultPage,
        });
        return;
      }
      return await this.fetchQueryMovies({
        query: this.queryValue,
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
  margin-bottom: 5rem;

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
      left: 0;
      right: 0;
      text-align: center;

      .page--spacing {
        margin: 0 0.5rem;
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

        &:nth-child(6) {
          margin-right: 0;
        }
        &:nth-child(1) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
