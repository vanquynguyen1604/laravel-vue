<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>HOME | LARAVEL-VUE</title>
    <link rel="shortcut icon" type="image/png" href="/logo.png"/>
</head>
<body>
    <div id="root"></div>
    <script defer async src="{{ mix('mix/js/user/user.js') }}"></script>
</body>
</html>
