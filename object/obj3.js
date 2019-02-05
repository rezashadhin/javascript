function Person(name,profession,skill,age,nationality){
    this.name =name;
    this.profession=profession;
    this.skill =skill;
    this.age =age;
    this.nationality=nationality;
    this.like ='Tv and Media';
    
}
Person.prototype.print =function(){return this.name+' '+this.profession+' '+this.like};
Person.prototype.print2 =function(){return this.name+' '+this.skill+' '+this.age};
var myFather =new Person('Shadhin reza','Student','[java, javascript]',22,'Bangladesh');
var mySister =new Person('Aysha','Student','[C++, kotlin]',12,'Bangladesh');
var other =new Person('Siddique','Student','[netler, Ruby]',17,'Bangladesh');


console.log(mySister.print2());