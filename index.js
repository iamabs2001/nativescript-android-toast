var application = require("application");

var Toast = {};

'use strict'

Toast.MakeToast = (text, duration) => {
    
    let toast_lenght = android.widget.Toast.LENGTH_SHORT;

    if(duration === "long") {
        toast_lenght = android.widget.Toast.LENGTH_LONG;
    }
    android.widget.Toast.makeText(
        application.android.context,
        text,
        toast_lenght
    ).show();
}

module.exports = Toast;