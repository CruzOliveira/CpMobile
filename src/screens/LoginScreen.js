import React from 'react';
import { View, Text, TouchableOpacity, TextInput,  StyleSheet, ImageBackground, Image} from 'react-native';

const LoginScreen = ({navigation}) =>{ 
    return(
    <View style={styles.login}>
        <ImageBackground 
        source={require('../img/Fundo.png')}
        style={styles.backGround}>
            <Image source={require('../img/Logo.png')}
            style={styles.logo}/>
            <Text style={styles.title}>Entrar</Text>
            <View style={styles.inputArea}>
                <TextInput
                style={styles.input}
                placeholder='Username'
                placeholderTextColor='#C4C4C4'
                />
            </View>    
            <View style={styles.inputArea}>    
                <TextInput
                style={styles.input}
                placeholder='Senha'
                placeholderTextColor='#C4C4C4' 
                />
            </View>
            <TouchableOpacity 
            style={styles.button}>
            <Text style={styles.titleBt}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.buttonS}>
                <TouchableOpacity
                onPress={ () => navigation.replace('Cadastrar')}
                >
                    <Text style={styles.buttonSTitle}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button2}>
                    <Text style={styles.buttonSTitle}>Esqueceu a senha</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>     
    </View>

)};
export default LoginScreen

const styles = StyleSheet.create({
login:{
    flex: 1
},

title:{
    color:'#F9F9F9',
    textAlign:'center',
    marginBottom: 50,
    fontSize: 32,
},

button:{
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 20,
    backgroundColor:'#FF0057',
    padding: 20,
    borderRadius: 5,
},

titleBt:{
    color:'#F9F9F9'
},

backGround:{
    width: '100%',
    height: '100%',
},

logo:{
    marginTop:200,
    marginHorizontal:115,
    marginBottom:50,
    width: 200,
    height: 54.32,
},
inputArea:{
    flexDirection:'row',
    width:'90%',
    marginHorizontal:20,
    marginBottom: 25,
    backgroundColor:'#303030',
    height:50,
    alignItems:'center',
},
input:{
    width:'85%',
    height:50,
    color:'#C4C4C4',
    padding: 8,
    fontSize: 18,

},
buttonS:{
    flexDirection:'row',
    marginTop:30,
    marginHorizontal:20,
},

buttonSTitle:{
    color:'#C4C4C4',
    fontSize:18,
},
button2:{
    marginLeft: 190,
}

});
