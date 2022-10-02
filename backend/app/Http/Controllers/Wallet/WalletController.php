<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Requests\SentMoney\CreateRequest;
use App\Services\SendMoneyService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    protected SendMoneyService $sendMoneyService;

    public function __construct(SendMoneyService $sendMoneyService) {
        $this->sendMoneyService = $sendMoneyService;
    }

    public function sendMoney(CreateRequest $request) {
        $send_money = $this->sendMoneyService->store($request);
        if($send_money) {
            return response()->json([
                'status'  => 'success',
                'message' => 'Transaction successfully completed.',
            ]);
        }
        return response()->json([
            'status'  => 'error',
            'message' => 'Something went wrong. Please try again.',
        ]);
    }
}
