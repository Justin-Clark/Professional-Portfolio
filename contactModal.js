var modal = document.getElementById("modal");

var btn = document.getElementById("contactBtn");

var span = document.getElementsByClassName("closeIco")[0];

btn.onclick = function()
{
    modal.style.display = "flex";
}

span.onclick = function()
{
    modal.style.display = "none";
}

window.onclick = function(event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}