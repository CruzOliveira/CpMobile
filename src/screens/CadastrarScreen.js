import React from 'react'
import {ScrollView, View, Text, TouchableOpacity, TextInput,  StyleSheet, ImageBackground, Image} from 'react-native';
import {RadioButton, Checkbox } from 'react-native-paper'

const CadastrarScreen = ({navigation}) =>{
    const [value, setValue] = React.useState('first');
    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [username, setUsername] = React.useState();
    const [nome, setNome] = React.useState();
    const [senha, setSenha] = React.useState();


    return(
        <View >
            <ImageBackground 
             source={require('../img/Fundo.png')}
             style={styles.backGround}>
                 <ScrollView>
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
                    <View style={styles.caixas}>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={styles.caixaS}>
                            <RadioButton value="first" />
                            <Text style={styles.textwhits}>Masculino</Text>
                        </View>
                        <View style={styles.caixaS}>
                            <RadioButton value="second" />
                            <Text style={styles.textwhits}>Feminino</Text>
                        </View>
                        </RadioButton.Group>
                        
                    </View>
                    <View style={styles.termos}>
                        <Checkbox
                        style={styles.Checkbox}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setChecked(!checked);
                        }}
                        /><Text style={styles.textTermo}>Li e concordo com os termos de uso</Text>
                    </View>
                    <View style={styles.termos}>
                        <Checkbox
                        style={styles.Checkbox}
                        status={checked2 ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setChecked2(!checked2);
                        }}
                        /><Text style={styles.textTermo}>Aceito receber e-mail</Text>
                    </View>
                    <View style={styles.buttonS}>
                        <TouchableOpacity 
                        style={styles.button}>
                        <Text style={styles.titleBt}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.replace('Login')}>
                    <Text style={styles.titleBt}>Voltar</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
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
        marginBottom:40,
        width: 200,
        height: 54.32,
    },
    title:{
        color:'#F9F9F9',
        textAlign:'center',
        marginBottom: 40,
        fontSize: 32,
    },
    inputArea:{
        flexDirection:'row',
        width:'90%',
        marginHorizontal:20,
        marginBottom: 20,
        backgroundColor:'#303030',
        height:70,
        alignItems:'center',
    },
    input:{
        width:'85%',
        height:50,
        color:'#C4C4C4',
        padding: 10,
        fontSize: 20,
    },
    button:{
        marginBottom:15,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 20,
        backgroundColor:'#FF0057',
        padding: 20,
        borderRadius: 5,
    },
    buttonS:{
        marginTop:30,
    },
    
    textwhit:{
        marginHorizontal: 20,
        fontSize: 20,
        color:'#C4C4C4',
        marginBottom:20,
        marginTop:20,
    },
    textwhits:{
        fontSize: 23,
        color:'#C4C4C4',
        marginTop:4,
        marginBottom:20,
         
    },
    caixas:{
    flexDirection:'column',
    marginHorizontal: 20,
    marginLeft:10,
    marginBottom:30,
    },
    caixaS:{
        flexDirection:'row',
        marginBottom:9,
    },
    termos:{
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:20,
    },
    textTermo:{
        fontSize:20,
        color:'#C4C4C4',
        marginTop: 6,
    }

});