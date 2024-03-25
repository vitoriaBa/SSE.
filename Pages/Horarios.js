import {Text,View, SafeAreaView, StyleSheet,Image,TouchableOpacity } from 'react-native';
 

 export default function Horarios(){
   return(
    <SafeAreaView style={styles.fundo}>
    <View style={styles.container}>
    <View style={styles.containerusuario}>




   
    <Text style={styles.txt}>Horarios</Text>
    

    </View>
    </View>
    </SafeAreaView>
   );
 }


 const styles = StyleSheet.create({
  fundo: {
   
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#174738',
    padding: 0,
    margin:0,
    position:'absolute',
 
  },
  container:{
    backgroundColor:'#FFFFFF',
    width:380,
    height:800,
    borderRadius:50,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    padding: 0,
   // position:'absolute',
    margin:0,
 
  },
  containerusuario:{
    width:360,
    height:168,
    margin:0,
    padding:0,
    borderRadius:30,
    justifyContent: 'center',
    alignItems:'center',
    position:'absolute',
    backgroundColor:'#174738',

  },
  img:{
    width:50,
    marginHorizontal:120,
    height:50,
  },
  usuarioimg:{
    flexDirection:'row',

  }


} );