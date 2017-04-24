
class Personaje extends React.Component 
{
	
	render(){
		return (	
					<div>
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
					</div>
					
				)
	}
}


class GetPersonajes extends React.Component 
{
	render()
	{
		return(
				<label>
					{
						this.props.datosPersonaje.map(function(dato,index)
						{

							return (
									<Personaje urlFoto={dato.urlFoto} nombre={dato.nombre} biografia={dato.biografia} key={index} />
									);
							
						})
					}
				</label>
				)
	}
}

var arrayDatosPersona = [
						{
							urlFoto:"steve-jobs.jpg",
	 						nombre:"Steve Jobs",
	 						biografia:"Steve Jobs es la biografía autorizada del empresario informático Steve Jobs. Fue escrita a pedido del propio Jobs por el biógrafo "
						},
						{
							urlFoto:"http://www.cuanto-gana.com/wp-content/uploads/2014/03/cuanto-gana-bill-gates.jpg",
							nombre:"Bill Gates",
			 				biografia:"Bill Gates, es un empresario, informático y filántropo4 estadounidense, cofundador de la empresa de software Microsoft junto con Paul Allen"	
						},
						{
							urlFoto:"http://cdn1.dailypost.ng/wp-content/uploads/2015/10/Mark-Zuckerberg1.jpg",
							nombre:"Zuckerberg",
			 				biografia:" es un programador y empresario estadounidense conocido por ser el creador de Facebook. Para desarrollar la red, contó con el apoyo de sus compañeros de Harvard "	
						},

					]

ReactDOM.render(	<GetPersonajes datosPersonaje={arrayDatosPersona}/>
					,
					document.getElementById("contenedor1")
				);



