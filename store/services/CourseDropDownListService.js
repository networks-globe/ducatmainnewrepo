export async function getCourseDropDownListAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/course-dropdown-list",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
