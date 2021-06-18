var inputs = [];

function getParagraph15()
{
  for (var i = 1; i <=6; i++)
    {
      inputs.push(document.getElementById("para1_input12_box_" + i).value);
    }
  
  inputs.join(".");
  
  document.getElementById("showParagraph15").innerHTML = inputs.join(". ")
}









var inputs = [];

function getParagraph1()
{
  for (var i = 1; i <=6; i++)
    {
      inputs.push(document.getElementById("para1_input1_box_" + i).value);
    }
  
  inputs.join(".");
  
  document.getElementById("showParagraph1").innerHTML = inputs.join(". ")
}