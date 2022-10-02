<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        DB::table('users')->insert([
            [
                'name' => 'Jhon',
                'email' => 'jhon@gmail.com',
                'password' => bcrypt('12345678'),
                'currency' => 'usd',
            ],
            [
                'name' => 'Doe',
                'email' => 'doe@gmail.com',
                'password' => bcrypt('12345678'),
                'currency' => 'eur',
            ]
        ]);
    }
}
