import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

import {getArticles} from '../../service/news';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    };
  }

  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong');
      },
    );
  }

  render() {
    console.log(this.state.data);

    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: 'Image URL'}} />
              </Left>
              <Body>
                <Text>This is the title</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
