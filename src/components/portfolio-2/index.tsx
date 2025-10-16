import DividedArea from "../../common/DividedArea";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderThree from "../../layouts/headers/HeaderThree";
import Wrapper from "../../layouts/Wrapper";
import PortfolioTwoArea from "./PortfolioTwoArea";

export default function PortfolioTwo() {
	return (
		<Wrapper>
			<HeaderThree />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<PortfolioTwoArea />
					<DividedArea />
					<FooterOne />
				</div>
			</div>
		</Wrapper>
	);
}
