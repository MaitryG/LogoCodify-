function allowDrop(e){
	e.preventDefault();
}

function drag(e){
	e.dataTransfer.setData("text",e.target.id);
}

function drop(e)
{
	e.preventDefault();
	var data=e.dataTransfer.getData("text");
	e.target.appendChild(document.getElementById(data));
}

function myFunction()
{
    var txt;
        if (confirm("Take Your Screenshot!")) 
        {
        	window.location.href=("https://forms.gle/gKKmrxZ1LEnDZ13g6");
        } 
        /*else 
        {
        	txt = "You pressed Cancel!";
        }*/
    document.getElementById("demo").innerHTML = txt;
}		