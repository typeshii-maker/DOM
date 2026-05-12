//get the class
document.getElementsByClassName("DOM_Header")[0].innerHTML="I am learning DOM and Events";

//change the entire element to a different element

document.getElementsByClassName("DOM_Header")[1].innerHTML="Am in class";

//changing the content on the first paragragh
document.getElementById("first paragragh").textContent="My DOM is working"

function new_plaintext(){
    const p =document.createElement('p');
    p.textContent = "our JS events are working";
    document.getElementsByTagName('body')[0].appendChild(p);
}
function new_plaintext2(){
    document.getElementsByClassName("change-color")[0].style.color ="red"
}
//function to display enter

function showvalue(){
    let name=document.getElementById("username").value;
    
    alert(name)
}