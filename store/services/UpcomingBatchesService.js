export async function getUpcomingBatchesAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/upcoming-batches",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
