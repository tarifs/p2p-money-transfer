<?php

namespace App\Services;

use App\Models\User;
use App\Models\Wallet;

class SendMoneyService {
    public function store($request) {
        // find user
        $user = User::findOrFail($request->sender_id);
        if($user) {
            return Wallet::create([
                'amount'    => $request->amount,
                'receiver_id'    => $request->receiver_id,
                'sender_id'    => $request->sender_id,
                'currency'    => $user->currency,
            ]);
        }
        return false;
    }
}
