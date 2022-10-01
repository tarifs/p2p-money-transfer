<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CurrencyConverterService {

    public function convert($from, $to, $amount) {
        // currency convert api call
        return Http::withHeaders([
            "Content-Type" => "application/json",
            "apikey" => "jgczpDgYj590zlaIZcIvsOf8Y8HRdwug"
        ])->get('https://api.apilayer.com/currency_data/convert', [
            'to' => $to,
            'from' => $from,
            'amount' => $amount
        ]);
    }
}
