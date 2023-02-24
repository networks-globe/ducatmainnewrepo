export async function getCourseCategoryAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/course-category",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
