import React, {Component} from 'react';
import {Text, View} from 'react-native';
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
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: 'Image URL'}} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
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
