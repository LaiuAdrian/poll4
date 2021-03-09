import React  from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { Container,Header,Col,Badge,Footer,FooterTab,Button } from 'native-base';

const q1=({route}) => {

    const { Banana,Strawbery,BlueBerry,Orange } = route.params;
    console.log(Banana,Strawbery,BlueBerry,Orange)
    const Fruits =Banana+Strawbery+BlueBerry+Orange;
    const XFrutis=100 /Fruits;
    const  XBanana= XFrutis * Banana;
    const  XStrawbery= XFrutis * Strawbery;
    const  XBlueBerry= XFrutis * BlueBerry;
    const  XOrange= XFrutis * Orange;

   const CBanana=()=>{
    if(Banana ===1){
        return <Text>
          Banana-Your Answer
             </Text>
      }
    else {
          return<Text>Banana</Text>
      }
   }
  
   const CStrawbery=()=>{
    if(Strawbery ===1){
        return <Text>
          Strawbery-Your Answer
             </Text>
      }
    else {
          return<Text>Strawbery</Text>
      }
   }
  
   const CBlueBerry=()=>{
    if(BlueBerry ===1){
        return <Text>
        BlueBerry-Your Answer
             </Text>
      }
    else {
          return<Text>BlueBerry</Text>
      }
   }
  
   const COrange=()=>{
    if(Orange ===1){
        return <Text>
         Orange-Your Answer
             </Text>
      }
    else {
          return<Text>Orange</Text>
      }
   }
  
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
                 <View style={{       justifyContent: 'center',
        alignItems: 'center',marginTop:40}}>
                    <View style={styles.container}>
                        <Progress.Bar progress={XBanana/100} width={300} height={50} style={styles.progress} >
                            <Text  style={{position:"absolute",top:15,right:5,fontWeight:'bold'}}>{XBanana}%</Text>
                        </Progress.Bar>
                    </View>
                     <Text>{CBanana()}</Text>
                </View>
                <View style={{       justifyContent: 'center', alignItems: 'center',marginTop:25}}>
                    <View style={styles.container}>
                        <Progress.Bar progress={XStrawbery} width={300} height={50} style={styles.progress} >
                            <Text  style={{position:"absolute",top:15,right:5,fontWeight:'bold'}}>{XStrawbery}%</Text>
                        </Progress.Bar>
                    </View>
                     <Text>{CStrawbery()}</Text>
                </View>
                <View style={{ justifyContent: 'center',   alignItems: 'center',marginTop:25}}>
                    <View style={styles.container}>
                        <Progress.Bar progress={XBlueBerry} width={300} height={50} style={styles.progress} >
                            <Text  style={{position:"absolute",top:15,right:5,fontWeight:'bold'}}>{XBlueBerry}%</Text>
                        </Progress.Bar>
                    </View>
                     <Text>{CBlueBerry()}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center',marginTop:25}}>
                    <View style={styles.container}>
                        <Progress.Bar progress={XOrange} width={300} height={50} style={styles.progress} >
                            <Text  style={{position:"absolute",top:15,right:5,fontWeight:'bold'}}>{XOrange}%</Text>
                        </Progress.Bar>
                    </View>
                     <Text>{COrange()}</Text>
                </View>         
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
           
            <Footer>
                <FooterTab  style={{backgroundColor:'white'}}>
                    <Button active badge vertical >
                        <Badge style={{backgroundColor:'blue',width:25,height:25,position:'absolute',left:45,bottom:20}} ><Text style={{color:'white',textAlign:'center'}}>5</Text></Badge>
                        <Image style={styles.badge_img} source={require('../assets/pollsIcon.png')} />
                        <Text>Polls</Text>
                    </Button>
                    <Button vertical>
                        <Image style={styles.badge_img} source={require('../assets/profileIcon.png')} />
                        <Text>Profile</Text>
                    </Button>
                    <Button  badge vertical>
                        <Image style={styles.badge_img} source={require('../assets/storeIcon.png')} />
                        <Text>Store</Text>
                    </Button>
                    <Button vertical>
                        <Image  style={styles.badge_img} source={require('../assets/settingsIcon.png')} />
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

export default q1;

const styles = StyleSheet.create({
    progress:{
        backgroundColor:'#b8e4fc',
        color:'blue',
    },
    titlu:{
        fontSize:25,
        textAlign:'center',
        marginTop:25,
        color:'#1da9f7',
        fontWeight:'bold'
    }
  });
  