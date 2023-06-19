import { NavBar } from '../components/NavBar';

export function Vendas() {
  return (
    <>
      <NavBar />
      <div className="row" style={{ height: '50vh' }}>
        <div className="col-lg-12" style={{ backgroundColor: '#5925BF' }}>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators list-unstyled">
              <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="carrosselProduto.png" className="d-block w-100" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Nome do produto 1</h5>
                  <p>Descrição do produto.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="carrosselProduto.png" className="d-block w-100" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Nome do produto 2</h5>
                  <p>Descrição do produto.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="carrosselProduto.png" className="d-block w-100" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Nome do produto 3</h5>
                  <p>Descrição do produto.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row" style={{ height: '50vh' }}>
        <div className="col-lg-3">
          <div className="card" style={{ marginTop: '20px' }}>
            <div className="card-body">
              <h5 className="card-title">Produto 1</h5>
              <p className="card-text">Breve descrição do produto que está sendo vendido.</p>
              <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Comprar</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card" style={{ marginTop: '20px' }}>
            <div className="card-body">
              <h5 className="card-title">Produto 2</h5>
              <p className="card-text">Breve descrição do produto que está sendo vendido.</p>
              <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Comprar</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card" style={{ marginTop: '20px' }}>
            <div className="card-body">
              <h5 className="card-title">Produto 3</h5>
              <p className="card-text">Breve descrição do produto que está sendo vendido.</p>
              <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Comprar</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3" style={{ marginTop: '20px' }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Produto 4</h5>
              <p className="card-text">Breve descrição do produto que está sendo vendido.</p>
              <button className="btn btn-primary" style={{ backgroundColor: "#5925BF" }}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
