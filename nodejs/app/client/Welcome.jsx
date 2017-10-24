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
      </div>
      <Card style={button_style}><CardHeader   subtitleColor={AppTheme.cardSubtitleColor}
          style={{backgroundColor:      AppTheme.palette.primary2Color}}
            titleStyle={{fontSize: 'large'}}  title="How it Works"
            />
         <CardText>
        This short animation shows how data moves from IoT devices to Streams applications.
        <br/>

<video width="600" height="400" controls autoplay source src="https://developer.ibm.com/streamsdev/wp-content/uploads/sites/15/2017/10/iotanimation-video.mp4" type="video/mp4">
     Your browser does not support the video tag. <a href="https://developer.ibm.com/streamsdev/wp-content/uploads/sites/15/2017/10/iotanimation-video.mp4">Watch it here.</a>
</video>
            </CardText></Card>

       <Card style={button_style}><CardHeader   subtitleColor={AppTheme.cardSubtitleColor}
          style={{backgroundColor:      AppTheme.palette.primary2Color}}
            titleStyle={{fontSize: 'large'}}  title="Get Started"
            subtitle="Resources to help you get started"/>
         <CardText>
         <h3>Sample Applications</h3>

         <ul><li>Detect malfunctioning weather stations using Streams, Python and the IBM Data Science Experience</li>

         </ul>
         <h3>Step by Step Tutorials</h3>
        You could complete these tutorials in order. <br/>Note: These tutorials give instructions to create credentials. These credentials have already been created for you and are accessible by clicking "View Credentials" above.
        <ol><li><a href="https://developer.ibm.com/recipes/tutorials/send-events-to-the-watson-iot-platform-from-a-raspberry-pi-running-apache-edgent/">
           Create an Edgent application that sends data to the Watson IoT platform</a>
        </li><li><a href="https://developer.ibm.com/recipes/tutorials/connect-apache-edgent-to-the-streaming-analytics-service-using-the-watson-iot-platform/">
      Create a Streams application that processes the data from the Edgent application
        </a></li>
      </ol><br/>
        <a href="https://developer.ibm.com/streamsdev/docs/cheat-sheet-connecting-edgent-streams-applications/">Cheatsheet for connecting Edgent and Streams applications</a>


        <p><a href="https://github.com/IBMStreams/samples/blob/master/IoT/ReadEdgentEvents/">Sample Streams applications on Github</a></p>
        </CardText></Card>

<Howto/>

        </div>
    )
  };
}

export default Welcome;
