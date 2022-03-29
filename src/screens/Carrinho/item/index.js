import React, { useState } from "react";
import { Text, View} from "react-native";
import CampoInteiro from "../../../components/CampoInterio";
import styles from "./style";
import Botao from "../../../components/Botao";
export default function Item({ nome, preco, descricao,quantidade:quantidadeInicial }) {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const [total, setTotal] = useState(preco*quantidadeInicial);
  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };
  const calculaTotal = (quantidade) => {
    setTotal(quantidade * preco);
  };
  return (
    <>
      <View style={styles.informacao}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>

      <View style={styles.carrinho}>
        <View>
          <View style={styles.valor}>
            <Text style={styles.quantidade}>Quantidade:</Text>
            <CampoInteiro
              estilos={styles.quantidade}
              valor={quantidade}
              acao={atualizaQuantidadeTotal}
            />
          </View>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Preço:</Text>
            <Text style={styles.preco}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </Text>
          </View>
        </View>
        <Botao valor="Remover do Carrinho" acao={() => {}} />
      </View>

      <View style={styles.divisor} />
    </>
  );
}
