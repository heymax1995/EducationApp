import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import {incrementCounter} from '../actions/counter'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 60,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component {
  constructor(props){
    super(props)
  }
  renderWarnings(){
    if(this.props.counter >= 10){
      return(
        <Text>Хватит{this.returnVoskl(this.props.counter)}</Text>
      )
    }
  }
  returnVoskl(count){
    let result = ''
    for(let i=0;i< count / 10; i++){
      result += '!'
    }
    return result
  }
  incr = () => {
    this.props.incrementCounter()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Click it!
        </Text>
        <Text style={styles.instructions} onPress={this.incr}>
          {this.props.counter}
        </Text>
        {this.renderWarnings()}
      </View>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter(){
      dispatch(incrementCounter())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)