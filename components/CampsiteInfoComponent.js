import React, { Component } from 'react';
// Week 2 - Exercise 1: Icons, Favorites, and Comments - Import ScrollView & FlatList
import { Text, View, ScrollView, FlatList } from 'react-native';
// Week 2 - Exercise 1: Icons, Favorites, and Comments - Import Icons
import { Card, Icon } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
// Week 2 - Exercise 1: Icons, Favorites, and Comments - Import Comments
import { COMMENTS } from '../shared/comments';

function RenderCampsite(props) {

  // Week 2 - Exercise 1: Icons, Favorites, and Comments - Destructure campsite array
  const {campsite} = props;


  if (campsite) {
    // Week 2 - Exercise 1: Icons, Favorites, and Comments - Create Icon
    // Week 2 - Exercise 1: Icons, Favorites, and Comments - Chose a different color because the orange was driving me crazy 
    // Week 2 - Exercise 1: Icons, Favorites, and Comments - name ternary = if favorite heart is solid if false display outline
    // Week 2 - Exercise 1: Icons, Favorites, and Comments - onPress ternary = if favorite is already set do nothing otherwise mark as favorite
    return (
      <Card
        featuredTitle={campsite.name}
        image={require('./images/react-lake.jpg')}>
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

// Week 2 - Exercise 1: Icons, Favorites, and Comments - Create RenderComments component & Destructure Comments Array
function RenderComments({comments}) {
  // Week 2 - Exercise 1: Icons, Favorites, and Comments - Create renderCommentItem Function
  const renderCommentItem = ({item}) => {
    return (
      // Week 2 - Exercise 1: Icons, Favorites, and Comments - Style the View & comments
      <View style={{margin: 10}}>
        <Text style={{fontSize: 14}}>{item.text}</Text>
        <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
        <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    )
  };

  /* 
  Week 2 - Exercise 1: Icons, Favorites, and Comments - Add Card component with a title
  Week 2 - Exercise 1: Icons, Favorites, and Comments - FlatList expects data to be in Array
  Week 2 - Exercise 1: Icons, Favorites, and Comments - data = Expected Array
  Week 2 - Exercise 1: Icons, Favorites, and Comments - renderItem = Function Name that was created
  Week 2 - Exercise 1: Icons, Favorites, and Comments - keyExtractor = Unique Key 
  */
  return (  
    <Card title='Comments'>
      <FlatList        
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={DataTransferItem => DataTransferItem.id.toString()}
      />
    </Card>
  )
}

class CampsiteInfo extends Component {

  constructor(props) {
    super(props);
    // Week 2 - Exercise 1: Icons, Favorites, and Comments - Bring COMMENTS into state
    // Week 2 - Exercise 1: Icons, Favorites, and Comments - Store favorite in state
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      favorite: false
    };
  }
  // Week 2 - Exercise 1: Icons, Favorites, and Comments - favorite EventHandler
  markFavorite() {
    this.setState({favorite: true});
  }
  static navigationOptions = {
    title: 'Campsite Information'
  }

  render() {
    const campsiteId = this.props.navigation.getParam('campsiteId');
    const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
    // Week 2 - Exercise 1: Icons, Favorites, and Comments - comments variable filtering by campsiteId
    const comments = this.state.comments.filter(comment => comment.campsiteId === campsiteId);
    return (
      // Week 2 - Exercise 1: Icons, Favorites, and Comments - Wrap multiple components inside a single component
      <ScrollView>
        {/* // Week 2 - Exercise 1: Icons, Favorites, and Comments - Pass favorite & markFavorite to RenderCampsite*/}
      	<RenderCampsite campsite={campsite} 
          favorite={this.state.favorite}
          markFavorite={() => this.markFavorite()}
        />
      	{/* // Week 2 - Exercise 1: Icons, Favorites, and Comments - Render RenderComments component  */}
      	<RenderComments comments={comments} />
      </ScrollView>
    );
  }
}

export default CampsiteInfo;