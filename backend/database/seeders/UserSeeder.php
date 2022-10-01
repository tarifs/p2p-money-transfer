<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      => 'admin',
            'email'     => 'admin@gmail.com',
            'password'  => Hash::make('12345678'),
            'phone'     => '22334455',
            'email_verified_at' => Carbon::now(),
            'role_type' => \App\Enums\RoleType::ADMIN->value,
            'is_active' => \App\Enums\ActiveStatus::ACTIVE->value
        ]);
    }
}
