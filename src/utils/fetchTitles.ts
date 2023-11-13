import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';

const directory = './content/laulut';

export const getTitle = async (filename: string): Promise<string> => {
  const filepath = `${directory}/${filename}`;
  const fileContent = await fsPromises.readFile(filepath, 'utf-8');
  const { data: frontMatter } = matter(fileContent);
  return frontMatter.title;
};

export const allTitles = async (): Promise<string[]> => {
  try {
    const filenames = await fsPromises.readdir(directory);
    const markdownFilenames = filenames.filter((f) => f.endsWith('.md'));
    return Promise.all(markdownFilenames.map(getTitle));
  } catch (error) {
    console.error('Error reading files:', error);
    return [];
  }
};
