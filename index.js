const buttonClick = document.getElementById("info");
buttonClick.addEventListener('click',myFunction);
const fullName =[];
function myFunction(e) {
    e.preventDefault()
    const first = document.querySelector('#fname').value
    const second = document.querySelector('#sname').value
    fullName.push(first,second)
    console.log(first)
}
console.log(fullName);

