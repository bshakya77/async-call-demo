$(document).ready(function () {

    $("#buttonDisplay").click(function(){
        $.get("https://jsonplaceholder.typicode.com/users").then(function(users){
            console.log(users)
            return $.get("https://jsonplaceholder.typicode.com/users/1");
        }).then(function(user){
            console.log(user);
        });
    
    })

});

