import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({  
    image:{
      height: Dimensions.get('window').height,
      width: '100%', 
    },
  
    titles:{
      marginTop: '30%', 
      alignItems: 'center',
    },
  
    title:{
      fontSize: 40,
      fontWeight: "500",
    },
  
    subTitle: {
      fontSize: 16,
      color: '#5c5e62'
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%', 
    },

  });

  export default styles;