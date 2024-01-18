export interface MenuItem {
  name: string;
  slug: string;
  order: number;
  submenu: Omit<MenuItem, 'submenu'>[];
}

export interface Category {
  id: string;
  name: string;
  order: number;
  slug: string;
}
