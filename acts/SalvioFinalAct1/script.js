console.log(document)

//images
const pic = document.getElementById("pfp")
console.log(pic)


//texts
const hd1 = document.getElementById("head1")
console.log(hd1)

const hd2 = document.getElementById("head2")
console.log(hd2)

const pr1 = document.getElementById("para1")
console.log(pr1)


//inputs
const nickname = document.getElementById("nick")
console.log(nickname)

const course = document.getElementById("selectbox")
console.log(course)


// buttons
const once = document.getElementById("single")
console.log(once)

const twice = document.getElementById("double")
console.log(twice)

const long = document.getElementById("hold")
console.log(long)


// button functions
once.addEventListener(
    "click", function(){
        hd2.innerHTML = "One Click Activated"
    }
)

twice.addEventListener(
    "dblclick", function(){
        hd2.innerHTML = "Double Click Activated"
    }
)

long.addEventListener(
    "mousedown", function(){
        hd2.innerHTML = "Button Held"
        long.style.backgroundColor = "green"
    }
)

long.addEventListener(
    "mouseup", function(){
         hd2.innerHTML = "Button Released"
         long.style.backgroundColor = long.value
    }
)

//image function
pic.addEventListener(
    "mouseover", function(){
        hd2.innerHTML = "Mouse on profile."
    }
)

pic.addEventListener(
    "mouseout", function(){
        hd2.innerHTML = "Mouse not on profile."
    }
)

//input functions

nickname.addEventListener(
    "input", function(){
        hd1.innerHTML = nickname.value
    }
)

nickname.addEventListener(
    "focus", function(){
       nickname.style.backgroundColor = "orange"
       nickname.style.color = "white"
    }
)

nickname.addEventListener(
    "blur", function(){
       nickname.style.backgroundColor = "white"
       nickname.style.color = "black"
       hd1.innerHTML = "Darryl"
    }
)

course.addEventListener(
    "input", function(){
        pr1.innerHTML = course.value
    }
)