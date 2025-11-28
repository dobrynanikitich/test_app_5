// Initialize Bootstrap components after Turbolinks loads
// Bootstrap 4 uses jQuery plugins
$(document).on('turbolinks:load', function() {
  // Re-initialize dropdowns after Turbolinks navigation
  // Bootstrap should work automatically, but we ensure it's ready
  $('[data-toggle="dropdown"]').dropdown();
  
  // Re-initialize collapse for navbar toggle
  $('[data-toggle="collapse"]').collapse();
});

