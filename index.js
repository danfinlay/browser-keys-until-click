function keyPressesUntilClick (cb) {
  window.addEventListener('keydown', cb);
  window.addEventListener('click', removeTheseListeners);

  function removeTheseListeners () {
    window.removeEventListener('keydown', cb);
    window.removeEventListener('click', removeTheseListeners);
  }
}

module.exports = keyPressesUntilClick;
