 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import BlogDetailsArea from './BlogDetailsArea'
 

export default function BlogDetails() {
  return (
    <Wrapper>
      <HeaderThree />
      <BlogDetailsArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
