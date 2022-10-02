<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(): JsonResponse {
        $most_conversion_user = '';
        $total_converted_amount = 0;
        $third_max_transaction = 0;
        $total_received_amount = 0;
        $currency = '';
        $user = auth('sanctum')->user();
        if($user) {
            $currency = $user->currency;
            $total_converted_amount = Wallet::where('sender_id', $user->id)->sum('sender_amount');
            $total_received_amount = Wallet::where('receiver_id', $user->id)->sum('receiver_amount');
            $third_max_transaction_query = DB::select( DB::raw("select max(sender_amount) as amount from wallets where sender_id = '$user->id' and sender_amount < (select max(sender_amount) from wallets where sender_amount < (select max(sender_amount) from wallets))") );
            $third_max_transaction = isset($third_max_transaction_query) && $third_max_transaction_query[0]->amount != null? $third_max_transaction_query[0]->amount : 0;
        }

        //most conversion user
        $most_conversion_transaction = DB::select( DB::raw(("SELECT COUNT(sender_id) as total, sender_id FROM wallets GROUP by sender_id ORDER by total DESC LIMIT 1;") ));
        if(count($most_conversion_transaction)) {
            $sender_id = $most_conversion_transaction[0]->sender_id;
            $most_conversion_user = User::findOrFail($sender_id);
        }

        return response()->json(
            [
                'total_converted_amount' => $total_converted_amount,
                'third_max_transaction' => $third_max_transaction,
                'currency' => $currency,
                'most_conversion_user' => $most_conversion_user,
                'total_received_amount' => $total_received_amount
            ]
        );
    }
}
