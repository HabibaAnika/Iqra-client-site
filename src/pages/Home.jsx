
import AllCourses from "../components/home/AllCourses"
import FeaturedBlog from "../components/home/FeaturedBlog"
import FeaturedContact from "../components/home/FeaturedContact"
import Hero from "../components/home/Hero"
import Islamic from "../components/home/Islamic"
import Queries from "../components/home/Queries"
import SomeFeatured from "../components/home/SomeFeatured"
import Teachers from "../components/home/Teachers"



function Home() {
  return (
    <div className="">
       <Hero/>
       <AllCourses/>
       <SomeFeatured/>
       <Teachers/>
       <FeaturedBlog/>
       <Queries/>
       <FeaturedContact/>
       <Islamic/>
    </div>
  )
}

export default Home;
