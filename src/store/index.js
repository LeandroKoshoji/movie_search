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
    pages: "",
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
      state.pages = pages;
    },
  },
  actions: {
    async fetchTriggeredMovies({ commit }, payload) {
      try {
        console.log("FUNCAO:", payload.trigger, payload.page);
        commit("setLoading", true);
        const res = await fetch(
          `${BASE_URL}${payload.trigger}?api_key=${API_KEY}&language=pt-BR&region=br&page=${payload.page}`
        );
        const data = await res.json();
        console.log("trigger:", data);
        commit("setMoviesInDisplay", data.results);
        commit("setPages", data.total_pages);
      } catch (err) {
        commit("setError", err);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  modules: {},
});
