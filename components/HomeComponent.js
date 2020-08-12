import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
// Week 2: Exercise 4 - Using Redux in React Native - Remove CAMPSITES PROMOTIONS & PARTNERS import
// Week 2: Exercise 4 - Using Redux in React Native - connect & baseUrl
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
// Week 2: Exercise 6 - Activity Indicator - import Loading Component
import Loading from './LoadingComponent';

// Week 2: Exercise 4 - Using Redux in React Native - Define the part of state we are using
const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    promotions: state.promotions,
    partners: state.partners
  };
};

// Week 2: Exercise 4 - Using Redux in React Native - Update image source to use baseUrl + relative image path to retrieve correct image fo reach partner
function RenderItem(props) {
  const {item} = props;


  // Week 2: Exercise 6 - Activity Indicator - Returning Loading Indicator
  if (props.isLoading) {
    return <Loading />;
  }

  // Week 2: Exercise 6 - Activity Indicator - Return Error Message
  if (props.errMess) {
    return (
      <View>
        <Text>{props.errMess}</Text>
      </View>
    );
  }
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
          item={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
          isLoading={this.props.campsites.isLoading}
          errMess={this.props.campsites.errMess}
        />
        <RenderItem
          item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
          isLoading={this.props.promotions.isLoading}
          errMess={this.props.promotions.errMess}
        />
        <RenderItem
          item={this.props.partners.partners.filter(partner => partner.featured)[0]}
          isLoading={this.props.partners.isLoading}
          errMess={this.props.partners.errMess}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);