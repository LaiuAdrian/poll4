import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { Header,Col, Container,Footer,FooterTab,Button,Badge,Icon,Content, Row, Grid } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


const Home=({navigation}) => {
  
    return(
        <Container>
               <Header style={{backgroundColor:'#1da9f7', shadowColor: 'transparent'}}> 
                    <Col >
                        <Badge style={{backgroundColor:'transparent',width:25,height:25,position:'absolute',zIndex:1,left:15}} ><Text style={{color:'#062776',textAlign:'center',fontWeight:'bold'}}>4</Text></Badge>
                        <Image  style={{width:57,height:63}} source={require('../assets/avatar4.png')} />
                    </Col>
                    <Col style={{width:200,marginTop:20}}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>  Rose Porcupine 23</Text>
                    </Col>
                    <Col  style={{marginTop:20}}>
                        <View style={{backgroundColor:'white',borderRadius:24, flexDirection: 'row',height:30,padding:3,}}>
                        <Image  style={{width:25,height:25,marginRight:4}} source={require('../assets/coin-01.png')} />
                        <Text style={{marginTop:3}}>99999</Text>
                     </View>
                 </Col>          
              </Header>
        <ScrollView>    
            <Text style={styles.titlu}>Which fruit is more appealing?</Text>
            <Grid style={{marginTop:25}} > 
                <Row styles={{ marginBottom: 2}}>
                    <Col >
                         <View style={styles.center} >
                            <TouchableOpacity
                             onPress={()=>{navigation.navigate('q1',{ Banana:1,Strawbery:0,BlueBerry:0,Orange:0 })}}
                            >
                                <Image  style={styles.img_asnwer} source={require('../assets/Banana.jpg')} />
                                <Text style={{color:'#062776'}} >Banana</Text>
                            </TouchableOpacity>                 
                            </View>
                            <View style={styles.center} >
                            <TouchableOpacity 
                              onPress={()=>{navigation.navigate('q1',{ Banana:0,Strawbery:0,BlueBerry:1,Orange:0 })}}
                            >
                                <Image  style={styles.img_asnwer} source={require('../assets/Blueberries.jpg')} />
                                    <Text style={{color:'#062776'}} >Blueberries</Text>
                                </TouchableOpacity>                 
                            </View>
                      </Col>   
                      <Col>
                            <View style={styles.center} >
                                    <TouchableOpacity 
                                      onPress={()=>{navigation.navigate('q1',{ Banana:0,Strawbery:1,BlueBerry:0,Orange:0 })}}
                                    >
                                        <Image  style={styles.img_asnwer} source={require('../assets/Strawberry.jpg')} />
                                        <Text style={{color:'#062776'}} >Strawberry</Text>
                                    </TouchableOpacity>                 
                                </View>
                                <View style={styles.center} >
                                   <TouchableOpacity 
                                      onPress={()=>{navigation.navigate('q1',{ Banana:0,Strawbery:0,BlueBerry:0,Orange:1 })}}
                                   >
                                        <Image  style={styles.img_asnwer} source={require('../assets/Orange.jpg')} />
                                        <Text style={{color:'#062776'}} >Orange</Text>
                                    </TouchableOpacity>                 
                                </View>
                      </Col>        
                </Row>
            </Grid>

            <View style={{justifyContent: 'center', alignItems: 'center',marginTop:15,marginBottom:50,marginVertical:25
}}>
                <TouchableOpacity   style={{borderBottomColor:'red',  borderBottomWidth: 4,paddingBottom:5}} >     
                      <Text 
            style={{
                borderBottomColor:'#FCE927', 
                borderBottomWidth: 4,
                fontSize:25,
                textAlign:'center',
                marginTop:25,
                color:'#062776',
                fontWeight:'bold'}} 
                >  NEXT QUESTION <Image  style={{width:30,height:30}}
                  source={require('../assets/next.png')} />
                    </Text>
                </TouchableOpacity>    
            </View>           
       </ScrollView>
        <Footer style={{tabActiveBgColor:'red' }}>
            <FooterTab  style={{backgroundColor:'white',}}>
                <Button active badge vertical >
                    <Badge style={{backgroundColor:'blue',width:25,height:25,position:'absolute',left:45,bottom:20}} ><Text style={{color:'white',textAlign:'center'}}>5</Text></Badge>
                    <Image style={styles.badge_img} source={require('../assets/pollsIcon.png')} />
                    <Text style={{color:'#062776'}} >Polls</Text>
                </Button>
                <Button vertical>
                    <Image style={styles.badge_img} source={require('../assets/profileIcon.png')} />
                    <Text style={{color:'#062776'}} >Profile</Text>
                </Button>
                <Button  badge vertical>
                    <Image style={styles.badge_img} source={require('../assets/storeIcon.png')} />
                    <Text style={{color:'#062776'}} >Store</Text>
                </Button>
                <Button vertical>
                    <Image  style={styles.badge_img} source={require('../assets/settingsIcon.png')} />
                    <Text style={{color:'#062776'}} >Settings</Text>
                </Button>
            </FooterTab>
        </Footer>
     </Container>
    );
};
export default Home;

const styles = StyleSheet.create({
    badge_img: {
        width:40,
        height:40,
        marginRight:5
    },
    img_asnwer:{
        width:175,
        height:175
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center',
        margin:15
    },
    titlu:{
        fontSize:25,
        textAlign:'center',
        marginTop:25,
        color:'#062776',
        fontWeight:'bold'
    }
  });
  