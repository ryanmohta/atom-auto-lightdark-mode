'use babel';

export default {

  activate(state) {
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
  }

};
