var application = require("application");

var Toast = {};

'use strict'

Toast.MakeToast = (text) => {
    android.widget.Toast.makeText(
        application.android.context,
        text,
        android.widget.Toast.LENGTH_SHORT
    ).show();
}

module.exports = Toast;