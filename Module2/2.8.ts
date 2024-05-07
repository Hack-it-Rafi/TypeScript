{
    const createPromise = ()=>{
        return new Promise((resolve, reject)=>{
            const data:string = "Something";

            if(data){
                resolve(data);
            }else{
                reject("failed to fetch data");
            }
        });
    };

    const ShowData = async()=>{
        const data = await createPromise();
        console.log(data);
    }

    ShowData();
}