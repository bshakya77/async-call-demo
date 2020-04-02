$(document).ready(function () {

    function getResource(url){
        return new Promise(function(resolve, reject){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", url, true); // asynchronous call (true)
            xmlhttp.onload = function(){
                if(xmlhttp.status == 200){
                    resolve(JSON.parse(xmlhttp.response));
                }else{
                    reject(xmlhttp.statusText);
                }
            };
            xmlhttp.onerror = function(){
                reject(xmlhttp.statusText);
            };
            xmlhttp.send();
        });
    }

    $("#buttonDisplay").click(function(){
        
        var promise = getResource("https://jsonplaceholder.typicode.com/users");  //dummy api to retrieve user list
        promise.then(function(users){
            console.log(users);
            return getResource("https://jsonplaceholder.typicode.com/users/1");  // dummy api to retrieve specific user info
        }).then(function(user){
            console.log(user);
        }).catch(function(error){
            console.log(error);
        });
    });
    
});



