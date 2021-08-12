# Same Atom themes, now synced with your system.

![Animation between light and dark mode](https://user-images.githubusercontent.com/19882060/129186100-b5e8156a-dd3d-4dc3-8db4-737d261748ae.png)

I use both light and dark mode regularly: light mode in the daytime and dark mode at night. macOS makes this super simple by automatically switching between modes based on the time of day, and many apps (including all built-in apps and most third-party apps like Discord and GitHub Desktop) sync their local light/dark mode preference with the operating system. That is, ***except for Atom!!***

Atom has very good light and dark mode themes, but no built-in way to sync the current theme with your macOS settings — forcing me to manually switch the Atom theme twice a day. Thankfully, Atom features an extensive [package library](https://atom.io/packages) and [API](https://flight-manual.atom.io/api/v1.57.0/AtomEnvironment/) to extend its base capabilities, which I made use of here!

This might be the smallest repo I've ever made on GitHub, but will definitely prove to be one of the most helpful! :atom:

## How it works (if you're curious)
Atom is based on Electron, a framework for creating desktop apps with the same technologies used to make websites: HTML, CSS, and JavaScript. As such, creating an Atom package is similar to a browser extension, where you add your own JavaScript code to run alongside the existing code.

To check whether macOS is currently in light or dark mode when launching Atom, you check if the current state matches a _media query_ that specifies dark mode:
```javascript
window.matchMedia('(prefers-color-scheme: dark)').matches // returns true or false
```
Then, you modify Atom's global config variable with the requested theme.

You'll also need an event listener to check when the user (or macOS itself) changes the system theme. For that, you'll need an `onchange` property for the media query, and pass in an anonymous function to specify what behavior you want:
```javascript
window.matchMedia('(prefers-color-scheme: dark)').onchange = () => { /* function behavior here */ }
```
