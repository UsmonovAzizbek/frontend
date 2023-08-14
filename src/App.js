
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'
import ProductList from './components/ProductList'
import SaveProduct from './components/SaveProduct'
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/addProduct" element={<SaveProduct />} />
                  <Route path="/productList" element={<ProductList />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
