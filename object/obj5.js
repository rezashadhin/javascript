function Person(name,age,skill,other){
    this.name = name;
    this.age = age;
    this.skill = skill;
    this.other = other;

}
Person.prototype.hello =function(){
    console.log(this.name, this.skill, this.other);
};
Person.prototype.hello2 =function(){
    console.log(this.name, this.skill, this.other);
};
Person.prototype.hello3 =function(){
    console.log(this.name, this.skill, this.age);
};
var a1 =new Person('Shadhin reza',30,'javascript','reading');
var a2 =new Person('Towhid islam',34,'java','traveling');
var a3 =new Person('Monir Hossain',40,'PHP','servent');
var arr =[a1,a2,a3];


a1.hello3();