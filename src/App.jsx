/* Using the ternary operator
  *function List(props) {
	*return (
		<ul>
			{props.favFoods.map((favFood) => {
				return favFood.startsWith("L") ? <li key={favFood}>{favFood}</li> : null;
			})}
		</ul>
	);
} */

/* Using the && operator
function List(props) {
  return (
    <ul>
      {props.favFoods.map((favFood) => {
        return favFood.startsWith("L") && <li key={favFood}>{favFood}</li>;
      })}
    </ul>
  )
}  */

// Using if, if/else, switch statements

function List(props) {
	if (!props.favFoods) {
		return <div>Loading...</div>;
	}

	if (props.favFoods.length === 0) {
		return <div>There are no foods in the list!</div>;
	}

	return (
		<ul>
			{props.favFoods.map((favFood) => {
				return <li key={favFood}>{favFood}</li>;
			})}
		</ul>
	);
}

// Using props in React

function Button() {
	return <button>Click Me!</button>;
}

export default function App() {
	const favFoods = [];
	const name = "Andrea";
	const role = "React Developer";

	return (
		<div>
			<h1>
				Hi! My name is {name}, and I&#039;m a {role}!
			</h1>
			<article>
				<h2>My favourite foods are...</h2>
				<List favFoods={favFoods} />
				<div>
					<Button />
					<Button />
					<Button />
				</div>
			</article>
		</div>
	);
}
