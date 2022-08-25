export default {
  actions: {
    async getAllCharacters(ctx) {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const characters = await response.json();
        ctx.commit("updateCharacters", characters);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    updateCharacters(state, characters) {
      state.characters = characters.results;
    },
  },
  state: {
    characters: [],
  },
  getters: {
    allCharacters(state) {
      return state.characters;
    },
  },
};
