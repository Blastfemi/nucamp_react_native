// Week 1: Task 1 - Create new file AboutComponent.js
import React, { Component } from 'react';
// Week 1: Task 1 - import ScrollView Component
import { ScrollView, Text, FlatList } from 'react-native';
// Week 1: Task 3 - import Card
import { Card, ListItem } from 'react-native-elements';
// Week 1: Task 3 - import partnership information from partner.js
import { PARTNERS } from '../shared/partners.js';

function Mission() {
  return (
    // Week 1: Task 3 - Use the Card layout to display the company mission statement
    <Card
      title='Our Mission'
      >
      <Text style={{margin: 10}}>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</Text>
    </Card>
  );
}

// Week 1: Task 1 - Set up About as a class component 
class About extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      partners: PARTNERS
    };
  }
  
  // Week 1: Task 1 - Use static navigationOptions to set a title
  static navigationOptions = {
    title: 'About Us'
  }

  
  // Week 1: Task 3 - Set up a renderPartner function
  render() {
    // Week 1: Task 3 - Inside the render method for the About component (but above the method's return statement), first set up a renderPartner function
    // Week 1: renderPartner function should destructure the property item 
    const renderPartner = ({item}) => {
      // Week 1: return a ListItem component with three props: title, subtitle, and leftAvatar
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
        />
      );
    }

    return (
      // Week 1: Task 1 - Set up empty ScrollView component 
      <ScrollView>
        {/* // Week 1: Task 3 - Render Mission Component */}
        <Mission />
        {/* // Week 1: Task 3 - Render a Card component */}
        <Card title='Community Partners'>
        {/* // Week 1: Task 3 - Set up a FlatList  */}
          <FlatList
            data={this.state.partners}
            renderItem={renderPartner}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default About;




