@component('mail::message')
# Hello,

It seems like you forget your password for <strong>{{ config('app.name') }}</strong>. Please click the following link to reset your password if this is true.

@component('mail::button', ['url' => config('app.frontend_url').'/auth/new-password?token='.$token])
Reset Password
@endcomponent

<br>
If you did not forget your password, please ignore this email.
<br>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
