import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import Botao from '../Botao'
export default function StatusCarrinho({ total }) {
  return (
    <View style={styles.conteudo}>
      <View Style={styles.total}>
        <Text style={styles.descricao}>Total do Carrinho:</Text>
        <Text style={styles.valor}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </Text>
      </View>
      <View Style={styles.botao} >
          <Botao valor='Concluir pedido' invertido/>
      </View>
    </View>
  );
}
