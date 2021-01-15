$(document).ready(function(){
    $(document).ready(function(){
        $("#button").click(async function(){
            var response=await fetch(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`)
            $("#quote").slideUp();
            $("#author").slideUp();
            var data=await response.json()
            console.log(data)
            var Random=Math.floor((Math.random() * 10));
            console.log(Random)
            $("#quote").html(data[Random].content.rendered)
            $("#author").html("-"+data[Random].title.rendered)
            $("#quote").slideDown();
            $("#author").slideDown();



















        })
    })
})