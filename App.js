import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details',{
                        name:"fx",
                        age:23
                    })}
                />
            </View>
        );
    }
}


class DetailsScreen extends React.Component {

    render() {

        const { navigation } = this.props;
        const name = navigation.getParam('name', 'NO-NAME');
        const age = navigation.getParam('age', 0);
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen{"     "+name+"    "+age}</Text>
                <Button
                    title="Go to Details... again  use push"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home"
    }
);
export default createAppContainer(RootStack);



// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     }
// });
// export default createAppContainer(AppNavigator);
