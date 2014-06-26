cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.google.cordova.plugin.AdMobPlugin/www/AdMobPlugin.js",
        "id": "com.google.cordova.plugin.AdMobPlugin.AdMob",
        "clobbers": [
            "window.admob"
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
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.google.cordova.plugin.AdMobPlugin": "0.0.2",
    "org.apache.cordova.splashscreen": "0.3.1",
    "org.apache.cordova.device": "0.2.11-dev"
}
// BOTTOM OF METADATA
});