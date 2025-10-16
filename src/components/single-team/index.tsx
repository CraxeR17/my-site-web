 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import TeamDetailsArea from './TeamDetailsArea'
 

export default function TeamDetails() {
  return (
    <Wrapper>
      <HeaderThree />
      <TeamDetailsArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
