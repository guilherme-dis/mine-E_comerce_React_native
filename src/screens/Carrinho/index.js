import React from "react";
import { FlatList } from "react-native";
import Item from "./item";
import TelaPadrao from "../../components/TelaPadrao";
import styles from "../../styles";
import StatusCarrinho from "../../components/StatusCarrinho"

const servicos = [
  {
    id: 1,
    nome: "Banho es tosa",
    descricao: "Um belo e bom banho e tosa para o seu pet",
    quantidade: 1,
    preco: 49.9,
  },
  {
    id: 2,
    nome: "Vacina v4",
    descricao: "Uma dose da vacina v4",
    preco: 29.9,
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    descricao: "Uma dose da vacina antirrábica",
    preco: 29.9,
    quantidade: 0,
  },
  {
    id: 4,
    nome: "Petiscos",
    descricao: "Uma porção de petiscos pedigree para o seu pet",
    preco: 9.9,
    quantidade: 4,
  },
];

export default function Carrinho() {
  const total= servicos.reduce((soma,{preco,quantidade})=>soma+(preco*quantidade),0)
  return (
    <>
      <StatusCarrinho total={total}/>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
