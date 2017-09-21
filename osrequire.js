var os = require("os");

var tohr = function(v){
    return (v/1000/60);
}
console.log('HOST: '+os.hostname());
console.log('uptime: '+tohr(os.uptime()) +' Hrs');