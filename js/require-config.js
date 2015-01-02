// Creates Require configuration for System, a multi-style module loader
// Add shortcuts to libraries by defining them in paths
System.config({
    // set all requires to "lib" for library code
    baseURL: '/',
    // set "app" as an exception for our application code
    paths: {
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min.js',
        'jquery': 'lib/jquery/dist/jquery.min.js',
        'selectboxit': 'lib/jquery.selectBoxIt/src/javascripts/jquery.selectBoxIt.js',
        'daterangepicker': 'lib/bootstrap-daterangepicker/daterangepicker.js'
    }
});
System.map['css'] = 'css';
System.meta['bootstrap-slider'] = { deps: ['jquery'] };

// Look for data-main on a script tag to load as here: requirejs.org/docs/api.html#jsfiles
if ((mainjs = document.querySelector('[data-main]').getAttribute('data-main'))) {
    System.import(mainjs.replace('.js', ''));
}

// Use System.import to bring in javascript files needed on every page
//System.import('css/menu.js');
//System.import('css/menu.css!');
