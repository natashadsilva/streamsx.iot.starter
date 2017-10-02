/* begin_generated_IBM_copyright_prolog                             */
/*                                                                  */
/* This is an automatically generated copyright prolog.             */
/* After initializing,  DO NOT MODIFY OR MOVE                       */
/* **************************************************************** */
/* (C) Copyright IBM Corp.  2016, 2017                              */
/* All Rights Reserved.                                             */
/* **************************************************************** */
/* end_generated_IBM_copyright_prolog                               */
const path = require('path');

// To deploy the application locally, there are a few places in this file
// you will need to customize.  Grep for 'FILL IN' to locate these places

const server = {
  port: 3000,
  ssl: {
    enabled: false,
    protocol: 'TLS',
    key: 'private.key',
    certificate: 'public.cert'
  },
  stacktrace: true,

  // Deploy Streaming Analytic SAB file?
  // If true, check if the 'streaming_app' settings are correct
  deploysab: false,

  // Create IOT Device configuration?
  // If true, check if 'edge_device' settings are correct
  createIotDevice: true,
};



// FILL IN with your Streaming Analytic bluemix credential
const streaming_analytics =
{
  "password": "f74aedc1-81af-497b-a781-cc45018dda75",
  "rest_port": "443",
  "bundles_path": "/jax-rs/bundles/service_instances/d99131f8-76e0-45e1-86de-c854979235d1/service_bindings/e75ed0f0-8424-402f-9201-94dee9ec7838",
  "resources_path": "/jax-rs/resources/service_instances/d99131f8-76e0-45e1-86de-c854979235d1/service_bindings/e75ed0f0-8424-402f-9201-94dee9ec7838",
  "stop_path": "/jax-rs/streams/stop/service_instances/d99131f8-76e0-45e1-86de-c854979235d1/service_bindings/e75ed0f0-8424-402f-9201-94dee9ec7838",
  "rest_host": "streams-app-service.ng.bluemix.net",
  "size_path": "/jax-rs/streams/size/service_instances/d99131f8-76e0-45e1-86de-c854979235d1/service_bindings/e75ed0f0-8424-402f-9201-94dee9ec7838",
  "jobs_path": "/jax-rs/jobs/service_instances/d99131f8-76e0-45e1-86de-c854979235d1/service_bindings/e75ed0f0-8424-402f-9201-94dee9ec7838",
  "start_path": "/jax-rs/streams/start/service_instances/d99131f8-76e0-45e1-86de-c854979235d1/service_bindings/e75ed0f0-8424-402f-9201-94dee9ec7838",
  "rest_url": "https://streams-app-service.ng.bluemix.net",
  "userid": "cdc97d15-2f3f-4268-8f9e-c0221727c29d",
  "status_path": "/jax-rs/streams/status/service_instances/d99131f8-76e0-45e1-86de-c854979235d1/service_bindings/e75ed0f0-8424-402f-9201-94dee9ec7838"
}
// FILL IN with your IOT bluemix credential
const iot_platform = {
  "iotCredentialsIdentifier": "a2g6k39sl6r5",
  "mqtt_host": "do2786.messaging.internetofthings.ibmcloud.com",
  "mqtt_u_port": 1883,
  "mqtt_s_port": 8883,
  "http_host": "do2786.internetofthings.ibmcloud.com",
  "org": "do2786",
  "apiKey": "a-do2786-rmcfhb5u5k",
  "apiToken": "IHQfh13-M9B*ueuvgL"
};

// Settings for registerting edge device on IOT platform
// FILL IN, change any information necessary to setup the edge device
const edge_device = {
  type: 'iot_device',
  id: 'iot_device_1',
  authtoken: 'streaming',
  // optional meta information
  metadata: {},
  deviceInfo: {}
};
module.exports = {
  server: server,

  edge_device: edge_device,
  streaming_analytics: streaming_analytics,
  iot_platform: iot_platform
};
