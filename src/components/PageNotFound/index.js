import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            NiE ma Takiej strony
            <Link to="/">Uciekaj</Link>
        </div>
    );
};

export default PageNotFound;