import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import OurTeachers from "../pages/about/OurTeachers";
import Rules from "../pages/about/Rules";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BasicDetails from "../pages/details/BasicDetails";
import AdvanceDetails from "../pages/details/AdvanceDetails";
import SpecialDetails from "../pages/details/SpecialDetails";
import HifzDetails from "../pages/details/HifzDetails";
import NeedDetails from "../pages/details/NeedDetails";
import AlimDetails from "../pages/details/AlimDetails";
import ReviseDetails from "../pages/details/ReviseDetails";
import AmparaDetails from "../pages/details/AmparaDetails";
import TeacherSchedule from "../components/home/TeacherSchedule";
import Quran from "../pages/details/Quran";
import Biography from "../pages/details/Biography";
import Law from "../pages/details/Law";
import Prayer from "../pages/details/PrayerDetails"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/teachers",
        element: <OurTeachers />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
 
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      // course details
      {
        path: "/basic",
        element: <BasicDetails />,
      },
      {
        path: "/nazera",
        element: <AdvanceDetails />,
      },
      {
        path: "/ampara",
        element: <AmparaDetails />,
      },
      {
        path: "/special",
        element: <SpecialDetails />,
      },
      {
        path: "/hifz",
        element: <HifzDetails />,
      },
      {
        path: "/revise",
        element: <ReviseDetails />,
      },
      {
        path: "/need",
        element: <NeedDetails />,
      },
      {
        path: "/alim",
        element: <AlimDetails />,
      },
      {path: "/quran",
        element: <Quran/>
      },
      {
        path: "/bio",
        element : <Biography/>
      },
      {
        path: "/law",
        element: <Law/>
      },
      {
        path: "/prayer",
        element: <Prayer/>
      },
      {
        path: "/teacher-schedule",
        element: <TeacherSchedule />,
      },
    ],
  },
]);
