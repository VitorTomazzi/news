import React, {Component} from 'react';
import {ListItem, Left, Thumbnail, Body, Right, Button} from 'native-base';
import {Text, View} from 'react-native';
import Time from './time';

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
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
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: 0,
            }}>
            <Text note>{this.data.source.name}</Text>
            <Time time={this.data.publishedAt} />
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
