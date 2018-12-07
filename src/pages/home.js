import React from 'react';
import { Text, View ,Image,StyleSheet,ScrollView} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

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
                    <Image source={require('../imags/MP-LOGO.png')} style={{width:100,height:"auto"}}/>
                </View>
                <ScrollView>
                    <View style={styles.s001}>
                        {menus.map(item =>
                            <View key={item.key} style={styles.s002}>
                                <Image source={item.path} style={styles.s003}/>
                                <Text style={styles.s004}>{item.title} </Text>
                            </View>
                        )}
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
        backgroundColor:"#9cc28b",
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
        justifyContent: 'space-evenly',
        marginLeft:30,
        marginRight:30,
        marginTop:50,
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