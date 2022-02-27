function func(){
  var mail_id=document.getElementById("id1")
  var str=mail_id.value;
  var paswd=document.getElementById("id2")
  var str2=paswd.value;
  var ctx=document.getElementById("ref");
   if(str=="snehal@gmail.com" && str2=="snehal227" || str=="uday@gmail.com" && str2=="uday228")
  	{ ctx.innerHTML="Login";alert("Success");}
  else
  	alert("Invalid Credentials");

 
}