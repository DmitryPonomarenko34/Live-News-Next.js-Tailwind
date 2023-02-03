import { NewspaperIcon } from "@heroicons/react/24/solid";
import { categories } from "../constants"
import { fetchNews } from "../lib/fetchNews";

export default async function HomePage() {
  // const news: NewsResponse = await fetchNews(categories.join(','));
  // console.log(news);

  return (
    <div>Home page</div>
  )
}