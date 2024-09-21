const { db } = require('@vercel/postgres');
const {
  varieteInter,
  varieteFr,
  nouveautes,
  bandas,
  medleys,
  generiques,
  divers,
  tradi,
} = require('./songs');

function parseSongs(category, array) {
  const result = [];

  array.map((song) => {
    const splitSong = song.split('(');
    let author = '';
    if (splitSong[1]) {
      author = splitSong[1].replace(')', '');
    }
    result.push({ category, name: splitSong[0], author });
  });

  return result;
}

async function seedSongs(client) {
  try {
    const varieteInterSongs = parseSongs(
      'Variété internationale',
      varieteInter,
    );
    const varieteFrSongs = parseSongs('Variété française', varieteFr);
    const bandasSong = parseSongs('Banda / Peña', bandas);
    const diversSongs = parseSongs('Divers', divers);
    const generiquesSongs = parseSongs('Génériques / Thèmes', generiques);
    const tradiSongs = parseSongs('Traditionnel / Balkans / Paso doble', tradi);
    const nouveautesSongs = parseSongs('Nouveautés', nouveautes);
    const medleySongs = parseSongs('Medleys', medleys);
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS songs (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        author TEXT NULL,
        category TEXT NOT NULL
      );
    `;

    console.log(`Created "songs" table`);

    // Insert data into the "users" table
    const insertedSongs = await Promise.all(
      [
        ...varieteInterSongs,
        ...varieteFrSongs,
        ...bandasSong,
        ...diversSongs,
        ...generiquesSongs,
        ...tradiSongs,
        ...nouveautesSongs,
        ...medleySongs,
      ].map(async (song) => {
        return client.sql`
        INSERT INTO songs (name, author, category)
        VALUES (${song.name}, ${song.author}, ${song.category})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedSongs.length} songs`);

    return {
      createTable,
      songs: insertedSongs,
    };
  } catch (error) {
    console.error('Error seeding songs:', error);
    throw error;
  }
}

function countSongs() {
  try {
    const varieteInterSongs = parseSongs(
      'Variété internationale',
      varieteInter,
    );
    const varieteFrSongs = parseSongs('Variété française', varieteFr);
    const bandasSong = parseSongs('Banda / Peña', bandas);
    const diversSongs = parseSongs('Divers', divers);
    const generiquesSongs = parseSongs('Génériques / Thèmes', generiques);
    const tradiSongs = parseSongs('Traditionnel / Balkans / Paso doble', tradi);
    const nouveautesSongs = parseSongs('Nouveautés', nouveautes);
    const medleySongs = parseSongs('Medleys', medleys);

    // Insert data into the "users" table
    const insertedSongs = [
      ...varieteInterSongs,
      ...varieteFrSongs,
      ...bandasSong,
      ...diversSongs,
      ...generiquesSongs,
      ...tradiSongs,
      ...nouveautesSongs,
      ...medleySongs,
    ];

    return insertedSongs.length;
  } catch (error) {
    console.error('Error seeding songs:', error);
    throw error;
  }
}
async function main() {
  const client = await db.connect();

  await seedSongs(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
