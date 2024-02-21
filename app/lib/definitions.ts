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

export interface Track {
  author: string;
  name: string;
  file: string;
}
export interface RawTrack {
  author: string;
  name: string;
  category: string;
  id: string;
}
