$(document).ready(function(){
    $(document).ready(function(){
        $("#button").click(async function(){
            var response=await fetch(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`)
            $("#quote").slideUp();
            var data=await response.json()
            console.log(data)
            $("#quote").html(data[0].content.rendered)
            $("#quote").slideDown();



















        })
    })
})