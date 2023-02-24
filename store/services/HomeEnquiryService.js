export async function addHomeEnquiryAPI(data){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/home-enquiry",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
