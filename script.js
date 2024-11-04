function addToCart(){
    const notification=document.getElementById("notification");
    notification.classList.add("show");
    
    setTimeout(()=>{
        notification.classList.remove("show");
    
    })
 

}
