import React, { Fragment } from 'react';

import PostOnePageStrapi  from "../PostOnePageStrapi";
import axios from "axios";

axios.get("https://strapi-dt37.onrender.com/api/newss?populate=*").then((response) => {
  console.log(response);
});



console.log("test");

fetch("https://strapi-dt37.onrender.com/api/newss?populate=*", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

function PostOnePage() {
//  const { id } = useParams();

  return (
    <Fragment>
      <div className="archives post post1">
        <span className="space-30" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="space-20" />
              <PostOnePageStrapi/> {/* Przekazanie articleId */}
              <div className="space-40" />

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PostOnePage;