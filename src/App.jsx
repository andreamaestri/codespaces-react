
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

// Using the && operator
function List(props) {
  return (
    <ul>
      {props.favFoods.map((favFood) => {
        return favFood.startsWith("L") && <li key={favFood}>{favFood}</li>;
      })}
    </ul>
  )
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
				<h2>My favourite foods are...</h2>
				<List favFoods={favFoods} />
			</article>
		</div>
	);
}
