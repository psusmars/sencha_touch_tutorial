Ext.define('MyApp.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    controller: 'login',
    title: 'Sign In to FarmLens',

    bodyPadding: 20,

    viewModel: {
        data: {
            email: '',
            password: ''
        }
    },

    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'Email',
        name: 'email',
        bind: '{email}',
        placeholder: 'email',
        allowBlank: false,
        listeners: {
            action: 'onLogin'
        }
    }, {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Password',
        name: 'password',
        bind: '{password}',
        placeholder: 'password',
        allowBlank: false,
        listeners: {
            action: 'onLogin'
        }
    }, {
        xtype: 'checkbox',
        boxLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: [{
        xtype: 'button',
        text: 'Sign Up',
        handler: 'onSignUp'
    },{
        xtype: 'button',
        text: 'Login',
        bind: {
            disabled: '{!email || !password}',
        },
        handler: 'onLogin'
    }]
});