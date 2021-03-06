import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export  class SecondTab extends React.Component {
    state= {
        value: 0,
        total_taps: 0
    }

    incrementValue = () => {
        this.setState({
            value: this.state.value +1,
            total_taps: this.state.total_taps +1
        })
        console.log("Value: " + (this.state.value + 1))
    }
    decrementValue = () => {
        this.setState({
            value: this.state.value -1,
            total_taps: this.state.total_taps -1
        })
        console.log("Value: " + (this.state.value - 1))
    }
    resetValue = () => {
        this.setState({
            value: 0
        })
    }
    render () {
        return ( 
            <View style={styles.container}>
                <Text style={{ fontSize: 60, marginBottom: -5}}>{this.state.value}</Text>
                <StatusBar style="auto"/>
                <View style={{flexDirection:"row"}}>
                    <Button onPress={this.decrementValue} title="Decrease" />
                    <Text>   </Text>
                    <Button onPress={this.incrementValue} title="Increase" />
                    <Text>   </Text>
                    <Button onPress={this.resetValue} title="Reset" />
                </View>
            </View>
            
        );
    }
}
const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
});