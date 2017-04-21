
ReactDOM.render(
				<h1>
					Hola mundo
				</h1>
				,
				document.getElementById("contenedor1")
				);


// creando un componente con Emascript 6

class HelloWorld1 extends React.Component
{
	render()
	{
		return (
					<h1>Hola mundo</h1>
				);
	}
}

// creando un componente SIN Ecmascript 6

const HelloWorld2 = React.createClass(
{
	render:function()
	{
		return (
					<h1>Hola mundo</h1>
				);
	}
});


ReactDOM.render(<HelloWorld1 />, document.getElementById("contenedor2"));
ReactDOM.render(<HelloWorld2 />, document.getElementById("contenedor3"));

