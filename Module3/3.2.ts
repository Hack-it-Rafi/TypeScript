{
    class Person{
        name: string;
        age: number;
        address: string;

        constructor(name:string, age: number, address: string){
            this.name = name;
            this.address = address;
            this.age = age;
        }

        getSleep(numOfHours:number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Person{
        constructor(name:string, age:number, address:string){
            super(name,age,address);
        }
    }

    class Teacher extends Person{
        designation: string;

        constructor(name:string, age:number, address:string, designation: string){
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(numOfClass:number){
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }

    const teacher1 = new Teacher("Rafi", 24, "dhaka", "Sir");

    teacher1.takeClass(2);
}