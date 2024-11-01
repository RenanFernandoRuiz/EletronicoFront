import React from "react";

const Fornecedor = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Cadastro de Fornecedor</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="nomeEmpresa" className="form-label">
                Nome da Empresa
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeEmpresa"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">
                CNPJ
              </label>
              <input type="text" className="form-control" id="cnpj" required />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Endereço
              </label>
              <input
                type="text"
                className="form-control"
                id="endereco"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">
                Telefone
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefone"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fornecedor;
