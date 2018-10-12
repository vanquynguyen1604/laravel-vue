<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Login - HR BOT </title>

    <link rel="shortcut icon" type="image/png" href="/logo.png"/>
    <link rel="stylesheet" type="text/css" href="{{ mix('mix/css/user/login.css') }}">
    <link rel="stylesheet" type="text/css" href=" https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css">
</head>
<body>
    <div class="main">
        <div class="main__content">
            <h1>Login</h1>
            <p>Sign in to your account</p>
            <form class="form-horizontal" method="POST" action="{{ route('user.login') }}">
                {{ csrf_field() }}
                <div class="main__email">
                    <span>@</span>
                    <input type="email" name="email" class="form-control" value="{{ old('email') }}" required autofocus>
                </div>
                @if ($errors->has('email'))
                    <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
                <div class="main__password">
                    <span><i class="icon-lock"></i></span>
                    <input type="password" name="password" class="form-control" value="{{ old('password') }}" required autofocus>
                </div>
                @if ($errors->has('email'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    </div>
</body>
</html>
