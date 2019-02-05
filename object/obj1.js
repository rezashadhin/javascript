function Person(fsname,lsname,prof,age){
    this.fsname = fsname;
    this.lsname = lsname;
    this.prof = prof;
    this.age = age;
}
Person.prototype.amar =function(){
    return this.fsname+' '+this.lsname+' '+'he is a '+this.prof;
}
Person.prototype.ses =function(){
    return this.fsname+ ' '+ this.lsname+' '+this.age;
}
Person.prototype.sess =function(){
    return this.fsname+ ' '+ this.lsname+' '+this.age+' '+'My Id is: '+this.id;
}



function Student(fsname,lsname,prof,age, id){
    Person.call(this,fsname,lsname,prof,age);
    this.id = id;
}
Student.prototype =Object.create(Person.prototype);
var ami = new Student('Shadhin','Reza','Webdeveloper',22, 1442);
console.log(ami.ses());
console.log(ami.sess());
console.log(ami.amar());