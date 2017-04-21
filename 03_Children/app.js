
// creando un componente SIN Ecmascript 6 

const Saludo1 = React.createClass(
{
	render:function()
	{
		return <h1>Hola Mundo {this.props.children}</h1>
	}

});

ReactDOM.render(<div>
					<Saludo1 >
						ReactJS
					</Saludo1 >
				</div>
				,document.getElementById('contenedor1')
				);



// creando un componente con Emascript 6

class Saludo2 extends React.Component
{
	render()
	{
		return <h1>Hola Mundo {this.props.children}</h1> 
	}
}

ReactDOM.render(<div>
					<Saludo2 >
						ReactJS
					</Saludo2 >
				</div>
				,document.getElementById('contenedor2')
				);

