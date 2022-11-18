//Micah Whiteleather
//4
//11/15/22

/*Provide a description about what this program does here*/

/*Write code to manipulate the elements on your index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text and an music. */
var back = document.getElementById("back");
var face = document.getElementById("face");
var eye1 = document.getElementById("eye1");
var eye2 = document.getElementById("eye2");
var mouth = document.getElementById("mouth");
var hole = document.getElementById("hole");
var nose = document.getElementById("nose");
var hat = document.getElementById("hat");
var ball = document.getElementById("hatTop")
var text = document.getElementById("text")
//background
back.style.backgroundColor = "lightgreen";
back.style.height = "350px";
back.style.width = "350px";
back.style.borderStyle = "dotted";
back.style.borderColor = "green";
back.style.borderWidth = "25px";
//background

//face
face.style.borderRadius="50%";
face.style.position ="absolute";
face.style.height = "180px";
face.style.width = "180px";
face.style.backgroundColor ="pink";
face.style.top = "100px";
face.style.left = "100px";
//face

//left eye
eye1.style.position = "absolute";
eye1.style.height = "7px";
eye1.style.width = "7px";
eye1.style.borderRadius = "50%";
eye1.style.borderColor = "white";
eye1.style.backgroundColor = "black";
eye1.style.top = "170px";
eye1.style.left = "145px";
eye1.style.borderWidth = "15px:"
eye1.style.borderStyle = "solid";
//left eye


//right eye
eye2.style.position = "absolute";
eye2.style.height = "7px";
eye2.style.width = "7px";
eye2.style.borderRadius = "50%";
eye2.style.borderColor = "white";
eye2.style.backgroundColor = "black";
eye2.style.top = "170px";
eye2.style.left = "215px";
eye2.style.borderWidth = "15px:"
eye2.style.borderStyle = "solid";
//right eye

//mouth
mouth.style.position = "absolute";
mouth.style.top = "220px";
mouth.style.left = "140px";
mouth.style.backgroundColor = "White";
mouth.style.height = "120px";
mouth.style.width = "100px";
mouth.style.borderRadius = "15%";

hole.style.borderRadius = "25%";
hole.style.position = "absolute";
hole.style.top = "240px";
hole.style.left = "177px";
hole.style.backgroundColor = "pink";
hole.style.height = "15px";
hole.style.width = "23px";
//mouth

//nose
nose.style.borderRadius = "25%";
nose.style.position = "absolute";
nose.style.top = "185px";
nose.style.left = "175px";
nose.style.backgroundColor = "tan";
nose.style.height = "50px";
nose.style.width = "25px";
//nose

//hat
hat.style.position = "absolute";
hat.style.top = "30px";
hat.style.left = "90px";
hat.style.height = "0px";
hat.style.width = "0px";
hat.style.backgroundColor = "transparent";
hat.style.border = "solid";
hat.style.borderRadius = "10%";
hat.style.borderColor = "transparent";
hat.style.borderWidth = "1px";
hat.style.borderBottomWidth = "100px";
hat.style.borderLeftWidth = "100px";
hat.style.borderRightWidth = "100px";
hat.style.borderBottomColor = "red";
hat.style.borderTopWidth = "10px";

ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.top = "15px";
ball.style.left = "165px";
ball.style.backgroundColor = "white";
ball.style.borderStyle = "dotted";
ball.style.borderColor = "red";
//hat

//text
text.style.position = "absolute";
text.style.top = "320px";
text.style.left = "75px";
text.style.color = "red";
text.style.fontFamily = "Snell Roundhand, cursive";
//text