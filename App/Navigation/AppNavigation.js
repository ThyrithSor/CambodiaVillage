import { StackNavigator } from "react-navigation";
import SearchScreen from "../Containers/SearchScreen";
import ContributeScreen from "../Containers/ContributeScreen";
import MyVillageScreen from "../Containers/MyVillageScreen";
import ExploreScreen from "../Containers/ExploreScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import BookmarkScreen from "../Containers/BookmarkScreen";
import SettingSCreen from "../Containers/SettingScreen";
import SupportScreen from "../Containers/SupportScreen";


import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    SupportScreen: { screen: SupportScreen },
    SettingScreen: { screen: SettingSCreen },
    BookmarkScreen: { screen: BookmarkScreen },
    SearchScreen: { screen: SearchScreen },
    ContributeScreen: { screen: ContributeScreen },
    MyVillageScreen: { screen: MyVillageScreen },
    ExploreScreen: { screen: ExploreScreen },
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: "float",
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
