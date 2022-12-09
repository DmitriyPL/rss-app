import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { router } from "./router/router";
import { axiosGetAllRss, axiosInitUser } from "./redux/services/rss-services.js"

function App() {

  const dispatch = useDispatch();
   
  useEffect( () => { 
      dispatch( axiosInitUser() )       
      dispatch( axiosGetAllRss() );   
  }, []);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
