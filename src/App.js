import "./App.css";
import Header from "./app/components/Header/Header.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./app/pages/SignUp";
import SignIn from "./app/pages/SignIn";
import HomePage from "./app/pages/HomePage";
import Layout from "./app/components/Layout/Layout";
import Cart from "./app/pages/Cart";
import MyOrder from "./app/pages/MyOrder";

function App() {


  const browserRouter = createBrowserRouter([
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path : '/',
      element : <Layout/>,
      children : [
        { index : true , element : <HomePage/> },
        {
          path : "cart" , element : <Cart/>
        },
        {
          path : "myorders", element : <MyOrder/>
        }

      ],
    },

  
  ])


  return (
    <div>
      <RouterProvider router={browserRouter} />
      {/* <Header/> */}
    </div>
  );
};

export default App;
