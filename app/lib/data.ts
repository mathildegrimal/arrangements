import { gql } from '@apollo/client';
import { client } from './client';
import { Category, MenuItem, Track } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

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
