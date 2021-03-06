import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import Item from "./item";
import TelaPadrao from "../../components/TelaPadrao"
import styles from "../../styles";
const servicos = [
  {
    id: 1,
    nome: "Banho e tosa",
    descricao: "Um belo e bom banho e tosa para o seu pet",
    preco: 49.9,
  },
  {
    id: 2,
    nome: "Vacina v4",
    descricao: "Uma dose da vacina v4",
    preco: 29.9,
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    descricao: "Uma dose da vacina antirrábica",
    preco: 29.9,
  },
  {
    id: 4,
    nome: "Petiscos",
    descricao: "Uma porção de petiscos pedigree para o seu pet",
    preco: 9.9,
  },
];

export default function Servicos() {
  return (
    <>
        <FlatList
          data={servicos}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
     </>
  );
}
