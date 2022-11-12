import Select from "./Select";
import { SELCECTIONS as questions } from "../constant";
import "./questions.css";

const Questions = () => {
	return (
		<section>
			<div className="questioncontainer">
				<div className="img-wrapper">
					<img
						src="/frndr_logo2.png"
						alt="frndr logo"
						className="question-image-logo"
					/>
				</div>
				<div className="questionheader">
					<h4>Answer to the following question...</h4>
				</div>
				<div className="questions">
					{questions.map((options, i) => {
						return (
							<div key={i}>
								<p>{`${i + 1}.Questions 0${i + 1}`}</p>
								<Select
									placeHolder="Select ..."
									options={options}
									onChange={(value) => console.log(value.name)}
								/>
							</div>
						);
					})}
				</div>
				<button type="button">Next</button>
				<div className="tab"></div>
			</div>
		</section>
	);
};
export default Questions;
