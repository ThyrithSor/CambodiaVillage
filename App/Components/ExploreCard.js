import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {
  Platform,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight
} from "react-native";
import styles from "./Styles/ExploreCardStyle";

export default class ExploreCard extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    if (Platform.OS == "android") {
      return (
        <TouchableNativeFeedback onPress={this.props.onPress.bind(this)}>
          <View style={styles.container}>
            <Text>{this.props.title}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    } else {
      return (
        <TouchableHighlight
          style={styles.container}
          underlayColor="white"
          onPress={this.props.onPress.bind(this)}
        >
          <Text>{this.props.title}</Text>
        </TouchableHighlight>
      );
    }
  }
}
