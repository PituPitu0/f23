// import React from 'react';
// import {Link} from "react-router-dom";

// const LocalNews = ({localNews, headerHide}) => {
//     return (
//         <div className="row">
//             <div className="col-12">
//                 <div className="businerss_news">
//                     {headerHide ? '' :
//                         <div className="row">
//                             <div className="col-6 align-self-center">
//                                 <h2 className="widget-title">Lokalne</h2>
//                             </div>
//                             <div className="col-6 text-right align-self-center">
//                                 <Link to="/" className="see_all mb20">See All</Link>
//                             </div>
//                         </div>}
//                     <div className="row">
//                         <div className="col-12">
//                             {localNews.map((item, i) => (
//                                 <div key={i} className="single_post post_type3 post_type12 mb30">
//                                     <div className="post_img">
//                                         <div className="img_wrap">
//                                             <Link to="/">
//                                                 <img src={item.image} alt="thumb"/>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <div className="single_post_text">
//                                         <div className="meta3"><Link to="/">uiux.subash</Link>
//                                             <Link to="#">March 26, 2020</Link>
//                                         </div>
//                                         <h4><Link to="/post1">Copa America: Luis Suarez from devastated US</Link></h4>
//                                         <div className="space-10"/>
//                                         <p className="post-p">The property, complete with 30-seat screening from room, a
//                                             100-seat amphitheater and a swimming pond with…</p>
//                                         <div className="space-20"/>
//                                         <Link to="/" className="readmore">Read more</Link>
//                                     </div>
//                                 </div>
//                             ))}

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LocalNews;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostOnePageStrapi() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/newss?_sort=createdAt:desc');
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
              <a href={`post1/`}>{article.attributes.title}</a>

              {/* <a href={`/post1/${article.id}`}>{article.attributes.title}</a> */} 
              {/* ver     oryginal */}
            </h1>
          </div>
          <div className="border-radious5 mb30 shadow7 padding20">
            <p>{article.attributes.article}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostOnePageStrapi;
