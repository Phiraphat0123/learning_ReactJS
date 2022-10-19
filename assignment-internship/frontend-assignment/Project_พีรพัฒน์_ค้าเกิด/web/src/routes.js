import { useRoutes } from "react-router-dom";
import Page from './component/Page'
import React from 'react'


export default function Router() {
    let element = useRoutes([
      {
        element: <Page /> ,
        path:"search/:keyword"
      },
      {
        element: <Page/>,
        path:"/"
      }
    ]);
    return element
}