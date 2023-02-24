export async function getCourseAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/course",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
