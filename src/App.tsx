 

import {  Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home-1";
import ErrorBoundary from "./components/ErrorBoundary";
import HomeTwo from "./components/homes/home-2";
import HomeThree from "./components/homes/home-3";
import AboutOne from "./components/abouts/about-1";
import AboutTwo from "./components/abouts/about-2";
import AboutThree from "./components/abouts/about-3";
import Service from "./components/service";
import ServiceDetails from "./components/single-service";
import PortfolioOne from "./components/portfolio-1";
import PortfolioTwo from "./components/portfolio-2";
import PortfolioThree from "./components/portfolio-3";
import PortfolioDetails from "./components/single-portfolio";
import Team from "./components/team";
import TeamDetails from "./components/single-team";
import Faq from "./components/faq";
import Pricing from "./components/pricing";
import Blog from "./components/blog";
import BlogDetails from "./components/single-blog";
import Contactus1 from "./components/contact-us1";
import Contactus2 from "./components/contact-us2";
import Contactus3 from "./components/contact-us3";
import NotFound from "./error";
 



const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/home-2", element: <HomeTwo /> },
  { path: "/home-3", element: <HomeThree /> },
  { path: "/about-1", element: <AboutOne /> },
  { path: "/about-2", element: <AboutTwo /> },
  { path: "/about-3", element: <AboutThree /> },
  { path: "/service", element: <Service /> },
  { path: "/single-service", element: <ServiceDetails /> },
  { path: "/portfolio-1", element: <PortfolioOne /> },
  { path: "/portfolio-2", element: <PortfolioTwo /> },
  { path: "/portfolio-3", element: <PortfolioThree /> },
  { path: "/single-portfolio", element: <PortfolioDetails /> },
  { path: "/team", element: <Team /> },
  { path: "/single-team", element: <TeamDetails /> },
  { path: "/faq", element: <Faq /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/blog", element: <Blog /> },
  { path: "/single-blog", element: <BlogDetails /> },
  { path: "/contact-us1", element: <Contactus1 /> },
  { path: "/contact-us2", element: <Contactus2 /> },
  { path: "/contact-us3", element: <Contactus3 /> },


  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="preloader">
        <div className="preloader-inner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>

  );
}

export default App;
