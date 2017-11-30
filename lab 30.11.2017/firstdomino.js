var divler = $('.container div');
var boyukdiv = document.getElementsByClassName(' ikincicontainer');
console.log(divler)
console.log(boyukdiv);
var column = 0;
var row = 0;
var t = 7;
for (var i = 0; i < divler.length; i++)


{


    var buttons = $(divler[i]).find('button');
  
 
        buttons[0].innerText = row;
        buttons[1].innerText = column;
        column++;


            divler[i].ondragstart=function(evt){
            evt.dataTransfer.setData('buttonlar',evt.target.id)
        console.log(evt.target)
            }
  
       

    
    if (column>=t ) {
        
                    row++;
                    column = row;
                  
                }
}
boyukdiv[0].ondragover=function(evt){
    evt.preventDefault();
   
}

boyukdiv[0].ondrop=function(evt){
evt.preventDefault();
var c=evt.dataTransfer.getData('buttonlar');
var dropedeceyimiz=document.getElementById(c);

this.appendChild(dropedeceyimiz)

}
