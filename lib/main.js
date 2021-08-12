'use babel';

export default {

  activate(state) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
    else {
      setMode('light');
    }

    window.matchMedia('(prefers-color-scheme: dark)').onchange = (e) => {
      if (e.matches) {
        setMode('dark');
      }
      else {
        setMode('light');
      }
    }
  }

};

// mode is either 'dark' or 'light'
function setMode(mode) {
  atom.config.set('core.themes', [`one-${mode}-ui`, `one-${mode}-syntax`]);
}
