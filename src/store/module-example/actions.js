export async function getCharacters({ commit } /* context */) {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json;
    commit("setCharacters", data.results);
    commit("setCharactersFilter", data.results);
  } catch (error) {
    console.error(error);
  }
}
