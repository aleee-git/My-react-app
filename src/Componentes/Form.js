import { Component } from "react";

export default class Form extends Component {

    constructor () {
        super();
        this.state = {
            name : "",
            img : "#",
        }
    }

    handleName = event => {
        this.setState ({
            name : event.target.value
        })
    }

    // Este metodo se trae los datos de PokeApi.co - los busca
    fechApi = async () => {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
      // Crea el objeto en base a la info que trae
      let data = await res.json();

      console.log(data);

      this.setState ({
        img: data.sprites.front_default,
      });

    }

    // Cuando se crea, ejecuta la funcion 
    // componentDidMount () {
    //   this.fechApi();
    // }

    handlesubmit = event => {
      let name = this.state.name;

      this.fechApi();
      event.preventDefault();

      console.log(name);
  }

  render() {

    return (
      <div className="card text-center" style={{width: "600px", backgroundColor:"#FFF0F0", alignItems:"center"}}>
        <div className="card-header" style={{width: "100%"}}>Formulario para gays</div>
        <div className="card-body">
          <form onSubmit={this.handlesubmit}>
            <label className="form-label">Ingrese nombre</label>
            <br/>
            <input onChange={this.handleName} style={{width:"400px"}} type="text" placeholder="Nombre" className="form-control text-center"/>
            <br/>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
        <img src={this.state.img} alt="Pokemon-img"/>
      </div>
    );
  }
}
