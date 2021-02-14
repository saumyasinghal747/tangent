// https://stackoverflow.com/a/30197438

// define a new console
let console = (function (oldCons) {
  return {
    log: function (text) {
      oldCons.log(
        "%cTANGENT",
        "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;",
        text
      )
      // Your code
    },
    info: function (text) {
      oldCons.info(text)
      // Your code
    },
    warn: function (text) {
      oldCons.warn(text)
      // Your code
    },
    error: function (text) {
      oldCons.error(text)
      // Your code
    },
  }
})(window.console)

//Then redefine the old console
//window.console = console;
