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
     let size=Number(lengthEl.value)//.value==>input field ke liye use hota hai==>Jo user type karta hai usko lene ke liye use hota hai
     if(size<0 || size===0){//Number()==>string ko number mein convert karne ke liye use hota hai
     pass_1El.textContent="Please Enter Suitable Length"
     pass_2El.textContent=""
     return//mtlab function yahi band code aage nhi chalega
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
// Math.random() ==> Yeh 0 se leke 0.999... ke beech ka koi bhi random decimal number deta hai (jaise 0.57, 0.12, etc.)
// * array.length ==> Jab hum random number ko array ki total length se multiply karte hain, toh hume 0 se array ki aakhri index tak ka number milta hai (jaise 0.57 * 20 = 11.4)
// Math.floor() ==> Yeh function kisi bhi decimal number ko round down karke ek seedha integer (whole number) bana deta hai (jaise 11.4 ban jayega 11, aur 11.9 bhi ban jayega 11).
// Aisa isliye karte hain kyunki array ka index hamesha whole number hota hai (0, 1, 2, 3...), decimals mein nahi hota.
        pass_1El.textContent+=array[pass]
        pass_2El.textContent+=array[passes]
    }
}
function copy_1(){
    navigator.clipboard.writeText(pass_1El.textContent)
    // .textContent → password le raha hai
    // clipboard.writeText() → copy kar raha hai
    alert("Copied!")//alert() = browser ka popup message
    //jab password copy ho jayega==>ek popup message aayega "Copied!"
}

function copy_2(){
    navigator.clipboard.writeText(pass_2El.textContent)
    alert("Copied!")
}
