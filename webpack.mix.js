const mix = require('laravel-mix');
mix.sass('resources/sass/app1.scss', 'public/css').options({processCssUrls: false});
mix.sass('resources/sass/app2.scss', 'public/css').options({processCssUrls: false});
mix.sass('resources/sass/app3.scss', 'public/css').options({processCssUrls: false});