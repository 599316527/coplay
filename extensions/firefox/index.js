let buttons = require('sdk/ui/button/action');
let tabs = require('sdk/tabs');
let self = require('sdk/self');

let button = buttons.ActionButton({
  id: 'coplay',
  label: 'Activate coplay',
  icon: {
    '16': './coplay.png',
    '32': './coplay.png',
    '64': './coplay.png'
  },
  onClick: function () {
    let worker = tabs.activeTab.attach({
      contentScriptFile: self.data.url('./inject.js'),
      contentScriptOptions: {
        url: {
          'run.js': self.data.url('./run.js'),
          'peer.min.js': self.data.url('./peer.min.js'),
          'coplay.js': self.data.url('./coplay.js'),
          'coplay.css': self.data.url('./coplay.css')
        }
      }
    });
  }
});
