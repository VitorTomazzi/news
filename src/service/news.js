import {
  articles_url,
  API_KEY,
  category,
  country_code,
} from '../config/rest_config';

export async function getArticles() {
  try {
    let articles = await fetch(
      `${articles_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          'X-API-KEY': API_KEY,,
        },
      }
    );

    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (error) {
    throw error;
  }
}

