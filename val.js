const obj ={
    firstname:"Aman",
    printname: function (){
        console.log(this);

      
    },
     printname2:()=>{
          console.log(this.firstname);
     }
}
const obj2 ={
    firstname:"simran"
}
obj.printname()
obj.printname2()
obj.printname.call()
obj.printname2.call()