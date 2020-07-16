
# ipm package: bandwidth-sms-library

## Overview

Bandwidth is a notification service trusted by developers and marketers for time-savings, scalability and delivery expertise.  

To get an overview of Bandwidth features and functionality click [here](https://www.bandwidth.com/).

If any suggestions or addition of new methods create a pull request. For further support, comment or create issues on this repo.

This is an ipm package, which contains one or more reusable assets within the ipm Community.

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

- Get in touch with Bandwidth Support to Create an Account
- Update the `code/libraries/BandwidthConfig` library with the

```js

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