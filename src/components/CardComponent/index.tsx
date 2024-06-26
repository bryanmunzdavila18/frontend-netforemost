import React from "react";
import styles from "./CardComponent.module.css";

export interface CardComponentProps {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

const CardComponent = (props: CardComponentProps) => {
  const { urlToImage, title, description, author, url } = props;

  return (
    <a href={url} target="_blank" className={styles.cardContainer}>
      <img src={urlToImage} className={styles.imageContainer} />
      <div className={styles.infoContainer}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default CardComponent;
