const buttonClick = document.getElementById("info");
buttonClick.addEventListener('click', myFunction);
let fullName ="";
function myFunction(e) {
    e.preventDefault()
    const first = document.querySelector('#fname').value
    const second = document.querySelector('#sname').value
    fullName =`${first} ${second}`
    console.log(fullName)
    document.getElementById("viewer").textContent = fullName;
    
}
// const word = document.getElementById("word")



// document.addEventListener('click', (e)=>{
//     e.preventDefault()
//     if( e.target.id === "info"){
//         console.log("it is working")
//     }
//     else if(e.target.id === "redirect"){
        
//         console.log(document.getElementById('redirect').getAttribute("target","_blank") ) 
//         // word.style.display = "block"
        
//     //     setTimeout(() => {
//     //          word.style.display = "none"
//     //     }, 2000);
//      }
    
// })

// // const div = document.createElement("div")
