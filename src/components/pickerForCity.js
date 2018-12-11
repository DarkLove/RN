import React from 'react';
import { Text, View ,StyleSheet,Dimensions} from 'react-native';

class PickerForCity extends React.Component {

    render() {
        const {width, height, scale} = Dimensions.get('window');

        return (
            <View>
                {this.props.isShow
                    ?
                    <View style={[styles.root,{height:height}]}>
                        {
                            this.props.citys
                                ? this.props.citys.map(item =>
                                    <Text key={item.id} style={styles.itmes} onPress={()=>this.props.callBack(item.city)}>{item.city}</Text>)
                                : null
                        }
                        <View style={{position:"absolute",bottom:100,width:"100%"}}>
                            <View style={{flex:1,flexDirection: 'row',justifyContent:"center"}}>
                                <Text onPress={()=>this.props.callBack('back')}>BACK</Text>
                            </View>
                        </View>
                    </View>
                    :
                    null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root:{
        width:"100%",backgroundColor:"#cefa9f",position:"absolute",top:0,zIndex:10000,
    },
    itmes:{
        margin:10,
    }
})


export default PickerForCity ;