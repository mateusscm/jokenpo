import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
// Importing components
import Header from "../components/Header/Header";
import Icone from "../components/Icone/Icone";

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  actionPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  palco: {
    alignItems: "center",
    margin: 10
  },
  resultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: "",
      escolhaPc: "",
      resultado: ""
    };
  }

  jokenpo(escolhaUsuario) {
    // gera numero aleatorio de 0 a 2
    let rand = Math.floor(Math.random() * 3);
    let escolhaPc = "";

    switch (rand) {
      case 0:
        escolhaPc = "pedra";
        break;
      case 1:
        escolhaPc = "papel";
        break;
      case 2:
        escolhaPc = "tesoura";
        break;
    }

    var resultado = "";
    if (escolhaPc === "pedra") {
      if (escolhaUsuario === "pedra") {
        resultado = "Empate";
      } else if (escolhaUsuario === "papel") {
        resultado = "Você ganhou!";
      } else {
        resultado = "Você perdeu!";
      }
    } else if (escolhaPc === "papel") {
      if (escolhaUsuario === "papel") {
        resultado = "Empate";
      } else if (escolhaUsuario === "pedra") {
        resultado = "Você perdeu!";
      } else {
        resultado = "Você ganhou!";
      }
    } else {
      if (escolhaUsuario === "tesoura") {
        resultado = "Empate";
      } else if (escolhaUsuario === "pedra") {
        resultado = "Você ganhou!";
      } else {
        resultado = "Você perdeu!";
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaPc: escolhaPc,
      resultado: resultado
    });
  }

  render() {
    return (
      <View>
        <Header />
        <View style={styles.actionPanel}>
          <View style={styles.btnEscolha}>
            <Button
              title="Pedra"
              onPress={() => {
                this.jokenpo("pedra");
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="Papel"
              onPress={() => {
                this.jokenpo("papel");
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="Tesoura"
              onPress={() => {
                this.jokenpo("tesoura");
              }}
            />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.resultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaPc} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Usuário" />
        </View>
      </View>
    );
  }
}

export default App;
