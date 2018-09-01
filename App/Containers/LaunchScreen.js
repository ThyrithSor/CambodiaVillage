import React, { Component } from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  ListView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  YellowBox
} from "react-native";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "Warning: isMounted(...) is deprecated"
]);

export default class LaunchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let header = null;
    return { header };
  };

  constructor(props) {
    super(props);

    const { navigate } = this.props.navigation;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: "Explore",
          color: "#27ae60",
          icon: Images.launchIcons.explore,
          onPress: () => {
            navigate("ExploreScreen");
          }
        },
        {
          title: "My Village",
          color: "#f39c12",
          icon: Images.launchIcons.myVillage,
          onPress: () => {
            navigate("MyVillageScreen");
          }
        },
        {
          title: "Contribute",
          color: "#e74c3c",
          icon: Images.launchIcons.contribute,
          onPress: () => {
            navigate("ContributeScreen");
          }
        },
        {
          title: "Search",
          color: "#9b59b6",
          icon: Images.launchIcons.search,
          onPress: () => {
            navigate("SearchScreen");
          }
        },
        {
          title: "Bookmark",
          color: "#3498db",
          icon: Images.launchIcons.bookmark,
          onPress: () => {
            navigate("BookmarkScreen");
          }
        },
        {
          title: "Settings",
          color: "#7f8c8d",
          icon: Images.launchIcons.setting,
          onPress: () => {
            navigate("SettingScreen");
          }
        },
        {
          title: "Support",
          color: "#badc58",
          icon: Images.launchIcons.support,
          onPress: () => {
            navigate("SupportScreen");
          }
        }
      ])
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundHighlightImage}
          resizeMode="contain"
        />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <ListView
              contentContainerStyle={styles.list}
              dataSource={this.state.dataSource}
              renderRow={rowData => {
                if (Platform.OS === "android") {
                  return (
                    <TouchableNativeFeedback
                      onPress={rowData.onPress.bind(this)}
                    >
                      <View
                        style={[
                          styles.item,
                          { backgroundColor: rowData.color }
                        ]}
                      >
                        <Image
                          resizeMode="cover"
                          style={styles.mainButtonIcon}
                          source={rowData.icon}
                        />
                        <Text style={styles.iconLabel}>{rowData.title}</Text>
                      </View>
                    </TouchableNativeFeedback>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      style={[styles.item, { backgroundColor: rowData.color }]}
                      onPress={rowData.onPress.bind(this)}
                    >
                      <View style={{ alignItems: "center" }}>
                        <Image
                          resizeMode="contain"
                          style={styles.mainButtonIcon}
                          source={rowData.icon}
                        />
                        <Text style={styles.iconLabel}>{rowData.title}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
