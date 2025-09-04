import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  
  // Pantalla
  screenText: {
    fontSize: 38,
    color: Colors.result,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10,
    includeFontPadding: false, 

  },

  // Botones
  btnBlue: {
    width: 72,
    height: 72,
    backgroundColor: Colors.blue,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  btnGray: {
    width: 72,
    height: 72,
    backgroundColor: Colors.btnGray,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  btnLight: {
    width: 72,
    height: 72,
    backgroundColor: Colors.white,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  btnDark: {
    width: 72,
    height: 72,
    backgroundColor: Colors.btnDark,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  smallTextLight: {
    fontSize: 30,
    color: Colors.white,
  },
  smallTextDark: {
    fontSize: 30,
    color: Colors.black,
  },

  // Filas de botones
  row: {
    maxWidth: '100%',
    flexDirection: "row",
    justifyContent: 'center', 
    marginBottom: 10
  },

  viewBottom: {
    position: 'absolute', 
    bottom: 50, 
  },
  screenFirstNumber: {
    fontSize: 80,
    color: Colors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: Colors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },

});
