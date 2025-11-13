import { gql } from '@apollo/client';
import { client } from './client';
import {
  Category,
  CollaborationsData,
  ContactData,
  IndexData,
  MenuItem,
  PartitionsData,
  RawTrack,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { QueryResult, sql } from '@vercel/postgres';

export const loadIndexData = async (): Promise<IndexData | null> => {
  noStore();
  const { data } = await client.query<{ index: IndexData }>({
    query: gql`
      query {
        index {
          id
          text {
            id
            item
          }
          title
          image {
            alt
            url
          }
        }
      }
    `,
  });
  return data?.index ?? null;
};

export const loadPartitions = async (): Promise<PartitionsData | null> => {
  noStore();
  const { data } = await client.query<{ partition: PartitionsData }>({
    query: gql`
      query {
        partition {
          items {
            name
            instrument
            id
            sheet {
              alt
              url
              copyright
            }
            preview {
              alt
              copyright
              url
            }
          }
          text
          title
        }
      }
    `,
  });
  return data?.partition ?? null;
};

export const loadContact = async (): Promise<ContactData | null> => {
  noStore();
  const { data } = await client.query<{ contact: ContactData }>({
    query: gql`
      query {
        contact {
          email
          telephone
          title
        }
      }
    `,
  });
  return data?.contact ?? null;
};

export const loadMenuItems = async (): Promise<{ allMenus: MenuItem[] }> => {
  noStore();
  const { data } = await client.query<{ allMenus: MenuItem[] }>({
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
  return { allMenus: data?.allMenus ?? [] };
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
  return data?.allCategories ?? [];
};

export const loadCollaborations =
  async (): Promise<CollaborationsData | null> => {
    noStore();
    const { data } = await client.query<{ collaboration: CollaborationsData }>({
      query: gql`
        query {
          collaboration {
            title
            items {
              id
              link
              name
            }
            description
          }
        }
      `,
    });
    return data?.collaboration ?? null;
  };

export const loadTrackAudio = async (
  name: string,
): Promise<{
  name: string;
  file: {
    id: string;
    url: string;
  };
} | null> => {
  const { data } = await client.query<{
    audio: { name: string; file: { id: string; url: string } };
  }>({
    query: gql`
      query {
        audio(filter: {name: {matches: {pattern: "${name.trim()}"}}}) {
          name
          file {
            id
            url
          }
        }
      }
    `,
  });
  return data?.audio ?? null;
};

export const loadCategoryBySlug = async (
  slug: string,
): Promise<Category | null> => {
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
  return data?.allCategories?.[0] ?? null;
};

export async function loadNouveautes() {
  noStore();
  try {
    const category = 'Nouveautés';
    const songs: QueryResult<RawTrack> = await sql<RawTrack>`
      SELECT *
      FROM songs
      WHERE category = ${category}
      ORDER BY creation_date DESC
      LIMIT 5
      `;
    return songs.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the tracks.');
  }
}

export async function loadTracks({
  query,
  currentPage,
  category,
}: {
  query: string;
  currentPage: number;
  category: string | null;
}) {
  const ITEMS_PER_PAGE = 15;

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
      WHERE category = ${category}
      ORDER BY name
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
      count = await sql<{ count: string }>`
      SELECT COUNT(*)
      FROM songs WHERE category = ${category}
      `;
      if (query) {
        filteredSongs = await sql<RawTrack>`
      SELECT *
      FROM songs
      WHERE category = ${category}
      AND (name ILIKE ${`%${query}%`} OR author ILIKE ${`%${query}%`} )
      ORDER BY name
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
        count = await sql<{ count: string }>`
      SELECT COUNT(*)
      FROM songs  WHERE category = ${category}
      AND (name ILIKE ${`%${query}%`} OR author ILIKE ${`%${query}%`})
      `;
      }
    } else {
      filteredSongs = await sql<RawTrack>`
      SELECT *
      FROM songs
      WHERE NOT category = 'Nouveautés'
      ORDER BY name
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
      count = await sql<{ count: string }>`
      SELECT COUNT(*)
      FROM songs
      WHERE NOT category = 'Nouveautés'
      `;
      if (query) {
        filteredSongs = await sql<RawTrack>`
      SELECT *
      FROM songs
      WHERE (name ILIKE ${`%${query}%`} OR author ILIKE ${`%${query}%`})
      AND NOT category = 'Nouveautés'
      ORDER BY name
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
        count = await sql<{ count: string }>`
      SELECT COUNT(*)
      FROM songs
      WHERE (name ILIKE ${`%${query}%`} OR author ILIKE ${`%${query}%`})
      AND NOT category = 'Nouveautés'
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
