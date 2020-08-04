// Week 1: Task 1 - Create new file ContactComponent.js
import React, { Component } from 'react';
// Week 1: Task 1 - import ScrollView Component
import { ScrollView, Text } from 'react-native';

import { Card } from 'react-native-elements';


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
        {/* // Week 1: Task 2 - Display Address in a Card inside ScrollView */}
        <Card
          // Week 1: Task 2 - Set Title Prop 
          title='Contact Information'
          // Week 1: Task 2 - Set wrapperStyle 
          wrapperStyle={{margin: 20}}
        >
          <Text 
          // Week 1: Task 2 - Use Text component including style prop
            style={{marginBottom: 10}}
          >
            1 Nucamp Way{'\n'}
            Seattle, WA 98001{'\n'}
            U.S.A.
          </Text>
          <Text>
            Phone: 1-206-555-1234
          </Text>
          <Text>
            Email: campsites@nucamp.co
          </Text>
        </Card>
      </ScrollView>
    );
  }
}


export default Contact;