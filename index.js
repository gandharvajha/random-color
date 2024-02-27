const getcolor =() =>{
    const randomNumber=Math.floor(Math.random()*16777215);
    // console.log(randomNumber);
    const randomcode=("#" + randomNumber.toString(16));
   
    document.getElementById("color-code").innerHTML=randomcode;
    document.body.style["background-color"] = randomcode;
}
document.getElementById("btn").addEventListener("click",getcolor);

getcolor(); 