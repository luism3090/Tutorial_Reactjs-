class Contenedor extends React.Component 
{

	constructor(props)
	 {
	 	super(props);
	 	this.state = 	{
	 						personajes:[
	 										{
	 											nombre:"Steve Jobs",
	 											urlFoto:"steve-jobs.jpg",
	 											biografia:"Steve Jobs nació en San Francisco (California) en el año 1955, fruto de la relación entre Abdulfattah Jandali, un inmigrante sirio musulmán"
	 										}
	 									]
	 						
	 					};



	 }


	render(){

		var form = 		this.state.personajes.map(function(personaje,index){
							return ( <Personaje nombre={personaje.nombre} urlFoto={personaje.urlFoto} biografia={personaje.biografia} key={index}/> )
						});

		return (	
					<div>
						<div id="formulario">
							{form}
						</div>
						<div id="contPersonajes">
							<Formulario />
						</div>
						
					</div>
				)
	}
}





class Personaje extends React.Component 
{

 
	render(){
		return (	
					<div className="personaje">
						<div className="foto">
							<img  src={this.props.urlFoto}/>
							<div className="nombre">
								{this.props.nombre}
							</div>
						</div>
						<hr />
						<div className="biografia">
							{this.props.biografia}
						</div>
					</div>
					
				)
	}
}


class Formulario extends React.Component 
{



	render(){
		return (	<div>
					<p>
						<label >url imagen</label>
						<input type="text"  placeholder="Agregue una url de imagen" />
					</p>
					<p>
						<label >Nombre</label>
						<input type="text"  placeholder="Agregue el nombre del personaje" />
					</p>
					<p>
						<label >Biografía</label>
						<textarea  placeholder="Agregue la biografia" cols="50" rows="10" maxLength="140" ></textarea> 
					</p>
					<p>
						<button onClick={this.Agregar}>Enviar</button>
					</p>
					</div>
					
				)
	}
}

ReactDOM.render(
					<Contenedor />
					,
					document.getElementById("contenedor1")
				);



