import React, {Component} from 'react';
import {Dimensions, WebView, Modal, Share} from 'react-native';
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

    constructor(props){
        super(props)

    }

  render() {

    const { showModal, articleData } = this.props;
    const { url } = articleData;
    
    return (
        <Modal
        animationType="slide"
        transparent
        visible={}
        >

        </Modal>
    );
  }
}
