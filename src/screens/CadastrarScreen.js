import React from 'react'
import { View, Text, TouchableOpacity, TextInput,  StyleSheet, ImageBackground, Image} from 'react-native';
import {RadioButton } from 'react-native-paper'

const CadastrarScreen = ({navigation}) =>{
    const [value, setValue] = React.useState('first');



    return(
        <View >
            <ImageBackground 
             source={require('../img/Fundo.png')}
             style={styles.backGround}>
                <Image source={require('../img/Logo.png')}
                style={styles.logo}/>
                <Text style={styles.title}>Cadastrar</Text>

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
                    placeholder='Nome completo'
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
                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    placeholder='Confirmar senha'
                    placeholderTextColor='#C4C4C4'
                    />
                </View>
                <Text style={styles.textwhit}>Sexo:</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                 <View>
                     <Text style={styles.textwhits}>First</Text>
                     <RadioButton value="first" />
                 </View>
                 <View>
                     <Text>Second</Text>
                     <RadioButton value="second" />
                 </View>
                </RadioButton.Group>
                
                <View style={styles.buttonS}>
                 <TouchableOpacity>
                    <Text style={styles.buttonSTitle}>Cadastrar</Text>
                 </TouchableOpacity>
                 <TouchableOpacity 
                    style={styles.button2}
                    onPress={ () => navigation.replace('Login')}>
                    <Text style={styles.buttonSTitle}>Voltar</Text>
                 </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
)}; 
export default CadastrarScreen;
const styles = StyleSheet.create({
    cadastrar:{
        flex: 1,
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
    title:{
        color:'#F9F9F9',
        textAlign:'center',
        marginBottom: 50,
        fontSize: 32,
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
    },
    textwhit:{
        fontSize: 20,
        color:'#C4C4C4',       
    },
    textwhits:{
        fontSize: 20,
        color:'#C4C4C4',     
         
    }
});