<?php
namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    protected function guard()
    {
        return Auth::guard('web');
    }

    public function showLoginForm()
    {
        return view('user.auth.login');
    }

    /**
     * Get authentication information of an administrator.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticate()
    {
        $user = $this->guard()->user();
        if (!($user)) {
            return $this->responseBadRequest(['error' => trans('auth.deactived')]);
        }

        return $this->responseOk(['user' => $user]);
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        return redirect('/login');
    }
}
