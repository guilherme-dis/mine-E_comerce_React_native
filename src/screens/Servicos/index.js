import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

const servicos = [
  {
    id: 1,
    nome: "Banho e tosa",
    descricao: "Um belo e bom banho e tosa para o seu pet",
    preco: 49.90,
  },
  {
    id: 2,
    nome: "Vacina v4",
    descricao: "Uma dose da vacina v4",
    preco: 29.90,
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    descricao: "Uma dose da vacina antirrábica",
    preco: 29.90,
  },
];
export default function Servicos() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text>Serviços!</Text>
    </SafeAreaView>
  );
}
