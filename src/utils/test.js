const { readdir, readFile } = require("fs/promises");
const matter = require("gray-matter");

const directory = "../../content/laulut";


async function getTitle(filename) {
  const titles = []
  const filepath = `${directory}/${filename}`;
  const { data: frontMatter } = matter(await readFile(filepath));
  titles.push(frontMatter.title)
  console.log(titles)
}


async function allTitles() {
  const filenames = await readdir(directory);
  const markdownFilenames = filenames.filter((f) => f.endsWith(".md"));
  return Promise.all(markdownFilenames.map(getTitle));
}

allTitles()
