/* begin_generated_IBM_copyright_prolog                             */
/*                                                                  */
/* This is an automatically generated copyright prolog.             */
/* After initializing,  DO NOT MODIFY OR MOVE                       */
/* **************************************************************** */
/* (C) Copyright IBM Corp. 2017                              */
/* All Rights Reserved.                                             */
/* **************************************************************** */
/* end_generated_IBM_copyright_prolog                               */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/lib/card';
import Download from 'material-ui/lib/svg-icons/file/file-download';
import Howto from './Howto';

import AppTheme from './style/theme';
import BaseComponent from './common/BaseComponent';
const _ = require('lodash');
const request = require('superagent');

class Welcome extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this._bind('componentDidMount');
    this.state = {
      current_menu: "Home"
    };
  }

  componentDidMount() {
    const self = this;

  }





  render() {
  const header_style = {
    textAlign: 'center',
    color: AppTheme.palette.primary1Color
  };
  const div_style = {
    display: 'inline-block'
  };
  const button_style = {
    margin: 20,
    fontSize: 20
  };



  return (
        <div>
        <div style={header_style}>
        <h1>Welcome to the Streams IoT Starter Kit</h1>
        <h3>Your Streaming Analytics service and Watson IoT Platform services have been set up. You are now ready to create Streams applications to analyze data from edge devices.</h3>
      </div>  <Card style={button_style}><CardHeader   subtitleColor={AppTheme.cardSubtitleColor}
          style={{backgroundColor:      AppTheme.palette.primary2Color}}
            titleStyle={{fontSize: 'large'}}  title="Tutorials"
            subtitle="Step by step tutorials to help you get started"/>
         <CardText>
        These tutorials give instructions to manually create credentials. These credentials are all accessible by clicking "View Credentials" above.
        <ul><li>
        <a href="https://developer.ibm.com/recipes/tutorials/send-events-to-the-watson-iot-platform-from-a-raspberry-pi-running-apache-edgent/">
        Send events to Watson IoT Platform from Edgent</a>
        </li><li>
        <a href="https://developer.ibm.com/recipes/tutorials/connect-apache-edgent-to-the-streaming-analytics-service-using-the-watson-iot-platform/">
       Connect to Apache Edgent from the Streaming Analytics service
        </a></li><li>
        <a href="https://developer.ibm.com/streamsdev/docs/cheat-sheet-connecting-edgent-streams-applications/">Cheatsheet for connecting Edgent and Streams applications</a>
        </li></ul>

        <p><a href="https://github.com/IBMStreams/samples/blob/master/IoT/ReadEdgentEvents/">Sample Streams applications on Github</a></p>
        </CardText></Card>

<Howto/>

        </div>
    )
  };
}

export default Welcome;
