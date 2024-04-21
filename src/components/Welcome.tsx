
type GameProps = {
	nextScreen: () => void;
}

const Welcome = (props: GameProps) => {
	return (
		<section>
			<h1>Välkommen till mitt quiz!</h1>
			<p>Tryck på knappen för att starta!</p>
			<button type="button" onClick={props.nextScreen}>Starta</button>
		</section>
	)
}

export default Welcome
