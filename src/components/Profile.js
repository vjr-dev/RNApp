import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { store } from '../../App';

 class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }

        store.subscribe(() => {
            this.setState({
                counter: this.props.counter
            })
        })

        console.warn(this.state.counter)
    }

    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.headerTxt}>PROFILE</Text>
                <Text style={styles.headerTxt}>{this.props.counter}</Text>
                
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps,)(Profile)

const styles = StyleSheet.create({
    container: {

        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    headerTxt: {
        fontSize: 20,
        fontWeight: "600",
        color: 'blue',
    },
    btn: {
        borderWidth:1,
        borderColor: 'tomato',
        padding:5,
        borderRadius:5,
        marginHorizontal:20,
        
    }
})