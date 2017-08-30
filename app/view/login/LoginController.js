Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onSignUp: function() {
        window.open('https://app.agribotix.com/register','_blank');
    },

    onLogin: function() {
        var form = this.getView();
        if (!form.isValid())
            return;
        var values = form.getValues();

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.
        Ext.Ajax.request({
            url: 'http://agribotix.ngrok.io/api/v3/user/validate',
            method: 'POST',
            format: 'json',
            cors: false,
            headers: {
                'Authorization': "Token INSERTTOKENHERE"
            },
            useDefaultXhrHeader: false,
            
            params:{
                email: values.email,
                password: values.password
            },
            
            callback: function(options, success, response) {
                if (success) {
                    var obj = Ext.JSON.decode(response.responseText);
                    // Add our key
                    localStorage.setItem("FarmLensAPIKey", obj.access_token);
                    // Destroy the login form
                    form.destroy();
                    // Load up our main page
                    Ext.Viewport.add([{
                        xtype: 'app-main'
                    }]);
                } else {
                    Ext.toast('You did not provide a valid email/password.');
                }
            }
        });

    }
});