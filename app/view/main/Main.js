Ext.define('MyApp.view.main.Main',{
    extend: 'Ext.tab.Panel',
    controller: 'main',
    cls: 'main',
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
        cls: 'home',
        html: '<h1 class="banner">Hello World!</h1>',
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
        title: 'Notifications',
        xtype: 'notifications'
    }, {
        title: 'Settings'
    }]
});