var smartPhones =[
    'iphone','ipod',
    'windows ce',
    'android','blackberry',
    'nokia','webos',
    'opera mini','sonyerricsson',
    'opera mobi', 'iemobile'
];

for (var i in smartPhones){
    if (navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))){
        document.location = 'm/index.html';
    }
} 

