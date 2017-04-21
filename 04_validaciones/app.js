// Nota : para este ejercicio colocamos un CDN de una version muy antigua de REACJS para que pudiera funcionar 
// las validaciones 

const Saludo1 = React.createClass(
{
	propTypes:
	{
		nombre: React.PropTypes.string.isRequired,
		isBoy: React.PropTypes.bool.isRequired
	}
	,
	getDefaultProps:function()
	{
		return {nombre:"Jorge"}
	}
	,
	render:function()
	{
		return (<h1>
					Hola {this.props.nombre}
					<div>{ this.props.isBoy == true ? " is Boy" : " is Girl" }</div>
				</h1>);
	}

});



ReactDOM.render(<div>
					<Saludo1 nombre="Luis" isBoy={true} />
					<Saludo1 nombre="Ana" isBoy={false} />
				</div>
				,
				document.getElementById('contenedor1'));


//---------------------------------------------------------------



class Saludo2 extends React.Component
{
	render()
	{
		return (
				<h1>
					Hola {this.props.nombre}
					<div>{this.props.isBoy == true ? 'is boy' : 'is girl'}</div>
				</h1>
				);
	}
}

Saludo2.defaultProps =
{
	nombre:"Ana"
}

Saludo2.propTypes = 
{
  nombre: React.PropTypes.string.isRequired,
  isBoy:React.PropTypes.bool.isRequired
};

ReactDOM.render(<div>
					<Saludo2 nombre="Luis" isBoy={true}/>
					<Saludo2  isBoy={false}/>
				</div>
				,
				document.getElementById('contenedor2'));

