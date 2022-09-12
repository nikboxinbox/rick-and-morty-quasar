export default {
  state: {
    characters: [],
    page: 1,
    totalPages: 0,
    totalEl: 0,
    status: "All",
    filterName: "",
    errorMessageFromApi: null,
    singleCharacter: null,
    singleEpisode: null,
    multipleCharactersImages: null


  },
  actions: {
    async fetchData({ commit, getters }) {
      try {
        commit("setApiErrorMessage", null)
        const BASE_URL = "https://rickandmortyapi.com/api";
        const STATUS_URL =
          getters.getStatus == "All" ? "" : `&status=${getters.getStatus}`;
        const NAME_URL =
          getters.getFilterName == "" ? "" : `&name=${getters.getFilterName}`;
        getters.getPage;

        const response = await fetch(
          `${BASE_URL}/character/?page=${getters.getPage}${NAME_URL}${STATUS_URL}`
        );
        const data = await response.json();

        if (data.error) {
          commit("setApiErrorMessage", data.error)
          return
        }
        const characters = data.results;
        const totalPages = data.info.pages;
        const totalEl = data.info.count;
        commit("setTotalPages", totalPages);
        commit("setCharacters", characters);
        commit("setTotalEl", totalEl);
      } catch (e) { console.error(e) }


    },
    async fetchSingleCharacter({ commit, getters }, id) {
      try {
        const BASE_URL = "https://rickandmortyapi.com/api";
        const response = await fetch(
          `${BASE_URL}/character/${id}`
        );
        const data = await response.json();
        const { name, species, image, location } = data
        await commit("setSingleCharacter", { name, species, image, location })

      } catch (e) { console.error(e) }
    },
    async fetchSingleEpisode({ commit, getters, dispatch }, id) {
      try {
        const BASE_URL = "https://rickandmortyapi.com/api";
        const response = await fetch(
          `${BASE_URL}/episode/${id}`
        );
        const data = await response.json();
        console.log(data);
        const { name, air_date, characters } = data
        const charactersEpisode = await dispatch('fetchMultipleCharactersEpisode', characters)
        await commit("setSingleEpisode", { name, air_date, charactersEpisode })

      } catch (e) { console.error(e) }
    },

    // TODO: проверить в компоненте getSingleCharacter.
    async fetchMultipleCharactersEpisode({ commit }, charactersUrls) {
      try {
        const BASE_URL = "https://rickandmortyapi.com/api";
        const charactersIds = charactersUrls.map((characterUrl) => {
          return characterUrl.split("/").slice(-1).join()
        }).join(',')
        const response = await fetch(
          `${BASE_URL}/character/${charactersIds}`
        );
        const data = await response.json();
        const CharactersImagesIds = data.map((d) => {
          return { id: d.id, image: d.image }
        })
        console.log(data);
        return CharactersImagesIds
      } catch (e) { console.error(e) }
    },
    updatePage({ commit, dispatch }, page) {
      commit("setPage", page);
      dispatch("fetchData");
    },
    updateFilters({ commit, dispatch }, filter = {}) {
      commit("setPage", 1);
      // this.$root.$emit("PAGE_RESET");
      commit("setStatus", filter.status);
      commit("setFilterName", filter.searchName);
      dispatch("fetchData");
    },
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setPage(state, page) {
      state.page = page;
    },
    setStatus(state, status) {
      state.status = status;
    },
    setFilterName(state, filterName) {
      state.filterName = filterName;
    },
    setTotalEl(state, totalEl) {
      state.totalEl = totalEl;
    },
    setApiErrorMessage(state, errorMessage) {
      state.errorMessageFromApi = errorMessage
    },
    setSingleCharacter(state, character) {
      state.singleCharacter = character
    },
    setSingleEpisode(state, episode) {
      state.singleEpisode = episode
    }
  },

  getters: {
    getCharacters(state) {
      return state.characters;
    },
    getPage(state) {
      return state.page;
    },
    getTotalPage(state) {
      return state.totalPages;
    },
    getStatus(state) {
      return state.status;
    },
    getFilterName(state) {
      return state.filterName;
    },
    getErrorMessageFromApi(state) {
      return state.errorMessageFromApi
    },
    getSingleCharacter(state) {
      return state.singleCharacter
    },
    getSingleEpisode(state) {
      return state.singleEpisode
    }
  },
};
