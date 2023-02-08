import data from '../data.json';
import NewsList from "./NewsList";

export default async function HomePage() {
  // const news: NewsResponse = await fetchNews(categories.join(','));
  
  const news: NewsResponse = await data;
  // console.log(news);

  return (
    <NewsList news={news} />
  )
}