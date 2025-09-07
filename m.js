

     var m=prompt("Enter your name:")
     confirm(`your name is ${m}`)
   
    if (m=="marimuthu"||m=="nandhini") {
      var a=prompt("Are you single ? ")
      if (a=="yes") {document.write(`welcome ${m}`)
       var showbutton=document.getElementById("show")
       //select the show button and class div &divin
        var div=document.querySelector(".div")
        var divin=document.querySelector(".divin")
        function change()
        {
          div.style.display="block";
          divin.style.display="block";
         }
        function cancle()
        {
          div.style.display="none";
          divin.style.display="none";
          }
      } else 
        {
         document.write(`sorry ${m} wrong entry the website`)
        } 
    }
     else 
      {
       document.write(`sorry ${m} wrong entry the website`)
       }
 


  