import { gql } from '@apollo/client';
import { client } from './client';
import { Category, MenuItem } from './definitions';

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
