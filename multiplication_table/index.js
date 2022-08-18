var max = 9;
for(var i = 1; i <= max; i++){
    var line = '';
    for(var j = 1; j <= i; j++){
        product = i * j;
        line = line + i + "*" + j + "=" + product + " ";
    }
    console.log(line)
}