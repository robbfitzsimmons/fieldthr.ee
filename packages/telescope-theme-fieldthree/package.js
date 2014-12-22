Package.describe({
  summary: "Telescope FIELD3 theme",
  version: '0.1.0',
  name: "telescope-theme-fieldthree"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
    'lib/client/js/typekit.js'
    ], ['client']);

});