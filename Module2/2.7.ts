{
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle;

    const person1 : Owner2 = "car";

    const GetPropertyValue =<X,Y extends keyof X> (obj : X, key : Y)=>{
        return obj[key];
    }

    const user = {
        name: "Rafi",
        age: 24,
        address: "Bb"
    }

    const result1 = GetPropertyValue(user, "name");
}