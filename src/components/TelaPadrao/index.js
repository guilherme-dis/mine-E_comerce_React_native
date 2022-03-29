import React from "react";
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from "react-native";
import styles,{cores} from '../../styles'

export default function TelaPadrao({ children }) {
  return (
    <SafeAreaView style={styles.preencher}>
      <StatusBar barStyle="light-content" backgroundColor={cores.roxo} />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
