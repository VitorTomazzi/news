import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Container,
  Header,
  Body,
  Content,
  Left,
  Right,
  Icon,
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

  handleShare = () => {};

  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData;

    return (
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={this.handleClose}>
        <Container
          style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
          <Header style={{backgroundColor: 'blue'}}>
            <Left>
              <Button onPress={this.handleClose} transparent>
                <Icon name="close" style={{color: 'white', fontSize: 12}} />
              </Button>
            </Left>
            <Body>
              <Title children={articleData.title} style={{color: 'white'}} />
            </Body>
            <Right>
              <Button onPress={this.handleShare} transparent>
                <Icon name="share" style={{color: 'white', fontSize: 12}} />
              </Button>
            </Right>
          </Header>
          <Content>
            <WebView
              source={{uri: url}}
              style={{flex: 1}}
              onError={this.handleClose}
              startInLoadingState
              scalesPageToFit
            />
          </Content>
        </Container>
      </Modal>
    );
  }
}
