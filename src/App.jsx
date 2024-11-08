function ListItem(props) {
	return <li>{props.favFood}</li>;
}

function List(props) {
	return (
		<ul>
			{props.favFoods.map((favFood) => {
				return <ListItem key={favFood} favFood={favFood} />;
			})}
		</ul>
	);
}

export default function App() {
	const favFoods = [
		"Pizza",
		"Lasagna",
		"Roast",
		"Chips",
		"Tom Yum",
		"Savoy Cabbage Stew",
	];
	const name = "Andrea";
	const role = "React Developer";

	return (
		<div>
			<h1>
				Hi! My name is {name}, and I&#039;m a {role}!
			</h1>
			<article>
				<h2>My favourite food is...</h2>
				<List favFoods={favFoods} />
			</article>
		</div>
	);
}
