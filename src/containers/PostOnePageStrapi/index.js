// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PostOnePageStrapi = ({ match }) => {
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await axios.get(`https://strapi-dt37.onrender.com/api/newss/${match.params.id}?populate=*`);
//         console.log('Odpowiedź z serwera:', response.data);
//         setArticle(response.data);
//       } catch (error) {
//         console.log('Wystąpił błąd:', error);
//       }
//     };

//     fetchArticle();
//   }, [match.params.id]);

//   return (
//     <div>
//       {article ? (
//         <div>
//           <h1>{article.attributes.title}</h1>
//           <div>{article.attributes.article.map((paragraph) => <p key={paragraph.id}>{paragraph.children[0].text}</p>)}</div>
//           {article.attributes.image && (
//             <img
//               src={`https://strapi-dt37.onrender.com${article.attributes.image.url}`}
//               alt={article.attributes.title}
//             />
//           )}
//         </div>
//       ) : (
//         <p>Ładowanie artykułu...</p>
//       )}
//     </div>
//   );
// };



// export default PostOnePageStrapi;
