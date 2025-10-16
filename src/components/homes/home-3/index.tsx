 
 
import HeaderThree from '../../../layouts/headers/HeaderThree';
import FooterThree from '../../../layouts/footers/FooterThree';
import HeroAreaHomeThree from './HeroAreaHomeThree';
import BannerAreaHomeThree from './BannerAreaHomeThree';
import AboutAreaHomeThree from './AboutAreaHomeThree';
import ServiceAreaHomeThree from './ServiceAreaHomeThrere';
import TextSlideHomeThree from './TextSlideHomeThree';
import PortfolioAreaHomeThree from './PortfolioAreaHomeThree';
import TestimonialHomeThree from './TestimonialHomeThree';
import TeamAreaHomeThree from './TeamAreaHomeThree';
import BlogAreaHomeThree from './BlogAreaHomeThree';
import HomeLayout from '../HomeLayout';
import Wrapper from '../../../layouts/Wrapper';

export default function HomeThree() {
  const sections = [
    <HeroAreaHomeThree />,
    <BannerAreaHomeThree />,
    <AboutAreaHomeThree />,
    <ServiceAreaHomeThree />,
    <TextSlideHomeThree />,
    <PortfolioAreaHomeThree />,
    <TestimonialHomeThree />,
    <TeamAreaHomeThree />,
    <BlogAreaHomeThree />,
  ];

  return <Wrapper><HomeLayout header={<HeaderThree />} footer={<FooterThree />} sections={sections} /></Wrapper>;
}
