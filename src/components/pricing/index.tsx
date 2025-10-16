
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import PricingArea from './PricingArea' 


export default function Pricing() {
  return (
    <Wrapper>
      <HeaderThree />
      <PricingArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
