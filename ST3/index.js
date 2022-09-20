function calW(mass , gravity){
    return mass * gravity;
}

function fn(){
    var num = document.getElementById("weight").value;
    var mass= num;


    document.getElementById("p1").innerHTML="Weight on Mercury :"+" "+calW(mass, 0.37)+" kg"; // mercury
    document.getElementById("p2").innerHTML="Weight on Venus :"+calW(mass, 0.91)+" kg";  // venus
    document.getElementById("p3").innerHTML="Weight on Earth :"+calW(mass, 1)+" kg";  // earth
    document.getElementById("p4").innerHTML="Weight on Mars :"+calW(mass, 0.38)+" kg";  //mars
    document.getElementById("p5").innerHTML="Weight on Jupiter :"+calW(mass, 2.34)+" kg";  //jupiter
    document.getElementById("p6").innerHTML="Weight on Saturn :"+calW(mass, 1.06)+" kg";  //saturn
    document.getElementById("p7").innerHTML="Weight on Uranus :"+calW(mass, 0.92)+" kg";  //uranus
    document.getElementById("p8").innerHTML="Weight on Neptune :"+calW(mass, 1.12)+" kg";  //neptune


}