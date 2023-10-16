console.log(`hello`);
// this refers to as window
console.log(this);

const obj1 ={
    // in normal function this refers to as current  object
    firstname:"Aman",
    fn:function() {
        console.log(this);
        console.log(this.firstname);
    },
    // in arrow function this refers to as  window 
    fn2:()=>{
        console.log(this);
        console.log(this.firstname);
    }
}
obj1.fn()
obj1.fn2()

// this refers to as window
function x(){
console.log(this);
}
x()


// this refers to global window
const y = ()=>{
    console.log(this);
}
y()

const person1 ={
    name:"aman",
    print: function(){
        console.log(this);
    }
}
const person2 ={
    name:'simran'
}

x.call(person1)
x.call(person2)
person1.print()
person1.print.call()
person1.print.call(this)
person1.print.call(person2)




