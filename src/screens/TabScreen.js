import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Left,
  Body,
  Right,
  Tab,
  Tabs,
} from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'black'}} hasTabs>
          <Left />
          <Body>
            <Title style={{color: 'white'}}>Daily News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'black'}}>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
