var menu_score = -1; 
function dispmenu()
{
 
  var ms =window.matchMedia("(max-width:850px)"); 
    if(ms.matches)
    {
      if(menu_score==0)
      {
        menu_score=-1;
    document.getElementById("main-sec").setAttribute("style","width:100%");
   // document.getElementById("des").setAttribute("style","min-height:450px");
    document.getElementById("navbar").setAttribute("style","display:block");
   // document.getElementById("csec").setAttribute("style","min-height:450px");
    document.body.style.backgroundColor="rgba(0,0,0,0.1)";
    window.addEventListener('mouseup', function(event){
      var box = document.getElementById('navbar');
      if (event.target != box && event.target.parentNode != box){
        box.style.display = 'none';
        document.body.style.backgroundColor="white";
        if(event.target != document.getElementById("head-btn"))
          menu_score=0;
      document.getElementById("csec").setAttribute("style","min-height:150px");
      document.getElementById("main-sec").setAttribute("style","width:100%");
      document.getElementById("des").setAttribute("style","min-height:150px");
        }});
  }
  else{
    document.getElementById("navbar").setAttribute("style","display:none");
         document.getElementById("csec").setAttribute("style","min-height:150px");
      document.getElementById("main-sec").setAttribute("style","width:100%");
      document.getElementById("des").setAttribute("style","min-height:150px");
      menu_score=0;
  }
      }

else
{
  if(menu_score==0)
      {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("csec").setAttribute("style","min-height:450px");
    document.getElementById("main-sec").setAttribute("style","width:80vw");
        document.getElementById("des").setAttribute("style","min-height:450px");
   menu_score = -1;
  }
  else{
    document.getElementById("navbar").setAttribute("style","display:none");
         document.getElementById("csec").setAttribute("style","min-height:150px");
      document.getElementById("main-sec").setAttribute("style","width:100%");
      document.getElementById("des").setAttribute("style","min-height:150px");
      menu_score=0;
  }
      }
}

    


function myFunction(x) {
  x.classList.toggle("change");
}

function prequiz()
{
let radioButtons = document.querySelectorAll('input[name="pre1"]');
let selectedans;
let said;
let count=0;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                    break;
                }
            }
            if(selectedans==1)
              said="pre11";
            else if(selectedans==2)
              said="pre12";
            else if(selectedans==3)
              said="pre13";
            else if(selectedans==4)
              said="pre14";
          if(selectedans!=2)
            {count=count+1;
              console.log(said);
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lighgreen");
  radioButtons = document.querySelectorAll('input[name="pre2"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre21";
            else if(selectedans==2)
              said="pre22";
            else if(selectedans==3)
              said="pre23";
            else if(selectedans==4)
              said="pre24";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
radioButtons = document.querySelectorAll('input[name="pre3"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre31";
            else if(selectedans==2)
              said="pre32";
            else if(selectedans==3)
              said="pre33";
            else if(selectedans==4)
              said="pre34";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
radioButtons = document.querySelectorAll('input[name="pre4"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre41";
            else if(selectedans==2)
              said="pre42";
            else if(selectedans==3)
              said="pre43";
            else if(selectedans==4)
              said="pre44";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				radioButtons = document.querySelectorAll('input[name="pre5"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre51";
            else if(selectedans==2)
              said="pre52";
            else if(selectedans==3)
              said="pre53";
            else if(selectedans==4)
              said="pre54";
          if(selectedans!=2)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
				radioButtons = document.querySelectorAll('input[name="pre6"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre61";
            else if(selectedans==2)
              said="pre62";
            else if(selectedans==3)
              said="pre63";
            else if(selectedans==4)
              said="pre64";
          if(selectedans!=2)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
				radioButtons = document.querySelectorAll('input[name="pre7"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre71";
            else if(selectedans==2)
              said="pre72";
            else if(selectedans==3)
              said="pre73";
            else if(selectedans==4)
              said="pre74";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
				radioButtons = document.querySelectorAll('input[name="pre8"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre81";
            else if(selectedans==2)
              said="pre82";
            else if(selectedans==3)
              said="pre83";
            else if(selectedans==4)
              said="pre84";
          if(selectedans!=1)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
				radioButtons = document.querySelectorAll('input[name="pre9"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre91";
            else if(selectedans==2)
              said="pre92";
            else if(selectedans==3)
              said="pre93";
            else if(selectedans==4)
              said="pre94";
          if(selectedans!=1)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
				radioButtons = document.querySelectorAll('input[name="pre10"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="pre101";
            else if(selectedans==2)
              said="pre102";
            else if(selectedans==3)
              said="pre103";
            else if(selectedans==4)
              said="pre104";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
document.getElementById("preresult").innerHTML="You got " + (10-count).toFixed(0) + " answers correct out of 10";
}
function postquiz()
{
let radioButtons = document.querySelectorAll('input[name="post1"]');
let selectedans;
let said;
let count=0;
            for (const radioButton of radioButtons)
			{
                if (radioButton.checked) 
				{
                    selectedans = radioButton.value;
                    break;
                }
            }
            if(selectedans==1)
              said="post11";
            else if(selectedans==2)
              said="post12";
            else if(selectedans==3)
              said="post13";
            else if(selectedans==4)
              said="post14";
          if(selectedans!=3)
            {
			count=count+1;
              console.log(said);
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
  radioButtons = document.querySelectorAll('input[name="post2"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post21";
            else if(selectedans==2)
              said="post22";
            else if(selectedans==3)
              said="post23";
            else if(selectedans==4)
              said="post24";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
  radioButtons = document.querySelectorAll('input[name="post3"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post31";
            else if(selectedans==2)
              said="post32";
            else if(selectedans==3)
              said="post33";
            else if(selectedans==4)
              said="post34";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");

  radioButtons = document.querySelectorAll('input[name="post4"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post41";
            else if(selectedans==2)
              said="post42";
            else if(selectedans==3)
              said="post43";
            else if(selectedans==4)
              said="post44";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
  radioButtons = document.querySelectorAll('input[name="post5"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post51";
            else if(selectedans==2)
              said="post52";
            else if(selectedans==3)
              said="post53";
            else if(selectedans==4)
              said="post54";
          if(selectedans!=4)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
  radioButtons = document.querySelectorAll('input[name="post6"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post61";
            else if(selectedans==2)
              said="post62";
            else if(selectedans==3)
              said="post63";
            else if(selectedans==4)
              said="post64";
          if(selectedans!=3)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
  radioButtons = document.querySelectorAll('input[name="post7"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post71";
            else if(selectedans==2)
              said="post72";
            else if(selectedans==3)
              said="post73";
            else if(selectedans==4)
              said="post74";
          if(selectedans!=2)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
  radioButtons = document.querySelectorAll('input[name="post8"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post81";
            else if(selectedans==2)
              said="post82";
            else if(selectedans==3)
              said="post83";
            else if(selectedans==4)
              said="post84";
          if(selectedans!=1)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
  radioButtons = document.querySelectorAll('input[name="post9"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post91";
            else if(selectedans==2)
              said="post92";
            else if(selectedans==3)
              said="post93";
            else if(selectedans==4)
              said="post94";
          if(selectedans!=1)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
				
  radioButtons = document.querySelectorAll('input[name="post10"]');
       for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedans = radioButton.value;
                      said=radioButton.id;
                    break;
                }
            }
            if(selectedans==1)
              said="post101";
            else if(selectedans==2)
              said="post102";
            else if(selectedans==3)
              said="post103";
            else if(selectedans==4)
              said="post104";
          if(selectedans!=2)
            {count=count+1;
              document.getElementById(said).setAttribute("style","color:red");}
              else
                document.getElementById(said).setAttribute("style","color:lightgreen");
document.getElementById("preresult").innerHTML="You got " + (10-count).toFixed(0) + " answers correct out of 10";
}