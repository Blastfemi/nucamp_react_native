import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
// Week 2: Exercise 4 - Using Redux in React Native - Remove PARTNERS import
// Week 2: Exercise 4 - Using Redux in React Native - connect & baseUrl
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

// Week 2: Exercise 4 - Using Redux in React Native - Define the part of state we are using
const mapStateToProps = state => {
  return {
    partners: state.partners
  };
};

function Mission() {
  return (
    <Card title='Our Mission'>
      <Text style={{margin: 10}}>
      We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
      </Text>
    </Card>
  );
}

class About extends Component {

  // Week 2: Exercise 4 - Using Redux in React Native - Remove constructor that was used by local state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     partners: PARTNERS
  //   };
  // }

  static navigationOptions ={
    title: 'About Us'
  }

  // Week 2: Exercise 4 - Using Redux in React Native - Update image source to use baseUrl + relative image path to retrieve correct image fo reach partner
  render() {
    const renderPartner = ({item}) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{source: {uri: baseUrl + item.image}}}
        />
      );
    };

    // Week 2: Exercise 4 - Using Redux in React Native - Update props reference
    return (
      <ScrollView>
        <Mission />
        <Card title='Community Partners'>
          <FlatList
            data={this.props.partners.partners}
            renderItem={renderPartner}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

// Week 2: Exercise 4 - Using Redux in React Native - Connect to redux store
export default connect(mapStateToProps)(About);




