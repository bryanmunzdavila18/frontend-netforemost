import { useState, useEffect } from "react";
import styles from "./App.module.css";
import CardComponent, { CardComponentProps } from "./components/CardComponent";
import { GetArticles } from "./utils/MongoDBConnection";

function App() {
  const [articles, setArticles] = useState<CardComponentProps[]>([]);

  const loadArticles = async () => {
    const articles: CardComponentProps[] = await GetArticles();
    setArticles((currentValues) => articles);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <section className={styles.mainContainer}>
      {articles &&
        articles.map((article: any) => (
          <CardComponent
            author={article.author}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
          />
        ))}
    </section>
  );
}

export default App;
