import React from 'react'
import { View, Text, TouchableOpacity, TextInput,  StyleSheet, ImageBackground, Image} from 'react-native';
import {RadioButton} from 'react-native-paper'

const CadastrarScreen = ({navigation}) =>{
    const [masculino, setMasculino] = useState(false);
    const [feminino, setFeminino] = useState(false);

    return(
        <View>
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
                <Text>Sexo:</Text>
                <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}/>
                <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}/>


                <TouchableOpacity 
                style={styles.button}>
                    <Text style={styles.titleBt}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.replace('Login')}>
                    <Text style={styles.titleBt}>Voltar</Text>
                </TouchableOpacity>

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
});