
var fs = require('fs');

fs.readFile('old.txt',function(err,data) {
    if(err) throw err;
    var arr = data.toString();
    var reversed = '';
    
    for(i = arr.length-1; i >= 0; --i) {
        reversed += arr[i];
    }

fs.writeFile('new.txt',reversed, function (err) {
    if (err) throw err;
    console.log('success');
    });
});