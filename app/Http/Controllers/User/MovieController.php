<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movie;

class MovieController extends Controller
{
    public function show(Movie $movie)
    {
        return Inertia::render('User/Dashboard/Movie/Show', [
            'movie' => $movie
        ]);
    }
}
