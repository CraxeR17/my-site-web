 
 
import HeaderTwo from '../../../layouts/headers/HeaderTwo';
import FooterTwo from '../../../layouts/footers/FooterTwo';
import HeroAreaHomeTwo from './HeroAreaHomeTwo';
import AboutAreaHomeTwo from './AboutAreaHomeTwo';
import ServiceAreaHomeTwo from './ServiceAreaHomeTwo';
import PortfolioAreaHomeTwo from './PortfolioAreaHomeTwo';
import BrandAreaHomeTwo from './BrandAreaHomeTwo';
import HowWeWorkHomeOne from './HowWeWorkHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
import FaqAreaHomeOne from './FaqAreaHomeOne';
import Wrapper from '../../../layouts/Wrapper';
import HomeLayout from '../HomeLayout';

export default function HomeTwo() {
  const sections = [
    <HeroAreaHomeTwo />,
    <AboutAreaHomeTwo />,
    <ServiceAreaHomeTwo />,
    <PortfolioAreaHomeTwo />,
    <BrandAreaHomeTwo />,
    <HowWeWorkHomeOne />,
    <TestimonialHomeOne />,
    <FaqAreaHomeOne />,
  ];

  return <Wrapper><HomeLayout header={<HeaderTwo />} footer={<FooterTwo />} sections={sections} /></Wrapper>;
}
