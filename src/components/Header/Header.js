import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import topo from "../../assets/imgs/jokenpo.png";

const styles = StyleSheet.create({
  image: {
    width: "100%"
  }
});

class Header extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} resizeMode="stretch" source={topo} />
      </View>
    );
  }
}

export default Header;
