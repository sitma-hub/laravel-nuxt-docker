<?php

return [

    'license_key' => env('NOVA_LICENSE_KEY', ''),
    'brand' => [
        'logo' => resource_path('/img/LogoMuench.svg'),
        'colors' => [
            "400" => "59, 133, 230, 0.5",
            "500" => "59, 133, 230",
            "600" => "59, 133, 230, 0.75",
        ]
    ],
];
