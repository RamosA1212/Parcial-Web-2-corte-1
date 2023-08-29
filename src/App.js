
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Content from "./pages/content";
import Overview from "./pages/overview";
import Create from "./pages/create";
import dataContent from './data/dataContent.json'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/content",
    element: <Content/>
  },

  {
    path: "/overview",
    element: <Overview/>,
  },

  {
    path: "/create",
    element: <Create/>,
  },
]);


function App() {

  var data = JSON.parse(localStorage.getItem("data-content-local"));

  if(data == null){
      console.log(data)
      localStorage.setItem("data-content-local", JSON.stringify(dataContent));
  }
  
  return ( <RouterProvider router={router} /> );
}

export default App;
