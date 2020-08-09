import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
// Week 2: Exercise 4 - Using Redux in React Native - Remove CAMPSITES PROMOTIONS & PARTNERS import
// Week 2: Exercise 4 - Using Redux in React Native - connect & baseUrl
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

// Week 2: Exercise 4 - Using Redux in React Native - Define the part of state we are using
const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    promotions: state.promotions,
    partners: state.partners
  };
};

  // Week 2: Exercise 4 - Using Redux in React Native - Update image source to use baseUrl + relative image path to retrieve correct image fo reach partner
function RenderItem({item}) {
  if (item) {
    return (
      <Card
        featuredTitle={item.name}
        image={{uri: baseUrl + item.image}}>
          <Text
            style={{margin: 10}}>
              {item.description}
            </Text>
        </Card>
    );
  }
  return <View />;
}

class Home extends Component {

   // Week 2: Exercise 4 - Using Redux in React Native - Remove constructor that was used by local state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES,
  //     partners: PARTNERS,
  //     promotions: PROMOTIONS
  //   };
  // }
  static navigationOptions = {
    title: 'Home'
  }

  // Week 2: Exercise 4 - Using Redux in React Native - Update props reference
  render() {
    return (
      <ScrollView>
        <RenderItem
          item={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]} />
        <RenderItem
          item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]} />
        <RenderItem
          item={this.props.partners.partners.filter(partner => partner.featured)[0]} />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);