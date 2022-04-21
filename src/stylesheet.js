import {
  StyleSheet
} from 'react-native';
export const styles = StyleSheet.create({
  khungngoai: {
    padding: 5,
    backgroundColor: 'azure', 
  },
  khungsanpham: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    padding:5,
  },
  khungsanpham2: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8,
    shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
  },
  khungtext:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hinh: {
    width: 155,
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color:'grey',
    
  },
  gia:{
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color:'#00BFFF',
  },
});