import { NavBar } from "../components/NavBar"

export function CadProdutos() {
  return (
    <>
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 64px)",
          backgroundColor: "#5925BF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "70%",
            height: "70%",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "black",
              textDecoration: "underline",
              textDecorationColor: "#5925BF",
            }}
          >
            Cadastrar um Produto
          </h1>
          <div className="row flex-column">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="produto" className="form-label">
                  Nome do produto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  placeholder="Informe o nome do produto"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="valor" className="form-label">
                  Valor do produto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="valor"
                  placeholder="Informe o valor do produto"
                />
              </div>
            </div>
            <div className="col-md-12">
              <a
                href="/vendas"
                className="btn btn-primary"
                style={{ width: "100%", backgroundColor: "#5925BF", marginTop: "50px" }}
              >
                Cadastrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}