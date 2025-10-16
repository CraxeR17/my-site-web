 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import PortfolioThreeArea from './PortfolioThreeArea'

export default function PortfolioThree() {
  return (
    <Wrapper>
      <HeaderThree />
      <PortfolioThreeArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
