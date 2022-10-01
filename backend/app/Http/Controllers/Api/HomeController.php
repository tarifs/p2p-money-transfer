<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index(): JsonResponse {
        $most_conversion_transaction = DB::select( DB::raw(("SELECT COUNT(sender_id) as total, sender_id FROM wallets GROUP by sender_id ORDER by total DESC LIMIT 1;") ));
        return response()->json($most_conversion_transaction);
    }
}
