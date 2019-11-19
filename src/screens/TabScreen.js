import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Left,
  Body,
  Right,
  ScrollableTab,
  Tab,
  Tabs,
} from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import Tab4 from './tabs/Tab4';
import Tab5 from './tabs/Tab5';
import Tab6 from './tabs/Tab6';
import Tab7 from './tabs/Tab7';

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
        <Tabs
          renderTabBar={() => <ScrollableTab />}
          tabBarUnderlineStyle={{backgroundColor: 'black'}}>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="General">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Business">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Technology">
            <Tab3 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Entertainment">
            <Tab4 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Health">
            <Tab5 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Science">
            <Tab6 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#00acee'}}
            activeTabStyle={{backgroundColor: '#00acee'}}
            textStyle={{color: 'black'}}
            activeTextStyle={{color: 'black'}}
            heading="Sports">
            <Tab7 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
