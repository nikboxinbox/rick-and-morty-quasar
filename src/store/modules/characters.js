export default {
  actions: {
    async getAllCharacters(ctx) {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const characters = await res.json();
      ctx.commit("updateCharacters", characters);
    },
  },
  mutations: {
    updateCharacters(state, characters) {
      state.characters = characters;
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
