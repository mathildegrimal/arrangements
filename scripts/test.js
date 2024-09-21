const { varieteInter, varieteFr, bandas, medleys, divers } = require('./songs');

const {
  varieteInter: inter,
  varieteFr: fr,
  bandas: b,
  medleys: m,
  divers: d,
} = require('./new_songs');
function main() {
  for (const s of d) {
    const found = divers.find((song) => s === song);
    if (!found) {
      console.log(s);
    }
  }
}

main();
