let uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"]
let lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"]
let numbers=["0","1","2","3","4","5","6","7","8","9"]
let symbols=["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]","|",":",";","<",">",".","?",
"/"]

let pass_1El=document.getElementById("pass_1")
let pass_2El=document.getElementById("pass_2")
let lengthEl=document.getElementById("length")
let uppercaseEl=document.getElementById("uppercase")
let lowercaseEl=document.getElementById("lowercase")
let numberEl=document.getElementById("numbers")
let symbolEl=document.getElementById("symbols")


function run(){
     pass_1El.textContent=""
     pass_2El.textContent=""
     let size=Number(lengthEl.value)
     if(size<0 || size===0){
     pass_1El.textContent="Please Enter Suitable Length"
     pass_2El.textContent=""
     return
     }
     let array=[]
     if(uppercaseEl.checked){
     for(let i=0;i<uppercase.length;i++){
     array.push(uppercase[i])
    }
    }
    if(lowercaseEl.checked){
    for(let i=0;i<lowercase.length;i++){
      array.push(lowercase[i])
    }
    }
    if(numberEl.checked){
    for(let i=0;i<numbers.length;i++){
      array.push(numbers[i])
    }
    }
    if(symbolEl.checked){
    for(let i=0;i<symbols.length;i++){
      array.push(symbols[i])
    }
    }
    if(array.length === 0){
    pass_1El.textContent="Select options"
    return
    }

    for(let i=0;i<size;i++){
        let pass=Math.floor(Math.random()*array.length)
        let passes=Math.floor(Math.random()*array.length)
        pass_1El.textContent+=array[pass]
        pass_2El.textContent+=array[passes]
    }
}
function copy_1(){
    navigator.clipboard.writeText(pass_1El.textContent)
    alert("Copied!")
}

function copy_2(){
    navigator.clipboard.writeText(pass_2El.textContent)
    alert("Copied!")
}
