{
    interface ToDo{
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }
    const getTodo = async():Promise<ToDo>=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const data:ToDo = await response.json();
        return data;
        // console.log(data);
    }

    getTodo();

    interface Something  {something:string};
    const createPromise = ():Promise<Something>=>{
        return new Promise<{something: string}>((resolve, reject)=>{
            const data:Something = {something:"Hello"};

            if(data){
                resolve(data);
            }else{
                reject("failed to fetch data");
            }
        });
    };

    const ShowData = async():Promise<Something>=>{
        const data:Something = await createPromise();
        // console.log(data);
        return data;
    }

    // console.log(ShowData());
}