<?php

// default footer text
$footer_text = 'Имплантация зубов в Санкт-Петебурге (метро Звёздная) © 2019-'.date("Y").' DrKarasev.com - Никита Олегович Карасев.';

// allon4.php
if(basename($_SERVER['SCRIPT_NAME']) == 'allon4.php'){
	$footer_text = 'Имплантация зубов по методике All on 4 в Санкт-Петебурге (метро Звёздная)<br>© DrKarasev.com - Никита Олегович Карасев';
};

// prosthetics.php
if(basename($_SERVER['SCRIPT_NAME']) == 'prosthetics.php'){
	$footer_text = 'Протезирование зубов в Санкт-Петебурге (метро Звёздная) © DrKarasev.com - Никита Олегович Карасев';
};

// whitening.php
if(basename($_SERVER['SCRIPT_NAME']) == 'whitening.php'){
	$footer_text = 'Отбеливание зубов в Санкт-Петебурге (метро Звёздная) © DrKarasev.com - Никита Олегович Карасев';
};

// for_colleagues.php
if(basename($_SERVER['SCRIPT_NAME']) == 'for_colleagues.php'){
	$footer_text = 'Практические офис-курсы по хирургической стоматологии и имплантологии в Санкт-Петебурге (метро Звёздная)<br>© DrKarasev.com - Никита Олегович Карасев';
};

// education.php
if(basename($_SERVER['SCRIPT_NAME']) == 'education.php'){
	$footer_text = 'Зубная имплантология в Санкт-Петебурге (метро Звёздная)<br>© DrKarasev.com - Никита Олегович Карасев';
};


?>