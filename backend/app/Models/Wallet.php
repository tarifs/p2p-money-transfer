<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;

    protected $fillable = ['sender_amount', 'receiver_amount', 'receiver_id', 'sender_id', 'sender_currency', 'receiver_currency'];
}
