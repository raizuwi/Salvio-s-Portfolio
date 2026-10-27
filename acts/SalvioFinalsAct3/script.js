$(document).ready(function(){

    $("#changetitle").click(function(){
        $("#title").text("User, Welcome!")

        $(".act").text("User has changed the title.")
    })

    $("#changetitle").dblclick(function(){
        $("#title").text("Welcome, User!")

        $(".act").text("User has doubled click the 'Change title button'.")
    })

    $(".navbut").mouseenter(function(){
        $(this).css("background","black")
    })

    $(".navbut").mouseout(function(){
        $(this).css("background","rgb(89, 82, 185)")
    })

    $("#hideprof").click(function(){
        $(".StudentInformation").hide()

        $(".act").text("User hid the profile.")
    })



    $("#showprof").click(function(){
        $(".StudentInformation").show()

        $(".act").text("User showed the profile. ")
    })



    // // when button is clicked 
    // $(".colorBtn").mousedown(function(){

    //     $(this).css("background","green")
    //     $(this).css("color","white")
    //     $(this).css("transform","scale(0.95)")

    //     $("#table").show("fast")

    // })

    // // when button is released 
    // $(".colorBtn").mouseup(function(){

    //     $(this).css("background","rgb(89, 82, 185)")
    //     $(this).css("color","white")
    //     $(this).css("transform","scale(1.0)")

    //     $("#table").hide("fast")
    // })

    // // text style changing
    // $("tr:even").css("background","darkblue")
    // $("tr:odd").css("background","darkred")

    // $("[href]").css("color","green")
    // $("[href]").css("text-decoration","none")



    // // button functions
    // $("#btn").mouseup(function(){
    //     $("#message").text("Output:")
    // })

    // $("#btn").mousedown(function(){
    //     $("#message").text("You're holding me! >///<")
    // })

    // $("#btn").dblclick(function(){
    //     $("#message").text("You're double clicking me! >///<")
    // })

    // $("#btn").mouseenter(function(){
    //     $("#message").text("you're hovering over me~")
    // })

    // $("#btn").mouseleave(function(){
    //     $("#message").text("Output:")
    // })

    // $("#name").focus(function(){
    //     $("#message").text("you're typing...")
    // })

    // $("#name").blur(function(){
    //     $("#message").text("Output:")
    // })


    // $("#course").change(function(){
    //     $("#message").text($(this).val())
    // })
})