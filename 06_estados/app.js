
class Personaje extends React.Component 
{
	constructor(props)
	{
		super(props)
		this.state = {
						urlFoto:"steve-jobs.jpg",
						nombre:"Steve Jobs",
						biografia:"Steve Jobs es la biografía autorizada del empresario informático Steve Jobs. Fue escrita a pedido del propio Jobs por el biógrafo "	
		}

		
		this.agregarBillGates = this.agregarBillGates.bind(this);

	}


agregarBillGates() 
{
    
    this.setState(function(prevState, props) {
  	return {
		    	urlFoto:"http://www.cuanto-gana.com/wp-content/uploads/2014/03/cuanto-gana-bill-gates.jpg",
				nombre:"Bill Gates",
				biografia:"Bill Gates, es un empresario, informático y filántropo4 estadounidense, cofundador de la empresa de software Microsoft junto con Paul Allen"	

  			};

	});



	// this.setState((prevState, props) => (
	// {
	//   	urlFoto:"http://www.cuanto-gana.com/wp-content/uploads/2014/03/cuanto-gana-bill-gates.jpg",
	// 	nombre:"Bill Gates",
	// 	biografia:"Bill Gates, es un empresario, informático y filántropo4 estadounidense, cofundador de la empresa de software Microsoft junto con Paul Allen"	


	// }));


}

	// agregarBillGates: function()
	// {
	// 	// this.setState({
	// 	// 	urlFoto:"http://www.cuanto-gana.com/wp-content/uploads/2014/03/cuanto-gana-bill-gates.jpg",
	// 	// 	nombre:"Bill Gates",
	// 	// 	biografia:"Bill Gates, es un empresario, informático y filántropo4 estadounidense, cofundador de la empresa de software Microsoft junto con Paul Allen"	
	// 	// });
	// }
 // 	,
 
	render(){
		return (	
					<div>
						<div className="personaje">
							<div className="foto">
								<img  src={this.state.urlFoto}/>
								<div className="nombre">
									{this.state.nombre}
								</div>
							</div>
							<hr />
							<div className="biografia">
								{this.state.biografia}
							</div>
						</div>
						<button onClick={this.agregarBillGates}>Agregar</button>

					</div>
					
				)
	}
}


ReactDOM.render(
					<Personaje />
					,
					document.getElementById("contenedor1")
				);



