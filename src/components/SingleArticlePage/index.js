import React  from 'react';
import { useParams } from 'react-router-dom';

const SingleArticlePage = ({ localNews }) => {
  const { id } = useParams();
  const articleId = parseInt(id, 10); // Parsuj ID do liczby całkowitej

  const article = localNews[articleId - 1]; // Pobierz artykuł na podstawie ID

  if (!article) {
    return <div>Nie znaleziono artykułu</div>;
  }

  return (
    <div>
      <h1>{article.attributes.title}</h1>
      <img
        src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
        alt={article.attributes.title}
      />
      <p>{article.attributes.content}</p>
    </div>
  );
};

export default SingleArticlePage;
