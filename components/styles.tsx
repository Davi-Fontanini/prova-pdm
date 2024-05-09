import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#270343',

    },
    
    content:{
        width:"50%",
        height: "40%",
        marginTop: 400,
        // borderBottomRadius: 90,  
        borderTopEndRadius: 90,
        backgroundColor: "black",
        // shadowOpacity: "10%",
    },

    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
  