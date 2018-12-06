import React from 'react';
import { Text, View ,Image,StyleSheet} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Sport from './sport'
import My from './my'

class Home extends React.Component {
    render() {
        return (
            <View style={styles.s001}>
                <View style={styles.s002}>
                    <Image source={require('../imags/huiyuan.png')} style={styles.s003}/>
                    <Text>会员</Text>
                </View>
                <View  style={styles.s002}>
                    <Image source={require('../imags/huiyuan.png')} style={styles.s003}/>
                    <Text>会员</Text>
                </View>
                <View style={styles.s002}>
                    <Image source={require('../imags/huiyuan.png')} style={styles.s003}/>
                    <Text>会员</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    s001: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft:30,
        marginRight:30
    },

    s002: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    s003: {
        width:20,
        height:20
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