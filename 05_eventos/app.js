const Boton1 = React.createClass(
{	
	darClick:function()
	{
		alert("Diste click");
	}
	,
	render:function()
	{
		return <button  onClick={this.darClick} >Enviar</button >
	}
});

ReactDOM.render(<Boton1 />,document.getElementById("contenedor1"));





class Boton2 extends React.Component
{	
	darClick()
	{
		alert("Diste click");
	}

	render()
	{
		return <button onClick={this.darClick}>Enviar</button>
	}
}

ReactDOM.render(<Boton2 />,document.getElementById("contenedor2"));








