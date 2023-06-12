import React, {Fragment} from 'react';
import PostOnePagination from "../../components/PostOnePagination";
import PostOnePageStrapi  from "../../components/PostOnePageStrapi";





import axios from "axios";

axios.get("http://localhost:1337/api/newss").then((response) => {
  console.log(response);
});



console.log("test");

fetch("http://localhost:1337/api/newss", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));


function PostOnePage() {
    return (
        <Fragment>
            <div className="archives post post1">
               
                <span className="space-30" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                        
                            <div className="space-20" />
                                 <PostOnePageStrapi/>
                            <div className="space-40" />
                        
                            <PostOnePagination />
                        </div>
                  
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default PostOnePage;