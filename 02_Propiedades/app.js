
// creando un componente CON Ecmascript 6

class Saludo1 extends React.Component
{
	render()
	{
		return 	(	<div>
						<h1>Hola Mundo ReactJS</h1>
						<h1>Hola Mundo {this.props.nombre}</h1>
						<br /> 
					</div>
				);
	}

}

Saludo1.defaultProps = 
{
	nombre : "NodeJs"
};


ReactDOM.render(<div>
					<Saludo1  nombre="Javascript"/>
					<Saludo1 />
				</div>
				,
				document.getElementById('contenedor1'));




// creando un componente SIN Ecmascript 6

const Saludo2 = React.createClass(
{
	getDefaultProps:function()
	{
		return {nombre:"NodeJs"}
	}
	,
	render:function()
	{
		return 	(	<div>
						<h1>Hola Mundo ReactJS</h1>
						<h1>Hola Mundo {this.props.nombre}</h1>
						<br /> 
					</div>
				);
	}

});

ReactDOM.render(<div><br/><hr/><br/><br/>
					<Saludo2 nombre="Javascript" />
					<Saludo2  />
				</div>
				,
				document.getElementById("contenedor2"));




