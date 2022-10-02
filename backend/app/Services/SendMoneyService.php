<?php

namespace App\Services;

use App\Mail\TransactionConfirmationMail;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Support\Facades\Mail;

class SendMoneyService {

    protected $currencyConverterService;

    public function __construct() {
        $this->currencyConverterService = app(CurrencyConverterService::class);
    }

    public function store($request) {
        try {
            // find receiver user
            $receiver_user = User::findOrFail($request->receiver_id);
            if($receiver_user) {
                // convert currency
                $response = $this->currencyConverterService->convert($request->sender_currency, $receiver_user->currency, $request->sender_amount);
                $converted_amount = number_format($response['result'], 2);
                $wallet = Wallet::create([
                    'sender_amount'    => $request->sender_amount,
                    'receiver_amount'    => $converted_amount,
                    'receiver_id'    => $request->receiver_id,
                    'sender_id'    => $request->sender_id,
                    'sender_currency'    => $request->sender_currency,
                    'receiver_currency'    => $receiver_user->currency,
                ]);
                //confirmation mail
                Mail::to($receiver_user->email)->send(new TransactionConfirmationMail($wallet));
                return true;
            }
        }catch(\Exception $e) {
            return false;
        }
    }
}
