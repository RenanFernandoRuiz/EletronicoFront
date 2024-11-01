import React from "react";

const Venda = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Cadastro de Venda</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="dataEmissao" className="form-label">
                Data de Emissão
              </label>
              <input
                type="date"
                className="form-control"
                id="dataEmissao"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valorTotal" className="form-label">
                Valor Total
              </label>
              <input
                type="number"
                className="form-control"
                id="valorTotal"
                step="0.01"
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

export default Venda;
