import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-5 py-3">
      <div className="container text-center">
        <h5>Contato</h5>
        <p>
          <strong>Telefone:</strong> (11) 1234-5678
        </p>
        <p>
          <strong>E-mail:</strong> eletronico@ruiz.com
        </p>
        <p>
          <strong>Endereço:</strong> Rua dev, 123 - Jau, Estado SP
        </p>
        <div className="social-links">
          <a href="#" className="text-white me-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white me-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <small>
          © {new Date().getFullYear()} ELTRÔNICOS RUIZ. Todos os direitos
          reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
