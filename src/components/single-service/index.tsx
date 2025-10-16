 
import DividedArea from "../../common/DividedArea";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderThree from "../../layouts/headers/HeaderThree";
import Wrapper from "../../layouts/Wrapper";
import ServiceDetailsArea from "./ServiceDetailsArea"; 

export default function ServiceDetails() {
	return (
		<Wrapper>
			<HeaderThree />
      <ServiceDetailsArea />
			<DividedArea />
			<FooterOne />
		</Wrapper>
	);
}
