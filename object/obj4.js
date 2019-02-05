function Obj() {
    this.name = 'Shadhin reza';
    this.profession ='Developer';
    this.age = 22;
    this.skill = 'js and html';
    this.print =function(){return this.name +' Iam a professional web '+this.profession+' Iam '+this.age+ ' years old'};
}
var nam =new Obj();
console.log(nam.print());

// This is not uses an arguments for create object.other hand iam create only one method create  object for beginner js object l