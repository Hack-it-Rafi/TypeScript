{
    // Utility types
    
    type Person = {
        name: string;
        age: number;
        email?:string;
        Contact: number
    }

    // Pick 
    type Name = Pick<Person,"name"|"age">;

    // Omit 
    type contactInfo = Omit<Person,"name"|"age">;

    // Required
    type PersonRequired= Required<Person>;

    // Partial
    type PersonPartial = Partial<Person>;

    // ReadOnly
    type PersonReadOnly = Readonly<Person>;
    const Person1:PersonReadOnly = {
        name: "Rafi",
        age:24,
        Contact:17
    }
    // Person1.age = 23;

    // Record
    type myObj = Record<string,string>

    const obj1:myObj = {
        a:"aa",
        b:"bb",
        c:"cc"
    }

    const EmptyObj: Record<string,unknown> = {};
}