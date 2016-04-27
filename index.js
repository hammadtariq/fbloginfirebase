
var app=angular.module("myapp",[]);

 app.controller("cntrl",function(){

     this.login=function(){

         var ref = new Firebase("https://abcfirebase.firebaseio.com");
         ref.authWithOAuthPopup("facebook", function(error, authData) {
             if (error) {
                 console.log("Login Failed!", error);
             } else {
                 console.log("Authenticated successfully with payload:", authData);
             }
         });
     }

 });
