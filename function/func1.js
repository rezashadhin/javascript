function main(a){
    
    return{
        name: 'Shadhin reza',
        profession: 'web developer',
        age : 28,
        skill: ['Python', 'Javascript'],
        print: function(){
            
            console.log(this.name+' '+'Iam a '+this.profession+' '+'Iam '+this.age+' years old'+
            ' I achived '+this.skill+' Iam a '+a+ '.');
        }
        
    };
}
var obj =main('passonate developer');
obj.print();
// new way to push system testing..........