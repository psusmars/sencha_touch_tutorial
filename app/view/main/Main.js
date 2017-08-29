Ext.define('MyApp.view.main.Main',{
    extend: 'Ext.tab.Panel',
    controller: 'main',
    requires: [
        'Ext.Button',
        'Ext.field.Text'
    ],

    viewModel: {
        data: {
            userName: ''
        }
    },

    items: [{
        title: 'Home',
        html: '<h1 class="main-banner">Hello World!</h1>',
        items: [{
            xtype: 'textfield',
            label: 'User name',
            bind: '{userName}',
            listeners: {
                action: 'onGo'
            }
        },
        {
            xtype: 'button',
            text: 'Go',
            handler: 'onGo',
            bind: {
                disabled: '{!userName}',
                text: '{userName ? "Save: " + userName : "Save"}'
            }
        }]
    }, {
        title: 'Notifications'
    }, {
        title: 'Settings'
    }]
});