{
    const arrOfNumbers:number[] = [1,2,3,4];

    const arrOfStrings:string[] = arrOfNumbers.map((number)=>number.toString());

    // console.log(arrOfStrings);

    type AreaNumber = {
        height: number;
        width: Number
    }

    // type AreaString = {
    //     [key in "height"|"width"]:string;
    // }
    type AreaString<T> = {
        [key in keyof T]:T[key];
    }

    const area1:AreaString<{height:string;width:number;depth?:number}>={
        height:"100",
        width:50,
        // depth:100
    }

    console.log(area1);
}