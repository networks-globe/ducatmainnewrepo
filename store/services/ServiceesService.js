export async function getServiceAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/service",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
