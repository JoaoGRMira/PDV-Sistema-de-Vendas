import { NavBarHome } from "../components/NavBarHome";

export function Login() {
  return (
    <>
      <NavBarHome></NavBarHome>
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
            width: "30%",
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
            Login
          </h1>
          <div className="row flex-column">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu email"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>
            <div className="col-md-12">
              <a
                href="/vendas"
                className="btn btn-primary"
                style={{ width: "100%", backgroundColor: "#5925BF", marginTop: "50px" }}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
