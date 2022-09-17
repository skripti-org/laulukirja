export interface Song {
  title: string
  order: number
  melody: string
  credits: string
}

export interface Fields {
  slug: string;
}

export interface RootObject {
  excerpt: string;
  fields: Fields;
  frontmatter: Song;
}