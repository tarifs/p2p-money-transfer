@component('mail::message')
# Hello,

You have received {{ $wallet->receiver_amount }} {{ strtoupper($wallet->receiver_currency) }}

Thanks,<br>
P2P Money Transfer
@endcomponent
