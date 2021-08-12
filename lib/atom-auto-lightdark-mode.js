'use babel';

import AtomAutoLightdarkModeView from './atom-auto-lightdark-mode-view';
import { CompositeDisposable } from 'atom';

export default {

  atomAutoLightdarkModeView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomAutoLightdarkModeView = new AtomAutoLightdarkModeView(state.atomAutoLightdarkModeViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomAutoLightdarkModeView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-auto-lightdark-mode:toggle': () => this.toggle()
    }));

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      atom.config.set('core.themes', ['one-dark-ui', 'one-dark-syntax']);
    }
    else {
      atom.config.set('core.themes', ['one-light-ui', 'one-light-syntax']);
    }

    window.matchMedia('(prefers-color-scheme: dark)').onchange = (e) => {
      if (e.matches) {
        atom.config.set('core.themes', ['one-dark-ui', 'one-dark-syntax']);
      }
      else {
        atom.config.set('core.themes', ['one-light-ui', 'one-light-syntax']);
      }
    }
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomAutoLightdarkModeView.destroy();
  },

  serialize() {
    return {
      atomAutoLightdarkModeViewState: this.atomAutoLightdarkModeView.serialize()
    };
  },

  toggle() {
    console.log('AtomAutoLightdarkMode was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
