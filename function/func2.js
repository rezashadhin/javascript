function callback(name,pinik){
    pinik(name);
}
callback('shadhin_reza', function(name){
    console.log('My name is '+name);

});
callback('abdul karim', function(name){
    console.log('My name is '+name);

});
callback('shadhin_reza', function(name){
    console.log('length of shadhin reza  '+name.length);
});