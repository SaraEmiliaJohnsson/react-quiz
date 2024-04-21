
type WelcomeProps = {
	nextScreen: () => void;
}

const Welcome = (props: WelcomeProps) => {
	return (
		<section className="welcome-container">
			<h1>Välkommen till mitt quiz!</h1>
			<p>Tryck på knappen för att starta!</p>
			<button type="button" onClick={props.nextScreen}>Starta</button>
		</section>
	)
}

export default Welcome
