import { INTERESTS } from "../constant";
import "./interest.css";
const Interests = () => {
	return (
		<section>
			<div className="interestcontainer">
				<div className="img-wrapper">
					<img
						src="/frndr_logo2.png"
						alt="frndr logo"
						className="interest-image-logo"
					/>
				</div>
				<div className="interestheader">
					<h4>Pick your Interests...</h4>
					<div>
						<input type="text" placeholder="search" />
					</div>
					<p>You should select at least 5 interests</p>
				</div>
				<div className="interests">
					{INTERESTS.map((item, i) => {
						return <span key={i}>{item}</span>;
					})}
				</div>
				<button type="button">Next</button>
				<div className="tab"></div>
			</div>
		</section>
	);
};
export default Interests;
