import { StyleSheet,Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
 const screenWidth = dimensions.width;
    const screenHeight = dimensions.height;

const styles = StyleSheet.create({

      container: {
    flex: 1,
    marginTop: 0,   
    width:'90%', 
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 25,
    lineHeight:30,
    fontFamily:'JosefinSans-Regular',
    color:'black',
  },
    list: {
        flex: 0.5,
        fontSize: 16,
        fontFamily:'JosefinSans-Regular',
        color:'black',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        color:'black',
    },
    listTitle: {
        fontSize: 22,
        fontFamily:'JosefinSans-Regular',
        color:'black',
    },
    
});


export { styles }
