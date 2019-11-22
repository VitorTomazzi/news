import React, {Component} from 'react';
import {Modal, Text, Share} from 'react-native';
import {WebView} from 'react-native-webview';
import {Container, Header, Body, Left, Right, Title, Button} from 'native-base';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  //share article functionality will be added
  handleShare = () => {
    const {url, title} = this.props.articleData;
    let message = `${title}\n\nRead more at ${url}\n\nShared via Daily News`;
    return Share.share(
      {title, message, url: message},
      {dialogueTitle: `Share ${title}`},
    );
  };

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
            <WebView
              source={{uri: url}}
              style={{flex: 1, backgroundColor: '#fff'}}
              onError={this.handleClose}
              startInLoadingState
              scalesPageToFit
              useWebKit={true}
            />
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
