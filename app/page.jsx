'use client'
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import styles from './page.module.css'

export default function Home() {
  const [filmes, setFilmes] = useState([])
  const [geral, setGeral] = useState({})

  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  useEffect( () => {
    async function getDadosGrafico() {
      const response = await fetch("http://localhost:3004/avaliacoes/graph")
      const dados = await response.json()
      setFilmes(dados)
    }
    getDadosGrafico()

    async function getDadosGerais() {
      const response = await fetch("http://localhost:3004/dados_gerais")
      const dados = await response.json()
      setGeral(dados)
    }
    getDadosGerais()
  }, [])

  const dados = [
    ["Estrelas", "Avaliação dos Clientes", "Meta do CineClube"],
    ["1", 0, 5],
    ["2", 0, 15],
    ["3", 0, 10],
    ["4", 0, 30],
    ["5", 0, 40],
  ];

  let somaAvaliacoes = 0
  filmes.forEach(filme => {
    somaAvaliacoes += filme.num
  })

  filmes.forEach(filme => {
    dados[filme.estrelas][1] = (filme.num / somaAvaliacoes) * 100
  })

  return (
   
    <div className="container" >
      <h2 className="mt-4 mb-4">Visão Geral do Sistema</h2>

      <span className="btn btn-outline-primary btn-md">
        <p className="badge bg-danger">{geral.clientes}</p>
        <p>Nº de Clientes Cadastrados</p>
      </span>
      <span className="btn btn-outline-primary btn-md mx-2">
        <p className="badge bg-danger">{geral.roupas}</p>
        <p>Nº de Produtos Cadastrados</p>
      </span>
      <span className="btn btn-outline-primary btn-md me-2">
        <p className="badge bg-danger">
          R$ {geral.media && Number(geral.media.preco).toLocaleString("pt-br", {minimumFractionDigits: 2})}
        </p>
        <p>Preço Médio dos Produtos</p>
      </span>
      <span className="btn btn-outline-primary btn-md">
        <p className="badge bg-danger">{geral.avaliacoes}</p>
        <p>Nº Total de Avaliações</p>
      </span>
      <span className="btn btn-outline-primary btn-md">
        <p className="badge bg-danger">{geral.avaliacoes_dia}</p>
        <p>Nº de Avaliações do Dia</p>
      </span>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={dados}
        options={options}
      />

    </div>
   
  )
}
