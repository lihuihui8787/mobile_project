var ratio = 1 / window.devicePixelRatio;

document.write('<meta name="viewport" content="width=device-width,initial-scale='+ratio+',minimum-scale='+ratio+',maximum-scale='+ratio+',user-scalable=no" />')

var size = document.documentElement.clientWidth / 10;

document.getElementsByTagName('html')[0].style.fontSize = size + 'px';