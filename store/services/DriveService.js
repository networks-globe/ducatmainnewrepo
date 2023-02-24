export async function getDriveAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/drive",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
