// JavaScript Document
function setView(id)
{document.getElementById("tab_1").className="";
document.getElementById("tab_2").className="";
document.getElementById("tac_1").style.display="none";
document.getElementById("tac_2").style.display="none";
document.getElementById("tab_"+id).className="tnav_on";
document.getElementById("tac_"+id).style.display="block";
document.getElementById("tac_"+id).className="dis";}