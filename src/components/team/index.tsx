 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import TeamArea from './TeamArea'

export default function Team() {
  return (
    <Wrapper>
      <HeaderThree />
      <TeamArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
