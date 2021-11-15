import Vue from "vue";
import Vuex from "vuex";
import { API_KEY, BASE_URL } from "../utils/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesInDisplay: [],
    loading: false,
    error: {
      isError: false,
      errorMessage: "",
    },
    fetchedTotalPages: "",
  },
  mutations: {
    setMoviesInDisplay(state, movies) {
      state.moviesInDisplay = movies;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error.isError = true;
      state.error.errorMessage = payload.message;
    },
    setPages(state, pages) {
      state.fetchedTotalPages = pages;
    },
  },
  actions: {
    async fetchTriggeredMovies({ commit }, { trigger, page }) {
      try {
        commit("setLoading", true);
        const res = await fetch(
          `${BASE_URL}movie/${trigger}?api_key=${API_KEY}&language=pt-BR&region=br&page=${page}`
        );
        const data = await res.json();
        commit("setMoviesInDisplay", data.results);
        commit("setPages", data.total_pages);
      } catch (err) {
        commit("setError", err);
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchQueryMovies({ commit }, { query, page }) {
      try {
        commit("setLoading", true);
        const userQuery = query.toLowerCase().trim();
        const res = await fetch(
          `${BASE_URL}search/movie?api_key=${API_KEY}&language=pt-BR&query=${userQuery}&page=${page}&include_adult=false`
        );
        const data = await res.json();
        console.log("search", data);
        commit("setMoviesInDisplay", data.results);
        commit("setPages", data.total_pages);
      } catch (err) {
        commit("setError", err);
      } finally {
        setTimeout(commit("setLoading", false), 5000);
      }
    },
    async fetchMovieDetails({ commit }, movieID) {
      try {
        commit("setLoading", true);
        const res = await fetch(
          `${BASE_URL}movie/${movieID}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos,cast`
        );
        const data = await res.json();
        console.log("details:", data);
        return data;
      } catch (err) {
        commit("setError", err);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  modules: {},
});
