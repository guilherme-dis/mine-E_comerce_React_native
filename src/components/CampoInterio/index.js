import React from "react";
import styles from "./estilos";
import { TextInput } from "react-native";
export default function CampoInteiro({ valor, estilos, acao }) {
  const numeroEmTexto = String(valor);
  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/);
    if (!verificaInteiro) return;
    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, "$2");
    acaoRetorno(removeZeroEsquerda);
  };
  return (
    <TextInput
      style={[styles.campo,estilos]}
      keyboardType="numeric"
      selectTextOnFocus
      value={numeroEmTexto}
      onChangeText={(novoValor) => {
        atualiza(novoValor, acao);
      }}
    />
  );
}
