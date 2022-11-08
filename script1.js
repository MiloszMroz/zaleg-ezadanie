function oblicz()
{
    var d1=document.getElementById("dz").value;
    var d2=document.getElementById("dor").value;
    if (!isNaN(d1) && !isNaN(d2))
    {
        var koszt=d1*25+d2*35;
        document.getElementById("wynik").innerHTML= "Cennik biletów na mecz: <br> Dzieci = 50zł <br> Osoby dorosłe 150zł <br> Twoje zgłoszenie wynosi: "+koszt+"zł";
    }
}