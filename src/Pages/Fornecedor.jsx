import React, { useState, useEffect } from "react";

const Fornecedor = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Simula a recuperação de dados de uma API
    const fetchFornecedores = () => {
      const storedFornecedores =
        JSON.parse(localStorage.getItem("fornecedores")) || [];
      setFornecedores(storedFornecedores);
    };

    fetchFornecedores();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFornecedor = { nomeEmpresa, cnpj, endereco, telefone, email };

    if (editingIndex !== null) {
      const updatedFornecedores = [...fornecedores];
      updatedFornecedores[editingIndex] = newFornecedor;
      setFornecedores(updatedFornecedores);
      setEditingIndex(null);
    } else {
      setFornecedores([...fornecedores, newFornecedor]);
    }

    // Armazenar no localStorage
    localStorage.setItem("fornecedores", JSON.stringify(fornecedores));

    // Resetar campos do formulário
    setNomeEmpresa("");
    setCnpj("");
    setEndereco("");
    setTelefone("");
    setEmail("");
  };

  const handleEdit = (index) => {
    const fornecedor = fornecedores[index];
    setNomeEmpresa(fornecedor.nomeEmpresa);
    setCnpj(fornecedor.cnpj);
    setEndereco(fornecedor.endereco);
    setTelefone(fornecedor.telefone);
    setEmail(fornecedor.email);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedFornecedores = fornecedores.filter((_, i) => i !== index);
    setFornecedores(updatedFornecedores);
    // Atualizar o localStorage
    localStorage.setItem("fornecedores", JSON.stringify(updatedFornecedores));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Cadastro de Fornecedor</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nomeEmpresa" className="form-label">
                Nome da Empresa
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeEmpresa"
                value={nomeEmpresa}
                onChange={(e) => setNomeEmpresa(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">
                CNPJ
              </label>
              <input
                type="text"
                className="form-control"
                id="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Endereço
              </label>
              <input
                type="text"
                className="form-control"
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
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
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {editingIndex !== null ? "Atualizar" : "Cadastrar"}
            </button>
          </form>

          <h6 className="mt-4">Lista de Fornecedores</h6>
          <ul className="list-group">
            {fornecedores.map((fornecedor, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {fornecedor.nomeEmpresa}
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

export default Fornecedor;
