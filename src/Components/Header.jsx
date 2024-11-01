import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ELETRÔNICOS RUIZ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to={"/Clientes"}>
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to={"/Fornecedor"}>
                Fornecedor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to={"/Produto"}>
                Produto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to={"/Venda"}>
                Venda
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
