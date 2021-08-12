'use babel';

export default {

  activate(state) {
    isDark = window.matchMedia('(prefers-color-scheme: dark)')

    // On startup
    isDark.matches ? setMode('dark') : setMode('light')

    // On change
    isDark.onchange = (e) => e.matches ? setMode('dark') : setMode('light')
  }

};

// mode is either 'dark' or 'light'
function setMode(mode) {
  atom.config.set('core.themes', [`one-${mode}-ui`, `one-${mode}-syntax`]);
}
