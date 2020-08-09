import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
// Week 2: Exercise 4 - Using Redux in React Native - Remove CAMPSITES & COMMENTS import
// Week 2: Exercise 4 - Using Redux in React Native - connect & baseUrl
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

// Week 2: Exercise 4 - Using Redux in React Native - Define the part of state we are using
const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    comments: state.comments
  };
};

function RenderCampsite(props) {

  const {campsite} = props;


  if (campsite) {

    // Week 2: Exercise 4 - Using Redux in React Native - Update image source to use baseUrl + relative image path to retrieve correct image fo reach partner
    return (
      <Card
        featuredTitle={campsite.name}
        image={{uri: baseUrl + campsite.image}}>
        <Text style={{margin: 10}}>
          {campsite.description}
        </Text>
        <Icon
          name={props.favorite ? 'heart' : 'heart-o'}
          type='font-awesome'
          color='#ff0000'
          raised
          reverse
          onPress={() => props.favorite ?
            console.log('Already set as a favorite') : props.markFavorite()}
        />
      </Card>
    );
  }
  return <View />;
}

function RenderComments({comments}) {
  const renderCommentItem = ({item}) => {
    return (
      <View style={{margin: 10}}>
        <Text style={{fontSize: 14}}>{item.text}</Text>
        <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
        <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    );
  };

  return (
    <Card title='Comments'>
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={item => item.id.toString()}
      />
    </Card>
  );
}

class CampsiteInfo extends Component {

   // Week 2: Exercise 4 - Using Redux in React Native - Remove constructors that was used by local state
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }
  markFavorite() {
    this.setState({favorite: true});
  }
  static navigationOptions = {
    title: 'Campsite Information'
  }

  render() {

    // Week 2: Exercise 4 - Using Redux in React Native - Update props reference
    const campsiteId = this.props.navigation.getParam('campsiteId');
    const campsite = this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0];
    const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId);
    return (
      <ScrollView>
        <RenderCampsite campsite={campsite}
          favorite={this.state.favorite}
          markFavorite={() => this.markFavorite()}
        />
        <RenderComments comments={comments} />
      </ScrollView>
    );
  }
}

// Week 2: Exercise 4 - Using Redux in React Native - Connect to redux store
export default connect(mapStateToProps)(CampsiteInfo);