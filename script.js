function temperature(){
    var ans
    if(num.value==''){
        alert("Please Enter any Number....")
        location.clear()
    }
    if(opt1.value=='celcius' && opt2.value=='celcius'){
       ans=parseInt(num.value)
        myresult.innerHTML=ans.toFixed(3) + ` &deg;C`
    }
    if(opt1.value=='celcius' && opt2.value=='fahrenheit'){
        ans=parseInt(num.value)*(9/5)+32
        myresult.innerHTML=ans.toFixed(3) + ` F`
    }
    if(opt1.value=='celcius' && opt2.value=='kelvin'){
        ans=parseInt(num.value)+273.15
        myresult.innerHTML=ans.toFixed(3) + ` K`
    }

    if(opt1.value=='fahrenheit' && opt2.value=='fahrenheit'){
        ans=parseInt(num.value)
        myresult.innerHTML=ans.toFixed(3) + ` F`
    }
    if(opt1.value=='fahrenheit' && opt2.value=='celcius'){
        ans=(parseInt(num.value)-32)*5/9
        myresult.innerHTML=ans.toFixed(3) + ` &deg;C`
    }
    if(opt1.value=='fahrenheit' && opt2.value=='kelvin'){
        ans=(parseInt(num.value)-32)*(5/9)+273.15
        myresult.innerHTML=ans.toFixed(3) + ` K`
    }

    if(opt1.value=='kelvin' && opt2.value=='kelvin'){
        ans=parseInt(num.value) 
        myresult.innerHTML=ans.toFixed(3) + ` K`
    }
    if(opt1.value=='kelvin' && opt2.value=='fahrenheit'){
        ans=parseInt(num.value)-273.15*(9/5)+32
        myresult.innerHTML=ans.toFixed(3) + ` F`
    }
    if(opt1.value=='kelvin' && opt2.value=='celcius'){
        ans=parseInt(num.value)-273.15
        myresult.innerHTML=ans.toFixed(3) + ` &deg;C`
    }
 
}

function cleardata(){
    if(confirm("Are you sure want to reset the converter?")){
        document.getElementById("num").value = ""
        document.getElementById("myresult").innerHTML = ""
}
}