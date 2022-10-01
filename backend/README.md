# Project Installation

## Let's start

First, make sure you have Docker installed on your PC. Then open a terminal in the project directory.

Generate the docker env file 

    cp dockerfiles/.env.example dockerfiles/.env

Create docker containers

    docker-compose up -d

Open php container shell in interactive mode

    docker-compose exec php sh

Install all the dependencies using composer

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example.dev .env

Generate a new application key

    php artisan key:generate

Run the database migrations

    php artisan migrate

You can now access the server at

    http://localhost:8888

You can now access the PhpMyAdmin server at

    http://localhost:8088
