<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Wallet;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(): JsonResponse {
        $total_converted_amount = 0;
        $third_max_transaction = 0;
        $user = auth('sanctum')->user();
        if($user) {
            $total_converted_amount = Wallet::where('sender_id', $user->id)->sum('sender_amount');
            $third_max_transaction_query = DB::select( DB::raw("select max(sender_amount) as amount from wallets where sender_amount < (select max(sender_amount) from wallets where sender_amount < (select max(sender_amount) from wallets))") );
            $third_max_transaction = $third_max_transaction_query? $third_max_transaction_query[0]->amount : 0;
        }

        return response()->json(
            [
                'total_converted_amount' => $total_converted_amount,
                'third_max_transaction' => $third_max_transaction
            ]
        );
    }
}
