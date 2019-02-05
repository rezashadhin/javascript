
var me ={
    name : 'Shadhin reza',
    age : 30,
    email : 'tarunna147@gmail.com'
};

function main3(person,callback){
    console.log('Your name and age :'+person.name+' '+'('+person.age+')');
    if(person.age >=18){
        callback(person.email);
        
    }else{
        console.log('You are so little ');
        
    }
    
}
main3(me,function(email){
    if(email===email){
        console.log('Send to :'+email);
        
    }else{
        console.log('Failed');
        
    }
});