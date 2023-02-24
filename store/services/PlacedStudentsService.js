export async function getPlacedStudentsAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/placed-student",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
