<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Dashboard\DashboardController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Wallet\WalletController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['as' => 'api.'], function () {
    Route::post('/login', [LoginController::class, 'login'])->name('login');
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout')->middleware('auth:sanctum');
});


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/dashboard', [DashboardController::class, 'index']);
    Route::post('/send-money', [WalletController::class, 'sendMoney']);
});

Route::get('/most-conversion', [HomeController::class, 'index']);
