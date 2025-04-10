<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Insaf Ali',
            'email' => 'insaf.ali0825@gmail.com',
            'password' => Hash::make('Git@5145'),
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'azeeme',
            'email' => 'azeeme07@gmail.com',
            'password' => Hash::make('Azeeme@786'),
            'role' => 'vendor',
        ]);

        User::create([
            'name' => 'Atul',
            'email' => 'atul@gmail.com',
            'password' => Hash::make('Atul@123'),
            'role' => 'user',
        ]);
    }
}
