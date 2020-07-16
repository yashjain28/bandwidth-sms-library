/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */

function ExampleBandwidthSendSMS(req, resp) {
    // These are parameters passed into the code service
    var params = req.params
    var bwconf = BandwidthConfig;
    var bandwidth = Bandwidth(bwconf);

    bandwidth.sendSMS("You just received a message from Bandwidth through ClearBlade", ["+15556667777"], "test message", function (err, data) {
        if (err) {
            resp.error(err);
        }
        resp.success(data);
    });
    
}
