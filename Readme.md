
# ipm package: bandwidth-sms-library

## Overview

Bandwidth is a notification service trusted by developers and marketers for time-savings, scalability and delivery expertise.  

To get an overview of Bandwidth features and functionality click [here](https://www.bandwidth.com/).

If any suggestions or addition of new methods create a pull request. For further support, comment or create issues on this repo.

This is an ipm package, which contains one or more reusable assets within the ipm Community.

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

- Get in touch with Bandwidth Support to Create an Account
- Update the `code/libraries/BandwidthConfig` library with the relevant credentials.

```js

const BandwidthConfig = {
  APITOKEN: "4ddb24d06069ef6adaaaaaa8e9d9ef02431664sdsd9100",
  APISECRET: "8sdsasasasdd6ba6996631cc9ea6f8595eb2bfaeasae5e",
  ORIGIN_NUMBER: "+15557778888",
  ACCOUNT_ID: "000000",
  APPLICATION_ID: "7aasdaxa1-e28f-4940-af6e-hbcc4814752",
};

```

## Usage

Run `ExampleBandwidthSendSMS` Code Service, also here for reference:

```js
var bwconf = BandwidthConfig;
var bandwidth = Bandwidth(bwconf);

bandwidth.sendSMS("You just received a message from Bandwidth through ClearBlade", ["+15556667777"], "test message", function (err, data) {
    if (err) {
        resp.error(err);
    }
    resp.success(data);
});
```


## API 

### Constants

<dl>
<dt><a href="#BandwidthConfig">BandwidthConfig</a></dt>
<dd><p>Type: Configuration
Description: A library that contains a key-value object to be used as constants.</p>
</dd>
</dl>

### Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>This callback is displayed as part of this Library.</p>
</dd>
<dt><a href="#BandwidthConfig">BandwidthConfig</a> : <code>Object</code></dt>
<dd><p>Sends a text message using Bandwidth&#39;s REST API.</p>
</dd>
</dl>

<a name="BandwidthConfig"></a>

### BandwidthConfig
Type: Configuration
Description: A library that contains a key-value object to be used as constants.

**Kind**: global constant  
<a name="callback"></a>

### callback : <code>function</code>
This callback is displayed as part of this Library.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| err | <code>Object</code> | 
| resp | <code>Object</code> | 

<a name="BandwidthConfig"></a>

### BandwidthConfig : <code>Object</code>
Sends a text message using Bandwidth's REST API.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| APITOKEN | <code>string</code> | Bandwidth API apiToken ex. "BC218b72987d86855a5adb921370115a20" |
| APISECRET | <code>string</code> | Bandwidth API apiSecret ex. "4579ac6ba4fae7b452c03c64aeae40e7" |
| ORIGIN_NUMBER | <code>string</code> | Origin phone number of text message, ex "+15127132783" |
| ACCOUNT_ID | <code>string</code> | bandwidth account ID ex: "5000001" |
| APPLICATION_ID | <code>string</code> | create an application "7cd937a1-aaaa-4444-af6e-df56c4814752" |

**Example**  
```js
var bwconf = BandwidthConfig;
var bandwidth = Bandwidth(bwconf);
```
