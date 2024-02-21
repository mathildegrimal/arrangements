import { gql } from '@apollo/client';
import { client } from './client';
import { Category, MenuItem, RawTrack, Track } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { QueryResult, sql } from '@vercel/postgres';

export const loadMenuItems = async (): Promise<{ allMenus: MenuItem[] }> => {
  const { data } = await client.query({
    query: gql`
      query {
        allMenus(orderBy: order_ASC) {
          id
          order
          slug
          name
          submenu {
            id
            name
            slug
            order
          }
        }
      }
    `,
  });
  return data;
};
export const loadCategories = async (): Promise<Category[]> => {
  noStore();
  const { data } = await client.query<{ allCategories: Category[] }>({
    query: gql`
      query {
        allCategories(orderBy: order_ASC) {
          id
          name
          slug
          order
        }
      }
    `,
  });
  return data.allCategories;
};

export const loadCategoryBySlug = async (slug: string): Promise<Category> => {
  noStore();
  const { data } = await client.query<{ allCategories: Category[] }>({
    query: gql`
      query {
        allCategories(filter: { slug: { eq: "${slug}" } }) {
          id
          name
          slug
        }
      }
    `,
  });
  return data.allCategories[0];
};

export async function loadFilteredTracks(
  query: string,
  currentPage: number,
  category?: string,
) {
  noStore();
  const ITEMS_PER_PAGE = 10;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = currentPage + ITEMS_PER_PAGE;
  const tracks: Track[] = [
    {
      author: 'Céline Dion',
      name: "J'irai où tu iras",
      file: '',
    },
    {
      author: 'Johhny Halliday',
      name: 'Allumer le feu',
      file: '',
    },
    {
      author: 'Michel Sardou',
      name: 'Les lacs du Conemara',
      file: '',
    },
    {
      author: 'Céline Dion',
      name: "J'irai où tu iras",
      file: '',
    },
    {
      author: 'Johhny Halliday',
      name: 'Allumer le feu',
      file: '',
    },
    {
      author: 'Michel Sardou',
      name: 'Les lacs du Conemara',
      file: '',
    },
    {
      author: 'Céline Dion',
      name: "J'irai où tu iras",
      file: '',
    },
    {
      author: 'Johhny Halliday',
      name: 'Allumer le feu',
      file: '',
    },
    {
      author: 'Michel Sardou',
      name: 'Les lacs du Conemara',
      file: '',
    },
    {
      author: 'Céline Dion',
      name: "J'irai où tu iras",
      file: '',
    },
    {
      author: 'Johhny Halliday',
      name: 'Allumer le feu',
      file: '',
    },
    {
      author: 'Michel Sardou',
      name: 'Les lacs du Conemara',
      file: '',
    },
  ];
  let filteredTracks = tracks;

  if (query) {
    filteredTracks = tracks.filter(
      (track) =>
        track.author.toLowerCase().includes(query.toLowerCase()) ||
        track.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  const totalPages = Math.ceil(filteredTracks.length / ITEMS_PER_PAGE);

  return {
    tracks: filteredTracks.slice(start, end),
    totalPages,
  };
}

export async function loadTracks({
  query,
  currentPage,
  category,
}: {
  query: string;
  currentPage: number;
  category?: Category;
}) {
  const ITEMS_PER_PAGE = 10;

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  noStore();
  try {
    let filteredSongs: QueryResult<RawTrack>;
    let count: QueryResult<{
      count: string;
    }>;
    if (category) {
      filteredSongs = await sql<RawTrack>`
      SELECT *
      FROM songs
      WHERE category = ${category?.name}
      ORDER BY name
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
      count = await sql<{ count: string }>`
      SELECT COUNT(*)
      FROM songs WHERE category = ${category?.name}
      `;
      if (query) {
        filteredSongs = await sql<RawTrack>`
      SELECT *
      FROM songs
      WHERE category = ${category?.name}
      AND (name ILIKE ${`%${query}%`} OR author ILIKE ${`%${query}%`} )
      ORDER BY name
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
        count = await sql<{ count: string }>`
      SELECT COUNT(*)
      FROM songs  WHERE category = ${category?.name}
      AND (name ILIKE ${`%${query}%`} OR author ILIKE ${`%${query}%`})
      `;
      }
    } else {
      filteredSongs = await sql<RawTrack>`
      SELECT *
      FROM songs
      ORDER BY name
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
      count = await sql<{ count: string }>`
      SELECT COUNT(*)
      FROM songs
      `;
      if (query) {
        filteredSongs = await sql<RawTrack>`
      SELECT *
      FROM songs
      WHERE name ILIKE ${`%${query}%`} OR author ILIKE ${`%${query}%`}
      ORDER BY name
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
        count = await sql<{ count: string }>`
      SELECT COUNT(*)
      FROM songs  WHERE name ILIKE ${`%${query}%`} OR author ILIKE ${`%${query}%`}
      `;
      }
    }

    // sqlQuerySelect += ` LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return { tracks: filteredSongs.rows, totalPages };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the tracks.');
  }
}
