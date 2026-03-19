<?php

use App\Http\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::get('/socialite/callback/google', [SocialiteController::class, 'handleProviderCallback'])
    ->name('socialite.callback');

Route::get('/socialite/redirect/google', [SocialiteController::class, 'redirectToGoogleProvider'])
    ->name('socialite.redirect');

require __DIR__ . '/settings.php';
