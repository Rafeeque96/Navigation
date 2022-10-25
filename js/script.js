// Dom Elements
const menuHamburger = document.querySelector(".menu--hamburger")
const menuNav = document.querySelector(".menu--nav")
const menuNavItems = document.querySelectorAll(".menu--nav li")
let menuImgWrapperMedia = document.querySelector(".menu--img-wrapper img")


// Header Images
 const headerImages = [
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
]

const min =0 
const max = headerImages.length
menuImgWrapperMedia.setAttribute("src" , headerImages[0])

//show random images
menuNavItems.forEach(function (listItem){
    const RANDOM_NUMBER = Math.floor(Math.random()* (max - min + 1 )) + min;
    listItem.addEventListener("mouseenter", function(){
    menuImgWrapperMedia.setAttribute("src" , headerImages[RANDOM_NUMBER])
    menuImgWrapperMedia.style.cssText = `animation : slideIn 500ms forwards ease`    
    });
    listItem.addEventListener("mouseleave", function(){
        menuImgWrapperMedia.style.cssText = `animation: slideOut 500ms forwards ease`
    })
})

// Show menu
const showMenu = ()=>{
    menuNav.classList.toggle("active")
    
    if(menuNav.classList.contains("active")){
    menuNav.style.cssText = `animation: slideIn 2000ms forwards ease ;`
   menuNavItems.forEach(function(listItem , index){
       index = index + 1
       listItem.style.cssText = `animation: slideIn 1000ms forwards ease ;
       animation-delay: ${index * 100}ms
       `
   })
    }else{
        menuNavItems.forEach(function(listItem,index){
            listItem.style.cssText = `animation: slideOut 1000ms forwards ease ;
            animation-delay: ${index * 100}ms
            `
        })
        setTimeout(function(e){
            menuNav.style.cssText = `animation: slideOut 1000ms forwards ease ;`
        }, 1000)
        
    }
}

//Event Listenes
menuHamburger.addEventListener("click", showMenu)