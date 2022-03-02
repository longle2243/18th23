import {
  StyleSheet
} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'yellow',
  },
  // box: {
  //   padding: 5,
  // },
  // inner: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  hinh: {
    width: 155,
    height: 195,
    resizeMode: 'cover',
    // borderRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  khungngoai: {
    padding: 5,
    // backgroundColor: 'azure', 
  },
  khungsanpham: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    // borderWidth: 1,
    // backgroundColor: 'yellow',
  },
  text: {
    fontSize: 13,
    color:'grey',
  },
  gia:{
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color:'#00BFFF',
  },
  khungchuatext: {
    //  backgroundColor: 'azure',
     backgroundColor: 'white',
    //  borderBottomLeftRadius: 5,
    //  borderBottomRightRadius: 5,
    borderRadius: 5,
    //  shadowColor: 'grey',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 1,
    // shadowRadius: 6,  
    // elevation: 5,
    padding: 10,
    shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
  },
  viewimage:{
  // shadowColor: 'grey',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 1,
  //   shadowRadius: 6,  
  //   elevation: 5,
  },
});