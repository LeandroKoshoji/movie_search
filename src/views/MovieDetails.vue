<template>
  <div class="movie-details">
    <div class="container">
      <div class="movie">
        <div class="movie--banner">
          <!-- // TODO: Static Poster - (FallBack) -->
          <img
            v-if="movie.poster_path"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="`${movie.title} banner`"
          />
        </div>
        <div class="movie--infos">
          <h1 class="title">{{ movie.title }}</h1>
          <p class="original-title">{{ movie.original_title }}</p>
          <p class="release">
            {{
              movie.release_date
                ? movie.release_date.split("-")[0]
                : movie.release_date
            }}
          </p>
          <div class="line-infos">
            <span class="rating">
              <i class="fas fa-star"></i>
              {{ movie.vote_average }}/10
            </span>
            <span class="runtime">
              <i class="far fa-clock"></i>
              {{ movie.runtime }} min.
            </span>
          </div>
          <div class="genres">
            <p>Generos:</p>
            <span v-for="(genre, index) in movie.genres" :key="genre.id"
              >{{ genre.name
              }}{{ index === movie.genres.length - 1 ? "." : ", " }}
            </span>
          </div>
          <div class="overview">
            <p v-if="movie.overview">{{ movie.overview }}</p>
            <p v-else>Sinópse não disponível</p>
          </div>
          <div class="production">
            <p>Produção:</p>
            <span
              v-for="(company, index) in movie.production_companies"
              :key="company.id"
              >{{ company.name
              }}{{
                index === movie.production_companies.length - 1 ? "." : ", "
              }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "MovieDetails",
  data() {
    return {
      movie: {},
    };
  },
  methods: {
    ...mapActions(["fetchMovieDetails"]),
  },
  async beforeMount() {
    const movieID = this.$route.params.id;
    this.movie = await this.fetchMovieDetails(movieID);
  },
};
</script>

<style lang="scss" scoped>
.movie-details {
  padding-top: 3rem;
  min-height: calc(100vh - 100px - 80px);

  .movie {
    display: flex;

    &--banner {
      max-width: 500px;
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
    }

    &--infos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 2rem;

      // & > * {
      //   margin-bottom: 1rem;
      // }

      .original-title {
        font-size: 0.75rem;
        font-style: italic;
      }

      .release {
        font-weight: 700;
        color: var(--clr-accent);
        margin: 1rem 0;
      }

      .line-infos {
        margin: 1rem 0;

        span {
          margin-right: 1rem;

          i {
            margin-right: 0.5rem;
            color: var(--clr-accent);
          }
        }
      }

      .genres p,
      .production p {
        display: inline-block;
        margin-right: 1rem;
        color: var(--clr-accent);
      }

      .overview {
        display: flex;
        align-items: center;
        text-align: justify;
        flex-grow: 1;
        line-height: 2;
      }
    }
  }
}
</style>