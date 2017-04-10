YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Main",
        "Router",
        "git.js",
        "httpApi"
    ],
    "modules": [
        "helper",
        "lisk"
    ],
    "allModules": [
        {
            "displayName": "helper",
            "name": "helper",
            "description": "Express.js router wrapper"
        },
        {
            "displayName": "lisk",
            "name": "lisk",
            "description": "Main entry point.\nLoads the lisk modules, the lisk api and run the express server as Domain master.\nCLI options available"
        }
    ],
    "elements": []
} };
});