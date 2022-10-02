<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_login_successful_if_valid_credential_provided()
    {
        $response = $this->post('api/login',[
            'email' => 'jhon@gmail.com',
            'password' => '12345678',
        ]);
        $response->assertStatus(200);
    }

    public function test_login_failed_if_wrong_credential_provided()
    {
        $response = $this->json('POST', 'api/login', ['email' => 'jhons@gmail.com', 'password' => '12345678'], ['Accept' => 'application/json']);
        $response->assertStatus(422);
    }
}
