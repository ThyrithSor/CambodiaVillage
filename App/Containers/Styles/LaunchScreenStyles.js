import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: "contain"
  },
  centered: {
    alignItems: "center"
  },
  backgroundHighlightImage: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    margin: 10,
    width: 120,
    aspectRatio: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  mainButtonIcon: {
    width: 70,
    height: 70,
    margin: 5
  },
  iconLabel: {
    fontWeight: 'bold',
  }
});
