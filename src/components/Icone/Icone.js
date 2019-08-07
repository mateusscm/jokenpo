import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Importing images
import pedra from "../../assets/imgs/pedra.png";
import papel from "../../assets/imgs/papel.png";
import tesoura from "../../assets/imgs/tesoura.png";

const styles = StyleSheet.create({
  icone: {
    alignItems: "center",
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});

class Icone extends Component {
  render() {
    if (this.props.escolha === "pedra") {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={pedra} />
        </View>
      );
    } else if (this.props.escolha === "papel") {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={papel} />
        </View>
      );
    } else if (this.props.escolha === "tesoura") {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={tesoura} />
        </View>
      );
    } else {
      return false;
    }

    return <View />;
  }
}

export default Icone;
