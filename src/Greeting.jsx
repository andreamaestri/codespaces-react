function FaveFood() {
	const favFoods = [
		"Pizza",
		"Lasagna",
		"Roast",
		"Chips",
		"Tom Yum",
		"Savoy Cabbage Stew",
	];
	const favFoodsList = favFoods.map((favFood) => <li key={favFood}>{favFood}</li>);

	return (
		<>
			<article>
				<h1>My favourite food is...</h1>
				<ul>
					{favFoodsList}
				</ul>
			</article>
		</>
	);
}

export default function Greeting() {
	const name = "Andrea";
	const role = "React Developer";
	return (
		<>
			<h1>
				Hi! My name is {name}, and I&#039;m a {role}!
			</h1>
			{FaveFood()}
		</>
	);
}
