import React, { Component } from 'react';
import { FlatList } from 'react-native';
// Week 2: Exercise 4 - Using Redux in React Native - Switch ListItem for Tile
import { Tile } from 'react-native-elements';
// Week 2: Exercise 4 - Using Redux in React Native - Remove CAMPSITES import
// Week 2: Exercise 4 - Using Redux in React Native - connect & baseUrl
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

// Week 2: Exercise 4 - Using Redux in React Native - Define the part of state we are using
const mapStateToProps = state => {
  return {
    campsites: state.campsites,
  };
};

class Directory extends Component {

  // Week 2: Exercise 4 - Using Redux in React Native - Remove constructor that was used by local state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES
  //   };
  // }

  static navigationOptions = {
    title: 'Directory'
  }

  // Week 2: Exercise 4 - Using Redux in React Native - Switch ListItem for Tile
  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({item}) => {
      return (
        <Tile
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
          imageSrc={{uri: baseUrl + item.image}}
        />
      );
    };

      // Week 2: Exercise 4 - Using Redux in React Native - Update image source to use baseUrl + relative image path to retrieve correct image fo reach partner
    return (
      <FlatList
        data={this.props.campsites.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

// Week 2: Exercise 4 - Using Redux in React Native - Connect to redux store
export default connect(mapStateToProps)(Directory);