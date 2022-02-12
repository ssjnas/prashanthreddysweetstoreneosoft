let erroNode=document.getElementById("error1")
let fnameNode=document.getElementById("fname")
let invalidBorder="4px solid red"
let validBorder="5px green solid"


function validate1(){
    let Fname=fnameNode.value
    erroNode.textContent=""
   

    if(Fname===""){
         erroNode.textContent="First name Required"
         erroNode.innerHTML="<b>First Name Required</b>"
         fnameNode.style.border=invalidBorder
    }
    else{
        fnameNode.style.border=validBorder
    }

}

let lnameNode=document.getElementById("lname")
let erroNode2=document.getElementById("error2")
function validate2(){
    let Lname=fnameNode.value
    erroNode2.textContent=""

    if(Lname===""){
         erroNode2.textContent="Last name Required"
         erroNode2.innerHTML="<b>Last Name Required</b>"
         lnameNode.style.border=invalidBorder
    }
    else{
        lnameNode.style.border=validBorder
    }

}

let emailNode=document.getElementById("emailId")
let erroNode3=document.getElementById("error3")
function validate3(){
    let emailNode1=emailNode.value

    erroNode3.textContent=""
    let after1=emailNode1.substring(emailNode1.indexOf("@")+1)
    let result2=emailNode1.includes("@") && after1!==""
    if(emailNode1===""){
         erroNode3.textContent="email Required"
         erroNode3.innerHTML="<b>email Required</b>"
         emailNode.style.border=invalidBorder
    }
    else if (result2===false){
        erroNode3.textContent="Invalid email"
        emailNode.style.border=invalidBorder
        
    }
    else{
        emailNode.style.border=validBorder
    }

}

let mblNode=document.getElementById("mbl")
let erroNode4=document.getElementById("error4")
function validate4(){
    let mblNode1=mblNode.value
    erroNode4.textContent=""

    let regexp=new RegExp("^[0-9]{10}$")
    let result=regexp.test(mblNode1)


    if(mblNode1===""){
         erroNode4.textContent="mobile num Required"
         erroNode4.innerHTML="<b>mobile num Required</b>"
         mblNode.style.border=invalidBorder
    }
    else if(result===false){
        erroNode4.textContent="Please enter valid mobile number"
        mblNode.style.border=invalidBorder
    }
    else{
        mblNode.style.border=validBorder
    }
}



let dropNode=document.getElementById("sweetslist")
let erroNode5=document.getElementById("error5")
function validate5(){
    let dropNode1=dropNode.value
    erroNode5.textContent=""

    


    if(dropNode1===""){
         erroNode5.textContent="one selection required"
         dropNode.style.border=invalidBorder

    }

    else{
        dropNode.style.border=validBorder
    }
}

function formValidate(){
    let str1=validate1()
    let str2=validate2()
    let str3=validate3()
    let str4=validate4()
    let str5=validate5()
    
    console.log(str1+" "+str2+" "+str3+" "+str4+" "+str5)
    return (str1 && str2 && str3 && str4 && str5 )

}