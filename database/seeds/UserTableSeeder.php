<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(!User::count()) {
            User::create([
                'email' => 'viblo@framgia.com',
                'name' => 'Viblo',
                'password' => \Hash::make('12345678'),
                'is_super' => true,
            ]);
        }
    }
}
