<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\DB;
use App\Models\Company;

class SocialiteController extends Controller
{
    public function redirectToGoogleProvider()
    {
        return Socialite::driver('google')->with([
            'access_type' => 'offline',
            'prompt' => 'consent',
        ])->redirect();
    }

    public function handleProviderCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
        } catch (\Exception $e) {
            Log::error($e);
            return redirect('/login')->with('error', 'Falha ao autenticar com Google');
        }

        DB::transaction(function () use ($googleUser) {
            $company = Company::updateOrCreate(
                ['name' => $googleUser->name],
                ['name' => $googleUser->name],
            );

            $user = User::updateOrCreate(
                ['google_id' => $googleUser->id],
                [
                    'company_id' => $company->id,
                    'name' => $googleUser->name,
                    'email' => $googleUser->email,
                    'google_token' => $googleUser->token,
                    'google_refresh_token' => $googleUser->refreshToken,
                    'password' => bcrypt(Str::random(16)),
                ]
            );

            Auth::login($user, true);

            session(['login_google' => true]);
            session()->save();
        });

        return to_route('dashboard');
    }
}
