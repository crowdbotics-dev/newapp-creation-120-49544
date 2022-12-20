const styles = StyleSheet.create({
  "hr": {
    "marginTop": 30,
    "marginBottom": 20,
    "borderBottomColor": "black",
    "borderBottomWidth": 1
  },
  "container": {
    "flex": 1,
    "height": 100,
    "padding": 13
  },
  "text": {
    "color": "black",
    "fontSize": 20
  },
  "buttonPressed": {
    "backgroundColor": "aquamarine"
  },
  "buttonNotPressed": {
    "backgroundColor": "blue"
  },
  "button": {
    "borderRadius": 4,
    "padding": 15,
    "marginTop": 10
  },
  "buttonText": {
    "color": "white",
    "textAlign": "center",
    "fontSize": 16
  }
});
import { StyleSheet } from "react-native";
export const globalOptions = {
  "name": "newapp-creation-120-49544",
  "url": "https://newapp-creation-120-49544.botics.co",
  "api": "https://newapp-creation-120-49544.botics.co/api/v1"
};
export const modulesOptions = {
  "@modules/app-menu": {
    "title": "App Menu",
    "copy": "Routes available",
    "styles": styles
  }
};