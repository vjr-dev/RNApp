import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {connect} from 'react-redux';

 class Counter extends Component {


render() {

        return (

            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.btn} 
                onPress={() => this.props.increaseCounter()}
                
                >
                    <Text>Increm</Text>
                </TouchableOpacity >
                <Text>{this.props.counter}</Text>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => this.props.decreaseCounter()}
                
                >
                    <Text>decrem</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
//take state from store and map it locally here as state
// value coming form STORE --> Local Component
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}


//Passing action to modify state

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
      
        alignItems:'center',
        width: 300,
        height: 300,
    },
    btn: {
        borderWidth:1,
        borderColor: 'tomato',
        padding:5,
        borderRadius:5,
        marginHorizontal:20,
        
    }
})