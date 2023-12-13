// import React, {useState} from 'react';
// import Heading from "../uiStyle/Heading";
// import Swiper from 'react-id-swiper';

// import fnewsImg2 from '../../doc/img/feature/feature2.jpg';
// import fnewsImg3 from '../../doc/img/feature/feature3.jpg';
// // eslint-disable-next-line no-unused-vars

// import {Link} from "react-router-dom";


// const news = [
//     {
//         image: fnewsImg2,
//         category: 'Lokalne',
//         date: 'Styczeń 1, 2022',
//         title: 'Best garden wing supplies for the horticu ltural'
//     },
//     {
//         image: fnewsImg3,
//         category: 'TECHNOLOGY',
//         date: 'March 26, 2020',
//         title: 'Copa America: Luis Suarez from devastated US'
//     },

// ];

// const FeatureNews = ({className}) => {
//     const [setSwiper] = useState(null);


//     const params = {
//         slidesPerView: 4,
//         spaceBetween: 30,
//         loop: true,
//         breakpoints: {
//             1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 30
//             },
//             768: {
//                 slidesPerView: 2,
//                 spaceBetween: 30
//             },
//             640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20
//             },
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 0
//             }
//         }
//     };
//     return (
//         <div className={`feature_carousel_area mb40 ${className ? className : ''}`}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <Heading title="Aktualności"/>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-12">
//                         {/*CAROUSEL START*/}
//                         <div className="feature_carousel nav_style1">
//                             <Swiper getSwiper={setSwiper} {...params}>
//                                 {news.map((item, i) => (
//                                     <div key={i} className="single_post post_type6 post_type7">
//                                         <div className="post_img gradient1">
//                                             <Link to="/"><img src={item.image} alt="thumb"/></Link>
//                                         </div>
//                                         <div className="single_post_text">
//                                             <div className="meta5"><Link to="/">{item.category}</Link>
//                                                 <Link to="/">{item.date}</Link>
//                                             </div>
//                                             <h4>
//                                                 <Link to="/post1">{item.title}</Link>
//                                             </h4>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Swiper>
                            
//                         </div>
//                         {/*CAROUSEL END*/}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeatureNews;




// oryginal^^



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function PostOnePageStrapi() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get('http://localhost:1337/api/newss?populate=*');
//       console.log('Odpowiedź z serwera:', response.data);
//       setArticles(response.data.data);
//     } catch (error) {
//       console.log('Wystąpił błąd:', error);
//     }
//   };

//   return (
//     <div>
//       {articles.map((article) => (
//         <div key={article.id}>
//           <div className="widget-title border-radious5 mb30 shadow7 padding20">
//             <h1>{article.attributes.title}</h1>
//           </div>
          
//           <div className="border-radious5 mb30 shadow7 padding20">
//             <div>{article.attributes.article}</div>
//           </div>
          
//           <div className="border-radious5 mb30 shadow7 padding20">
//             <img src={`http://localhost:1337${article.attributes.image.data.attributes.url}`} alt="krowa" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostOnePageStrapi;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostOnePageStrapi() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://strapi-dt37.onrender.com/api/newss?_sort=createdAt:desc');
      console.log('Odpowiedź z serwera:', response.data.data);
      setArticles(response.data.data);
    } catch (error) {
      console.log('Wystąpił błąd:', error);
    }
  };

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <div className="widget-title border-radious5 mb30 shadow7 padding20">
            <h1>
              <a href={`/post1/`}>{article.attributes.title}</a>
              {/* <a href={`/post1/${article.id}`}>{article.attributes.title}</a> */}
              {/* ver oryginal ^^ */}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostOnePageStrapi;
