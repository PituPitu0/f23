import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../_PrivateRoute';
import HomePage from "../HomePage";
import LocalPage from "../LocalPage";

import AboutUsPage from "../AboutUsPage";
import ArchivePage from "../ArchivePage";
import ContactUsPage from "../ContactUsPage";
import NotFoundPage from "../NotFoundPage";
import PostOnePage from "../PostOnePage";



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
                path="/local"
                parentClass="theme-1"
                component={LocalPage} />
                   
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
         
 


            <Route exact component={NotFoundPage} />
        </Switch>
    );
}
