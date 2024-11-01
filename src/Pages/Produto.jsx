import React, { useState, useEffect } from "react";

const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Simula a recuperação de dados de uma API
    const fetchProdutos = () => {
      const storedProdutos = JSON.parse(localStorage.getItem("produtos")) || [];
      setProdutos(storedProdutos);
    };

    fetchProdutos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduto = { nomeProduto, descricao, preco, quantidade };

    if (editingIndex !== null) {
      const updatedProdutos = [...produtos];
      updatedProdutos[editingIndex] = newProduto;
      setProdutos(updatedProdutos);
      setEditingIndex(null);
    } else {
      setProdutos([...produtos, newProduto]);
    }

    // Armazenar no localStorage
    localStorage.setItem("produtos", JSON.stringify([...produtos, newProduto]));

    // Resetar campos do formulário
    setNomeProduto("");
    setDescricao("");
    setPreco("");
    setQuantidade("");
  };

  const handleEdit = (index) => {
    const produto = produtos[index];
    setNomeProduto(produto.nomeProduto);
    setDescricao(produto.descricao);
    setPreco(produto.preco);
    setQuantidade(produto.quantidade);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(updatedProdutos);
    // Atualizar o localStorage
    localStorage.setItem("produtos", JSON.stringify(updatedProdutos));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Cadastro de Produto</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nomeProduto" className="form-label">
                Nome do Produto
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeProduto"
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
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
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
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
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
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
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {editingIndex !== null ? "Atualizar" : "Cadastrar"}
            </button>
          </form>

          <h6 className="mt-4">Lista de Produtos</h6>
          <ul className="list-group">
            {produtos.map((produto, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {produto.nomeProduto}
                <div>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Produto;
