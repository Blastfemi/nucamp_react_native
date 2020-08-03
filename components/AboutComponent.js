// Week 1: Task 1 - Create new file AboutComponent.js
import React, { Component } from 'react';
// Week 1: Task 1 - import ScrollView Component
import { ScrollView } from 'react-native';

// Week 1: Task 1 - Set up About as a class component 
class About extends Component {
  // Week 1: Task 1 - Use static navigationOptions to set a title
  static navigationOptions = {
    title: 'About Us'
  }

  render() {
    return (
      // Week 1: Task 1 - Set up empty ScrollView component 
      <ScrollView>
      </ScrollView>
    );
  }
}

export default About;




