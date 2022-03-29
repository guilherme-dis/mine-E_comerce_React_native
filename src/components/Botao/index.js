import React from 'react';
import { TouchableOpacity,Text} from 'react-native';
import styles from './styles'
export default function Botao({pequeno=false,invertido=false,valor,acao, estilos}){
    const estilosPadrao = styles(pequeno,invertido);


    return <TouchableOpacity style={[estilosPadrao.botao,estilos]} onPress={acao}>
        <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
}