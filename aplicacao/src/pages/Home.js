import { NavBarHome } from "../components/NavBarHome";

export function Home() {
    return (
        <>
            <NavBarHome></NavBarHome>
            <div style={{ display: "flex", height: "calc(100vh - 64px)" }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h1>Site de Vendas</h1> <br />
                        <p>Confira gráficos, cadastre produtos e faça vendas aqui!</p>
                        <a className="btn btn-primary" href='/login' style={{ backgroundColor: "#5925BF" }}>Login</a>
                    </div>
                </div>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ backgroundImage: "url('vendas.png')", backgroundSize: "cover", backgroundColor: "#5925BF" }}>
                </div>
            </div>
        </>
    );
}
