 
import AboutFaq from '../about-1/AboutFaq'
import HeroAboutThree from './HeroAboutThree' 
import AboutHistory from '../about-1/AboutHistory' 
import AboutFeatures from '../about-1/AboutFeatures' 
import Wrapper from '../../../layouts/Wrapper'
import HeaderThree from '../../../layouts/headers/HeaderThree'
import DividedArea from '../../../common/DividedArea'
import BrandAreaHomeTwo from '../../homes/home-2/BrandAreaHomeTwo'
import TeamAreaHomeThree from '../../homes/home-3/TeamAreaHomeThree'
import FaqAreaHomeOne from '../../homes/home-2/FaqAreaHomeOne'
import FooterOne from '../../../layouts/footers/FooterOne'


export default function AboutThree() {
  return (
    <Wrapper>
      <HeaderThree />
      <HeroAboutThree />
      <DividedArea />
      <AboutHistory />
      <DividedArea />
      <BrandAreaHomeTwo />
      <AboutFeatures />
      <AboutFaq />
      <DividedArea />
      <TeamAreaHomeThree />
      <DividedArea />
      <FaqAreaHomeOne />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
