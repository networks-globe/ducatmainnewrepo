export async function getCMSAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/cms",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
