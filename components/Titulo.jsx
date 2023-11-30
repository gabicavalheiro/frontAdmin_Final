import Link from "next/link";

export default function Titulo() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
      <Link className="navbar-brand text-black" href="/">
            <img src="./logo.png" alt="Logo"
              width="300" height="48" className="float-start d-inline-block align-text-top" />
          </Link>
          
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" href="/listagem">Produtos</Link>
          </li>
  
          <li className="nav-item">
            <Link className="nav-link" href="/avaliacoes">Avaliações</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}