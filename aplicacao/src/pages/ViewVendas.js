import { GraficoAnual } from "../components/GraficoAnual";
import { GraficoTotal } from "../components/GraficoTotal";
import { GraficoVendas } from "../components/GraficoVendas";
import { GraficoVendedor } from "../components/GraficoVendedor";
import { NavBar } from "../components/NavBar";

export function ViewVendas() {
  return (
    <>
      <NavBar></NavBar>
      <div className="row" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="col-lg-6">
          <div className="p-4">
            <h2 style={{ borderBottom: "2px solid #5925BF", display: "inline-block" }}>
              Dashboard de Vendas
            </h2>
            <p>Confira gráficos e informações sobre as vendas.</p>
          </div>
          <div className="p-4">
            <GraficoTotal></GraficoTotal>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-4">
                <GraficoAnual></GraficoAnual>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4">
                <GraficoVendas></GraficoVendas>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4">
                <GraficoVendedor></GraficoVendedor>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ backgroundColor: "white", marginTop: "20px" }}>
        <h3 style={{ borderBottom: "2px solid #5925BF", display: "inline-block" }}>Produtos à Venda</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Produto 1
            <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Editar</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Produto 2
            <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Editar</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Produto 3
            <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Editar</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Produto 4
            <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Editar</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Produto 5
            <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Editar</button>
          </li>
        </ul>
      </div>
    </>
  );
}
