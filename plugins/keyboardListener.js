window.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 68:
      console.log("D")
      this.$store.setLeft()
      break
  }
});
