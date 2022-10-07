import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { store } from '../../App';
import {connect} from 'react-redux';

 class Home extends Component {
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

    }
    render() {
            return (
    
                <View style={styles.container}>
                    <View style={styles.headerNavContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Counter')}>
                        <Text style={styles.btnTxt}>Counter</Text>
                    </TouchableOpacity >
                    <TouchableOpacity 
                    style={styles.btn}
                    onPress={
                        () =>
                         this.props.navigation.navigate('Profile')
                        }
                    >
                        <Text style={styles.btnTxt}>Profile</Text>
                    </TouchableOpacity >
                    </View>
                    <View style={styles.body}>
                        <Text>Rest of container</Text>
                        <Text>{this.props.counter}</Text>
                    </View>
    
                </View>
            )
    
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 10,
        
    },
    headerNavContainer: {
        flex: 0.3,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:"lightyellow",
        padding:20,
        marginHorizontal:10
    },
    body: {
        flex:9.7,
        justifyContent:'center',
        alignItems:'center'
    },
    btn: {
       
        borderColor: 'tomato',
    
        
        marginHorizontal:10,
        borderBottomWidth:1
    },
    btnTxt: {
        fontSize: 18,
        color: 'blue',
        fontWeight: "600"
    }
    
})