var family_names= ["Kimaya Jagtap","Aaryan Jagtap","Richa Jagtap","Amit Jagtap","Urmila Jagtap","Dattaji Jagtap"];
var images= ["Kimaya.jpeg","boyy.jpeg","mother.jpeg","father.jpeg","grandma.jpeg","grandfather.jpeg"];

var i=0;
function next(){
    i++;
    var number_of_family_members=6;

    if(i > number_of_family_members){
i=0;
    }
    var updated_image= images[i];
    var updated_name= family_names[i];

    document.getElementById("text_placed_here").innerHTML=updated_name;
    document.getElementById("image_placed_here").src=updated_image;
}