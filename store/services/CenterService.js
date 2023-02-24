export async function getCenterAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/center",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
