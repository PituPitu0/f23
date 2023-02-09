import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../_PrivateRoute';
import HomePage from "../HomePage";
import BusinessPage from "../BusinessPage";

import AboutUsPage from "../AboutUsPage";
import ArchivePage from "../ArchivePage";
import ContactUsPage from "../ContactUsPage";
import NotFoundPage from "../NotFoundPage";
import PostOnePage from "../PostOnePage";
import PostTwoPage from "../PostTwoPage";
import PostThreePage from "../PostThreePage";


// import PublicRoute from '../_PublicRoute';
export function Routes() {
    return (
        <Switch>
            {/*home one routes*/}
            <PrivateRoute
                exact
                path="/"
                parentClass="theme-1"
                component={HomePage} />
            <PrivateRoute
                exact
                path="/business"
                parentClass="theme-1"
                component={BusinessPage} />
                   
            <PrivateRoute
                exact
                path="/about"
                parentClass="theme-1"
                component={AboutUsPage} />
            <PrivateRoute
                exact
                path="/archive"
                parentClass="theme-1"
                component={ArchivePage} />
            <PrivateRoute
                exact
                path="/contact"
                parentClass="theme-1"
                component={ContactUsPage} />
            <PrivateRoute
                exact
                path="/404"
                parentClass="theme-1"
                component={NotFoundPage} />
            <PrivateRoute
                exact
                path="/post1"
                parentClass="theme-1"
                component={PostOnePage} />
            <PrivateRoute
                exact
                path="/post2"
                parentClass="theme-1"
                component={PostTwoPage} />
            <PrivateRoute
                exact
                path="/post3"
                parentClass="theme-1"
                component={PostThreePage} />
 


            <Route exact component={NotFoundPage} />
        </Switch>
    );
}
