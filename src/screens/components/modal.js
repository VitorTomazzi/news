import React, {Component} from 'react';
import {Dimensions, Modal, Share, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Container,
  Header,
  Body,
  Content,
  Left,
  Right,
  Title,
  Button,
} from 'native-base';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  //share article functionality will be added
  //handleShare = () => {};

  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData;

    if (url !== undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}>
          <Container style={{backgroundColor: '#fff'}}>
            <Header style={{backgroundColor: '#00acee'}}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  {/* <Icon name="close" style={{color: 'white', fontSize: 12}} /> */}
                  <Text>Close</Text>
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{color: 'white'}} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  {/* <Icon name="share" style={{color: 'white', fontSize: 12}} /> */}
                  <Text>Share</Text>
                </Button>
              </Right>
            </Header>
            <Content>
              {/* <WebView
                source={{uri: url}}
                style={{flex: 1}}
                onError={this.handleClose}
                startInLoadingState
                scalesPageToFit
              /> */}
              <Text>Hello World</Text>
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}