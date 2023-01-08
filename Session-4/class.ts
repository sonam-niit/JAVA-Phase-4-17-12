export class Employee{

    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    display():void{
        console.log("Id: "+this.id)
        console.log("Name: "+this.name)
    }
    getId():number{
        return this.id;
    }
}