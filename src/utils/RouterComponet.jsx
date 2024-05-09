import React from 'react';
import { Redirect, Route } from "react-router-dom";
// import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
function RouterComponet({ children, ...rest }) {
    return (
      <Route>
       
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
            </Route>
    );
  }

export default RouterComponet;