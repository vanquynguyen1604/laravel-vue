let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    // Config
    .webpackConfig({
        resolve: {
            alias: {
                User: path.resolve(__dirname, 'resources/js/user'),
            }
        },
    })
    .options({
        processCssUrls: false
    })

    // User Page
    .sass(
        "resources/views/user/auth/login.scss",
        "public/mix/css/user/login.css"
    )

    .js(
        'resources/js/user/index.js',
        'public/mix/js/user/user.js'
    )

    .version();

