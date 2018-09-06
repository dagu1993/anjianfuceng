$(clickMe).on('click', function() {
  $(popover).show()
  setTimeout(function() {
    $(document).one('click', function() {
      $(popover).hide()
    })
      $(clickMe).on('click', function() {
      $(popover).hide()
    })
  }, 0)
})

 $(wrapper).on('click', function(e) {
      e.stopPropagation()
    })