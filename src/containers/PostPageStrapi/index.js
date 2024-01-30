// import React, { Fragment } from 'react';

// import PostOneMainStrapi  from "../PostOnePageStrapi";


// function PostOnePage() {
// //  const { id } = useParams();

//   return (
//     <Fragment>
//       <div className="archives post post1">
//         <span className="space-30" />
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 col-lg-8">
//               <div className="space-20" />
//               <PostOneMainStrapi/> 
//               <div className="space-40" />

//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// export default PostOnePage;
import React from 'react';
import { useParams } from 'react-router-dom';
import PostOnePageStrapi from '../PostOnePageStrapi';

function PostPageStrapi() {
  // Pobierz parametr id z adresu URL
  const { id } = useParams();

  return (
    <div>
      {/* Wyświetl komponent PostOnePageStrapi i przekaż id jako parametr */}
      <PostOnePageStrapi articleId={id} />
    </div>
  );
}

export default PostPageStrapi;
