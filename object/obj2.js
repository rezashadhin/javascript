function main(){
    console.log('Hello '+ this.name+'.'+' Your favorite hobby is: '+this.hobby+' and Your email is: '+this.email);
    
}

var obj1 = {
    name: 'Shadhin reza',
    age: 22,
    hobby: 'Traveling',
    email: 'tarunna147@gmail.com',
    setDate: 11/12/2018,
};


var obj2 = {
    name: 'Shadhin alom',
    age: 24,
    hobby: 'gardening',
    email: 'amar@gmail.com',
    setDate: 01/01/2019,
};
 var call =main.bind(obj2);
call();