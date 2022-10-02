<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TransactionConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;
    public $wallet;

    /**
     * Create a new message instance.
     *
     * @param $wallet
     */
    public function __construct($wallet)
    {
        $this->wallet = $wallet;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Transaction confirmation mail')
            ->from(config('mail.from.address'))
            ->markdown('emails.transaction_confirmation')
            ->with('wallet', $this->wallet);
    }
}
