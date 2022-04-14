/* function print() 
{
    console.log(1);
    console.log(2);
    console.log(3);
    onsole.log(4);
    console.log(5);
}
print();
print(); */

// function myLoadFunction() {
//     var element = document.getElementById('pageheading');
//     element.firstChild.nodeValue = 'New Heading';
//    }
//    document.addEventListener('click', myLoadFunction);

function updateParagraph() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Heading';
   }
   function updateH1() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New paragraph contents';
   }
   function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', updateH1);
    var element = document.getElementById('paragraph');
    element.addEventListener('click', updateParagraph);
   }
   document.addEventListener('click ', myLoadFunction);
   