/**
 * Type: Library
 * Description: A library that contains a function which, when called, returns an object with a public API.
 */

/**
 * Sends a text message using Bandwidth's REST API.
 * @typedef {Object} BandwidthConfig
 * @param {string} APITOKEN - Bandwidth API apiToken ex. "BC218b72987d86855a5adb921370115a20"
 * @param {string} APISECRET - Bandwidth API apiSecret ex. "4579ac6ba4fae7b452c03c64aeae40e7"
 * @param {string} ORIGIN_NUMBER - Origin phone number of text message, ex "+15127132783"
 * @param {string} ACCOUNT_ID - bandwidth account ID ex: "5000001"
 * @param {string} APPLICATION_ID - create an application "7cd937a1-aaaa-4444-af6e-df56c4814752"
 * 
 * @example
 * var bwconf = BandwidthConfig;
 * var bandwidth = Bandwidth(bwconf);
 */

function Bandwidth(bwconf) {

    if (!bwconf.ACCOUNT_ID || !bwconf.APISECRET || !bwconf.APITOKEN || !bwconf.APPLICATION_ID || !bwconf.ORIGIN_NUMBER) {
        throw new Error("Falsey Bandwidth configuration found.");
    }

    /**
     * Send SMS message
     * @memberof Bandwidth
     * @param {string} text - text body
     * @param {string} recipientNumbers - Formatted phone number(s) ex. ["+13399872816"]
     * @param {callback} callback ex. function(err, data){}
     * 
     * @examples
     * var bwconf = BandwidthConfig;
     * var bandwidth = Bandwidth(bwconf);
     * 
     * bandwidth.sendSMS(text, recipientNumbers, tag, function(err, data){
     *     if(err){
     *         resp.error(err);
     *     }
     *     resp.success(data);
     * });
     * 
     */
    function sendSMS(text, recipientNumbers, tag, callback) {
        var reqBody = {
            "to": recipientNumbers,
            "from": bwconf.ORIGIN_NUMBER,
            "text": text,
            "tag": tag,
            "applicationId":bwconf.APPLICATION_ID
        }
        var options = {
            auth: { user: bwconf.APITOKEN, pass: bwconf.APISECRET },
            uri: "https://messaging.bandwidth.com/api/v2/users/" + bwconf.ACCOUNT_ID + "/messages",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json"
            }
        };

        var requestObject = Requests();
        requestObject.post(options, callback);
    }
    return {
        sendSMS
    };
};

/**
* This callback is displayed as part of this Library.
* @callback callback
* @param {Object} err
* @param {Object} resp
*/