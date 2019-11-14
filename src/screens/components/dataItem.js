import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
} from 'native-base';

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : 'http://capfsc.org/App_Themes/CorporateSite/Images/no_image_news.png',
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
