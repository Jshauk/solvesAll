cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/com.rjfun.cordova.plugin.admob/www/AdMob.js",
        "id": "com.rjfun.cordova.plugin.admob.AdMob",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.2.11-dev",
    "org.apache.cordova.splashscreen": "0.3.1",
    "com.google.playservices": "17.0.0",
    "com.rjfun.cordova.plugin.admob": "1.1"
}
// BOTTOM OF METADATA
});