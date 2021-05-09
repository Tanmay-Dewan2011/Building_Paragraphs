function get_paragraph_1(){
var inputs = [];

for (var i=1; i<=6; i++)
{
 inputs.push(document.getElementById("input_1" +i).value);
 
}

document.getElementById("show_paragraph_1").innerHTML = inputs.join(". ");


}