<?php
usleep(500000);


$data =  [
        [
            'idProduct'=> 1,
            'title'=> 'Iphone 5',
            'price'=> 2000

        ],
        [
            'idProduct'=> 2,
            'title'=> 'Iphone 6',
            'price'=> 2500

        ],
        [
           'idProduct'=> 3,
           'title'=> 'Iphone 7',
            'price'=> 3000

        ]
    ];
echo json_encode($data);