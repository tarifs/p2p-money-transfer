<?php

namespace App\Http\Requests\SentMoney;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'sender_amount' => ['required', 'min:1'],
            'sender_currency' => ['required'],
            'sender_id' => ['required'],
            'receiver_id' => ['required'],
        ];
    }
}
