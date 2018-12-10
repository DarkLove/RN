import React from 'react';
import { Text, View ,Image,StyleSheet,ScrollView} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-swiper';
import Sport from './sport'
import My from './my'

class Home extends React.Component {
    render() {
        let menus = [
            {key: 'huiyuan', title: "会员", path: require('../imags/huiyuan.png')},
            {key: 'tuanke', title: "团课", path: require('../imags/tuanke.png')},
            {key: 'jiaolian',title: "教练", path: require('../imags/jiaolian.png')}
        ];
        return (
            <View style={styles.s000}>
                <View style={styles.ab}>
                    <Image source={require('../imags/MP-LOGO.png')} style={{width:266,height:36,}}/>
                </View>
                <ScrollView style={{marginTop:50}}>
                    <View style={{flexDirection: 'column',flex: 1,}}>
                        <Swiper style={styles.wrapper} showsButtons={true} height={120} horizontal={false} autoplay autoplayTimeout={1}>
                            <View style={styles.slide1}>
                                <Text style={styles.text}>Hello Swiper</Text>
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.text}>Beautiful</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                        </Swiper>
                        <View key={"root"} style={{marginLeft:20,marginRight:20,}}>
                            <View style={styles.s001}>
                                {menus.map(item =>
                                    <View key={item.key} style={styles.s002}>
                                        <Image source={item.path} style={styles.s003}/>
                                        <Text style={styles.s004}>{item.title} </Text>
                                    </View>
                                )}
                            </View>
                            <View style={styles.s005}>
                                <Text style={{width:50,fontSize:16, flex: 1}}>附近门店</Text>
                                <Text style={{width:50,fontSize:10 ,flex: 1,textAlign:"right",color:"#3ad445"}}>更多门店</Text>
                            </View>
                            <View style={{backgroundColor:"#FFFFFF"}}>
                                <Image source={require('../imags/store-default.png')} style={{flex:1,marginTop:10}} resizeMode='contain'/>
                                <View style={{flex:1,height:80,}}>
                                    <View style={{flexDirection: 'column',marginLeft:10,marginRight:10}}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between',
                                            alignItems: 'center',height:60,}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <Image source={require('../imags/sm.jpg')} style={{width:40,height:40,borderRadius:40}}/>
                                                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                                    <Text>董叶峰</Text>
                                                    <Text>L1</Text>
                                                </View>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text>¥180</Text>
                                                <Text>元/课时起</Text>
                                            </View>
                                        </View>
                                        <View style={{height:20}}>
                                            <Text>擅长: 增肌、减脂、拉伸、塑形、产后恢复…</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                     </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({


    ab:{
        height:50,
        width:"100%",
        position:"absolute",
        // backgroundColor:"#9cc28b",
        zIndex:1,

        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },

    s000: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:"#fafafa"
    },

    s001: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20
    },

    s002: {
        width: 90,
        height: 60,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    s003: {
        width:20,
        height:20
    },

    s004: {
       fontSize:9,
       color:"#464955"
    },


    s005: {
        flex: 1,
        height:"auto",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }

});


const TabNavigator = createBottomTabNavigator(
    {
        home: Home,
        sport: Sport,
        my: My,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'home') {
                    let flag = tintColor === 'black' ? true : false;
                    iconName = flag ? <Image source={require('../imags/menu1_a.png')} style={{width: 30, height: 30}}/>
                                : <Image source={require('../imags/menu1_d.png')} style={{width: 30, height: 30}}/>
                } else if (routeName === 'sport') {
                    let flag = tintColor === 'black' ? true : false;
                    iconName = flag ? <Image source={require('../imags/menu2_a.png')} style={{width: 30, height: 30}}/>
                        : <Image source={require('../imags/menu2_d.png')} style={{width: 30, height: 30}}/>
                } else if (routeName === 'my') {
                    let flag = tintColor === 'black' ? true : false;
                    iconName = flag ? <Image source={require('../imags/menu3_a.png')} style={{width: 30, height: 30}}/>
                        : <Image source={require('../imags/menu3_d.png')} style={{width: 30, height: 30}}/>
                }
                return iconName
            },
        }),
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);