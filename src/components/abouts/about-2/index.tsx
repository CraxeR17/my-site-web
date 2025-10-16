 
import HeroAboutTwo from "./HeroAboutTwo"; 
import BannerAboutTwo from "./BannerAboutTwo"; 
import MissionAboutTwo from "./MissionAboutTwo";
import FeaturesAboutTwo from "./FeaturesAboutTwo";
import FaqAboutTwo from "./FaqAboutTwo";
import AboutTeam from "../about-1/AboutTeam";
import Wrapper from "../../../layouts/Wrapper";
import HeaderThree from "../../../layouts/headers/HeaderThree";
import DividedArea from "../../../common/DividedArea";
import TestimonialHomeThree from "../../homes/home-3/TestimonialHomeThree";
import FooterOne from "../../../layouts/footers/FooterOne"; 
  

export default function AboutTwo() {
  return (
    <Wrapper>
      <HeaderThree />
      <HeroAboutTwo />
      <DividedArea />
      <BannerAboutTwo />
      <DividedArea />
      <MissionAboutTwo />
      <FeaturesAboutTwo />
      <FaqAboutTwo />
      <DividedArea />
      <AboutTeam />
      <DividedArea />
      <TestimonialHomeThree />
      <DividedArea />
      <FooterOne />    
    </Wrapper>
  )
}
