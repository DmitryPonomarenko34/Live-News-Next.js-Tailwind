import { fetchNews } from "../../../lib/fetchNews"
import NewsList from "../../NewsList"
import data from '../../../data.json';
import { categories } from "../../../constants";

type Props = {
  params: {
    category: Categories
  }
}

export default async function NewsCategoryPage({params: {category}}: Props) {
  const news: NewsResponse = await fetchNews(category);
  // const news: NewsResponse = data;

  return (
    <div>
      <h1 className="headerTitle">
        {category}
      </h1>
      <NewsList news={news} />
    </div>
  )
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category
  }))
}
