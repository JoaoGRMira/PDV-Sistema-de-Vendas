import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { CadProdutos } from '../pages/CadProdutos';
import { Vendas } from '../pages/Vendas';
import { ViewVendas } from '../pages/ViewVendas';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro-produto' element={<CadProdutos />} />
                <Route path='/vendas' element={<Vendas />} />
                <Route path='/visualizar-vendas' element={<ViewVendas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;