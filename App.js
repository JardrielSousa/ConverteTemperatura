import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { grey } from 'ansi-colors';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resul: '' ,
      numeroDigitado : '' };
  }
  celcius=(numeroDigitado)=>{
    this.setState({
      numeroDigitado : numeroDigitado});
      var c = numeroDigitado;
      if(numeroDigitado != ''){
        this.state.resul = 9 / 5 * parseFloat(c) + 32 + "F°";
      }else{
        this.state.resul = ' ';
      }
      
    

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Digite a Temperatura em C°</Text>
          <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder="Digite um número" 
          onChangeText={this.celcius}
          value={this.state.numeroDigitado}
        />
        <Text style={styles.resul}>
          {this.state.resul}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20
  },
  input:{
    height:40,
    width:200, 
    borderColor: 'gray', 
    borderWidth: 1 ,
    padding:10,
    margin:10
  },
  resul:{
    color:'#99d9f4',
    fontSize:35
  }
});
