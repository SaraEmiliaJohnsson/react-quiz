import { useState } from "react";


interface Question {
	question: string;
	answers: string[];
	correct: number;
}

const Game = () => {

	const questions: Question[] = getQuestions();

	const [currentQuestion, setCurrentQuestion] = useState<number>(0);

	const question = questions[currentQuestion];

	const options = question.answers.map((answer, index) => (
		<p key={index}>
			<label>
				{answer}
				<input type="radio" />

			</label>
		</p>
	));

	return (

		<section>
			<h1>The quiz</h1>

			<h3>{question.question}</h3>

			{options}

			<button type="button">Svara</button>
		</section>

	)
};

const getQuestions = (): Question[] => {

	return [
		{
			question: "Vad är skillnaden mellan == och === i JavaScript?",
			answers: ["1. == jämför endast värden medan === jämför både värden och datatyper.", "2. == jämför både värden och datatyper medan === jämför endast värden.", "3. == används för att tilldela värden medan === används för att jämföra värden.", "4. == och === är synonymer och kan användas utbytbart."],
			correct: 0
		},
		{
			question: "Vad är en funktion i programmeringstermer?",
			answers: ["1. En strukturerad uppsättning data.", "2. En uppsättning regler som beskriver hur data lagras och manipuleras.", "3. En del av koden som utför en specifik uppgift och kan återanvändas.", "4. En sorts variabel som kan innehålla flera värden samtidigt."],
			correct: 2
		},
		{
			question: "Vad är en loop i programmering?",
			answers: ["1. En typ av variabel som kan ändra värde under körning.", "2. En uppsättning instruktioner som utförs upprepade gånger tills ett villkor är uppfyllt.", "3. En funktion som returnerar ett värde baserat på de givna argumenten.", "4. En del av koden som hanterar fel och undantag."],
			correct: 1
		},
		{
			question: "Vad är skillnaden mellan GET och POST-requests i HTTP?",
			answers: ["1. GET används för att skicka data till servern medan POST används för att ta emot data från servern.", "2. GET används för att hämta data från servern medan POST används för att skicka data till servern.", "3. GET används för att uppdatera data på servern medan POST används för att läsa data från servern.", "4. GET och POST är synonymer och kan användas utbytbart."],
			correct: 1
		}
	]
}

export default Game;
