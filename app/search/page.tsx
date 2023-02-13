import { fetchNews } from "../../lib/fetchNews";
import NewsList from "../NewsList";
import data from '../../data.json';

type Props = {
  searchParams?: {
    term: string
  }
}

export default async function SearchPage({searchParams}: Props) {
  // const news: NewsResponse = await fetchNews(
  //   'general',
  //   searchParams?.term,
  //   true
  // );

  const news: NewsResponse = data;

  return (
    <div>
      <h1 className="headerTitle">
        Search result for: {searchParams?.term}
      </h1>
      <NewsList news={news} />
    </div>
  )
}
