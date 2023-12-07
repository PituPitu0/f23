import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PostOnePageStrapi from '../../components/PostOnePageStrapi';
import PostOnePagination from '../../components/PostOnePagination';


function PostOnePage() {
  const { id } = useParams();

  return (
    <Fragment>
      <div className="archives post post1">
        <span className="space-30" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="space-20" />
              <PostOnePageStrapi articleId={id} /> {/* Przekazanie articleId */}
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
