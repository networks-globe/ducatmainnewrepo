export async function getTestimonialAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/testimonials",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
