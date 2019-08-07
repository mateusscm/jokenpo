import React, { Component } from "react";
import { View, Text } from "react-native";

// const styles = StyleSheet.create({

// });

class App3 extends Component {
  render() {
    const { frase1 } = this.props;

    return (
      <View>
        <Text>{frase1 ? "A vida é uma bosta" : "Bola pra frente"}</Text>
      </View>
    );
  }
}

export default App3;
