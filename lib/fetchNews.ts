import { gql } from "graphql-request"
import sortNewsByImg from "./sortNewsByImg";

export const fetchNews = async (
  category?: Categories | string,
  keywords?: string,
  isDynamic?: boolean,
) => {
  const query = gql`
    query myQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        pagination {
          count
          limit
          offset
          total
        }
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
    }
  }
  `;

  const response = await fetch('https://jhingergacha.stepzen.net/api/zeroed-iguana/__graphql', {
    method: 'POST',
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIA_STACK_API_KEY,
        categories: category,
        keywords: keywords,
      }
    })
  });

  console.log(
    'data >>',
    category,
    keywords,
  );

  const newsResponse = await response.json();
  console.log(newsResponse);

  
  const news = sortNewsByImg(newsResponse.data.myQuery);

  return news
}