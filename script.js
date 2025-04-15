let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    const loader = document.querySelector(".loader");
    loader.classList.remove("hidden");

    setTimeout(() => { 
        // Hide the loader after 3 seconds 
        loader.classList.add('hidden'); 
    }, 1000);
})