import React from "react";
import "./App.css";
import SecondComponent from "./SecondComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingersDetail from "./pages/SingersDetail";
import StateManagement from "./concept/StateManagement";
import Tailwindtask from "./concept/Tailwindtask";
import Event from "./concept/Event";
import UseEffectHook from "./concept/UseEffectHook";

// import Layout from './concept/Layout';

import Navbar from "./concept/MyLayout/Navbar";
import ImageSlider from "./concept/ImageSlider"; // Importing the ImageSlider component
import Footer from "./concept/MyLayout/Footer";
import MyLayout from "./concept/MyLayout/MyLayout";
import CenterBody from "./pages/CenterBody";
import Portfolio from "./concept/myportfolio/Portfolio";

import Datacustomhooks from "./concept/DataCustomhooks";
import DataFetching from "./concept/DataFetching";
import Keybord from "./concept/MyLayout/Keybord";
import Uncontrolledcomponent from "./concept/UncontrolledComponent ";
import Exercise1 from "./concept/Exercise1";
import Exercise2 from "./concept/Exercise2";

import Logicaloperators from "./pages/Logicaloperators";
import YupData from "./concept/YupData";
import GlobalState from "./newconcept/GlobalState";
// import CharacterHook from "./concept/CharacterHook";

import Fetching from "./concept/Fetching";
import JikanUI from "./pages/JikanUI";
import Ant from "./newconcept/Ant";
import Ecommerce from "./newproject/Ecommerce";
import EcommerceBody from "./newproject/EcommerceBody";

// const App = () => {
//   return (
//     <div>
//       <SecondComponent/>
//     </div>
//   )
// }
const router = createBrowserRouter([
  {
    path: "/newconcept/ant-design",
    element: <Ant/>,
  },
  {
    path: "/exercise-2",
    element: <Exercise2 />,
  },
  {
    path: "/concept/my-portfolio",
    element: <Portfolio />,
  },
 
  
  {
    path: "/concept/fetching",
    element: < Fetching />,
  },
  {
    path: "/pages/jikan-ui",
    element: < JikanUI  />,
  },
  {
   
    element: < Ecommerce  />,
    children:[
      {
      path:"/home-page2",
      element:<EcommerceBody/>
      },
    ]
  },
  
  {
    element: <MyLayout />,
    children: [
      {
        path: "/home-page",
        element: <CenterBody />,
      },
      {
        path: "/singers",
        element: <SingersDetail />,
      },
      {
        path: "/singers/karan-aujla",
        element: <div>Hello from Karan</div>,
      },
      {
        path: "/singers/:id",
        element: <SecondComponent />,
      },
      {
        path: "/keyborad-events",
        element: <Keybord />,
      },

      {
        path: "/concept/State-management",
        element: <StateManagement />,
      },
      {
        path: "/concept/Tailwind-task",
        element: <Tailwindtask />,
      },
      {
        path: "/concept/event",
        element: <Event />,
      },
      {
        path: "/concept/use-effect-hook",
        element: <UseEffectHook />,
      },
      {
        path: "/concept/data-fetching",
        element: <DataFetching />,
      },
      {
        path: "/concept/custom-data-hooks",
        element: <Datacustomhooks />,
      },
      {
        path: "/uncontrolled-Components",
        element: <Uncontrolledcomponent />,
      },
      {
        path: "/exercise-1",
        element: <Exercise1 />,
      },
      {
        path: "/concept/data-2",
        element: <YupData />,
      },
      {
        path: "/pages/logical-operators",
        element: <Logicaloperators />,
      },
      {
        path: "/newconcept/global-state",
        element: <GlobalState />,

      },
      
    ],

  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
