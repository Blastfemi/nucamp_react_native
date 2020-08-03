// Week 1: Task 1 - Create new file ContactComponent.js
import React, { Component } from 'react';
// Week 1: Task 1 - import ScrollView Component
import { ScrollView } from 'react-native';

// Week 1: Task 1 - Set up Contact as a class component 
class Contact extends Component {
  // Week 1: Task 1 - Use static navigationOptions to set a title
  static navigationOptions = {
    title: 'Contact Us'
  }

  render() {
    return (
      // Week 1: Task 1 - Set up empty ScrollView component 
      <ScrollView>
      </ScrollView>
    );
  }
}

export default Contact;