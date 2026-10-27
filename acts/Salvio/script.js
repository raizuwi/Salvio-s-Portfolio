const button = document.getElementById("Button")
const button1 = document.getElementById("Button1")
const para = document.getElementById("Para")
const entry = document.getElementById("textinput")


button.addEventListener(
    "click",function(){
        para.style.color = "white"
        para.innerHTML = "Loading..."
        button1.style.backgroundColor = "lightblue"
        button1.style.color = "darkslategrey"

        setTimeout(function(){
            para.innerHTML = "Welcome to JavaScript!"
            para.style.color = "yellow"
        },1500)
    }
)


function loadMessage(){
        button1.style.backgroundColor = "magenta"
        button1.style.color = "white"

        return new Promise(function(resolve){
            setTimeout(function(){
          resolve("Checking account...")
        },1500)
        })   

}

button1.addEventListener(
    "click", function(){
        para.style.color = "white"
        para.innerHTML = "Loading..."
        button1.style.backgroundColor = "lightblue"
        button1.style.color = "darkslategrey"

        loadMessage()

        .then(function(result){
            para.innerHTML = result
            button1.style.backgroundColor = "darkblue"
            button1.style.color = "white"

            return new Promise(function(resolve){

                setTimeout(function(){
                    resolve("Loading Profile...")
                },1500)

            })
        })

        .then(function(result){
            button1.style.backgroundColor = "darkred"
            button1.style.color = "white"

            para.innerHTML = result
            return new Promise(function(resolve){

                setTimeout(function(){
                    resolve("Welcome!")
                },1500)

            })
        })

        .then(function(result){
            para.innerHTML = result;
            button1.style.backgroundColor = "darkgreen"
            button1.style.color = "white"
        })        
    }
)


// button1.addEventListener(
//     "click",function
// )



// function showMessage(text){
//     para.innerHTML = text
// }

// button.addEventListener(
//     "click", function(){
//         para.innerHTML = "Loading..."

//         setTimeout(function(){
//           showMessage("Well done!")  
//         },1500)
//     }
// )

// ============================================================

// function loadMessage(){
//     return new Promise(function(resolve, reject){

//         setTimeout(function(){
//             let sucess = true

//             if(sucess){
//                 resolve("Welcome to JavaScript!")
//             }
//             else{
//                 reject("Failed to load.")
//             }
//         },1500)

//     })
// }

// button.addEventListener(
//     "click", function(){
//         para.innerHTML = "Loading..."
        
//         loadMessage()

//         .then(function(result){
//             para.innerHTML = result
//         })

//         .catch(function(error){
//             para.innerHTML = error
//         })
            
//     }
// )

// ============================================================

// function loadMessage(){

//         return new Promise(function(resolve){
//             setTimeout(function(){
//           resolve("Checking account...")
//         },1500)
//         })   

// }

// button1.addEventListener(
//     "click", function(){
//         para.innerHTML = "Loading..."
        
//         loadMessage()

//         .then(function(result){
//             para.innerHTML = result

//             return new Promise(function(resolve){

//                 setTimeout(function(){
//                     resolve("Loading Profile...")
//                 },1500)

//             })
//         })

//         .then(function(result){
//             para.innerHTML = result

//             return new Promise(function(resolve){

//                 setTimeout(function(){
//                     resolve("Welcome")
//                 },1500)

//             })
//         })

//         .then(function(result){
//             para.innerHTML = result;
//         })        
//     }
// )

// ========================================================

// button.addEventListener(
//     "click", function(){
//         para.innerHTML = "Connecting..."

//         const wifi = new Promise(function(resolve){
//             setInterval(function(){
//                 resolve("Wi-Fi Connected")
//             },1500)
//         });

//         const mobile = new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve("Mobile Data Connected")
//             },1500)
//         });

//         Promise.race([wifi,mobile])

//         .then(function(result){
//             para.innerHTML = result
//         })
//     }
// )

