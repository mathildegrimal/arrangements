export interface MenuItem {
  name: string;
  slug: string;
  order: number;
  submenu: Omit<MenuItem, 'submenu'>[];
}

export interface IndexData {
  id: string;
  title: string;
  text: IndexText[];
  image: Omit<Image, 'copyright'>;
}

export interface PartitionsData {
  title: string;
  text: string;
  items: Partition[];
}
export interface ContactData {
  title: string;
  email: string;
  telephone: string;
}

export interface Video {
  id: string;
  name: string;
  link: string;
}
export interface CollaborationsData {
  title: string;
  items: Video[];
  description: string;
}

export interface Partition {
  id: string;
  instrument: string;
  name: string;
  sheet: Image;
  preview: Image;
}

export interface Image {
  alt: string;
  copyright: string;
  url: string;
}
export interface IndexText {
  id: string;
  item: string;
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
