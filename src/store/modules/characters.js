export default {
  state: {
    characters: [],
    page: 1,
    totalPages: 0,
    totalEl: 0,
    status: "All",
    filterName: "",
  },
  actions: {
    //TODO: если data.error ==== 'There is nothing here' То запускаем подсказку тултип : Совпадений не найдено , попробуйте изменить запрос
    async fetchData({ commit, getters }) {
      const BASE_URL = "https://rickandmortyapi.com/api";
      const STATUS_URL =
        getters.getStatus == "All" ? "" : `&status=${getters.getStatus}`;
      const NAME_URL =
        getters.getFilterName == "" ? "" : `&name=${getters.getFilterName}`;
      getters.getPage;

      try {
        const response = await fetch(
          // `${BASE_URL}/character/?page=${getters.getPage}${NAME_URL}${STATUS_URL}`
          `${BASE_URL}/character/?name=ffffffffffffffggdfg`
        );

        const data = await response.json();
        console.log(data);
        const characters = data.results;
        const totalPages = data.info.pages;
        const totalEl = data.info.count;
        commit("setTotalPages", totalPages);
        commit("setCharacters", characters);
        commit("setTotalEl", totalEl);
      } catch (e) {
        console.error(e);
      }
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
  },
};
