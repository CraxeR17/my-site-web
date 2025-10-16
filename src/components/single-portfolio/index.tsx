 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import PortfolioDetailsArea from './PortfolioDetailsArea'

export default function PortfolioDetails() {
  return (
    <Wrapper>
      <HeaderThree />
      <PortfolioDetailsArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
