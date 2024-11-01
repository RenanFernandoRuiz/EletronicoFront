import React, { useState, useEffect } from "react";

const Venda = () => {
  const [vendas, setVendas] = useState([]);
  const [dataEmissao, setDataEmissao] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Simula a recuperação de dados de uma API
    const fetchVendas = () => {
      const storedVendas = JSON.parse(localStorage.getItem("vendas")) || [];
      setVendas(storedVendas);
    };

    fetchVendas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVenda = { dataEmissao, valorTotal };

    if (editingIndex !== null) {
      const updatedVendas = [...vendas];
      updatedVendas[editingIndex] = newVenda;
      setVendas(updatedVendas);
      setEditingIndex(null);
    } else {
      setVendas([...vendas, newVenda]);
    }

    // Atualiza o localStorage
    localStorage.setItem("vendas", JSON.stringify([...vendas, newVenda]));

    // Resetar campos do formulário
    setDataEmissao("");
    setValorTotal("");
  };

  const handleEdit = (index) => {
    const venda = vendas[index];
    setDataEmissao(venda.dataEmissao);
    setValorTotal(venda.valorTotal);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedVendas = vendas.filter((_, i) => i !== index);
    setVendas(updatedVendas);
    // Atualiza o localStorage
    localStorage.setItem("vendas", JSON.stringify(updatedVendas));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Cadastro de Venda</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="dataEmissao" className="form-label">
                Data de Emissão
              </label>
              <input
                type="date"
                className="form-control"
                id="dataEmissao"
                value={dataEmissao}
                onChange={(e) => setDataEmissao(e.target.value)}
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
                value={valorTotal}
                onChange={(e) => setValorTotal(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {editingIndex !== null ? "Atualizar" : "Cadastrar"}
            </button>
          </form>

          <h6 className="mt-4">Lista de Vendas</h6>
          <ul className="list-group">
            {vendas.map((venda, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {`Data: ${venda.dataEmissao}, Total: R$ ${parseFloat(
                  venda.valorTotal
                ).toFixed(2)}`}
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

export default Venda;
