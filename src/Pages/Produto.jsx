import React from "react";

const Produto = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Cadastro de Produto</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="nomeProduto" className="form-label">
                Nome do Produto
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeProduto"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição
              </label>
              <textarea
                className="form-control"
                id="descricao"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="preco" className="form-label">
                Preço
              </label>
              <input
                type="number"
                className="form-control"
                id="preco"
                step="0.01"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantidade" className="form-label">
                Quantidade em Estoque
              </label>
              <input
                type="number"
                className="form-control"
                id="quantidade"
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

export default Produto;
