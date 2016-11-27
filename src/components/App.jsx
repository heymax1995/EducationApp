import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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
  constructor(){
    console.log('OLOLOLOLO')
    super()
    this.state = {count: 0}
  }
  renderWarnings(){
    if(this.state.count >= 10){
      return(
        <Text>Хватит{this.returnVoskl(this.state.count)}</Text>
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Click it!
        </Text>
        <Text style={styles.instructions} onPress={() => { this.setState({count: this.state.count + 1 }) }}>
          {this.state.count}
        </Text>
        {this.renderWarnings()}
      </View>
    );

  }
}
export default App