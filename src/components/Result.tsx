
type ResultProps = {
	score: number;
	restartQuiz: () => void;
}

const Result = (props: ResultProps) => {
	return (
		<section>
			<h1>Resultat</h1>
			<p>Du fick {props.score} rätta svar!</p>
			<button type="button" onClick={props.restartQuiz}>Börja om</button>
		</section>
	)
};

export default Result;
