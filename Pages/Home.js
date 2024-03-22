import {Text,View, SafeAreaView, StyleSheet,Image,TouchableOpacity } from 'react-native';
 

 export default function Home(){
   return(
    <SafeAreaView style={styles.fundo}>
    <View style={styles.container}>
    <View style={styles.containerusuario}>


   <View style={styles.usuarioimg}> 

   <Image source={require('../assets/Logo.png')}  style={styles.img}></Image>


       <TouchableOpacity>
        <Image source={require('../assets/Logo.png')} style={styles.img}></Image>
       </TouchableOpacity>


   </View>
   
    <Text style={styles.txt}>Ola</Text>
    
    <Text style={styles.txt}>Nome Usuario</Text>
    <Text style={styles.txt}>Banco</Text>
    

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