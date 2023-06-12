var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    } 
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.left= "0";
}

function closemenu() {
  sidemenu.style.left = "-200px";
}
document.querySelector('.read-more').addEventListener('click', function(e) {
    e.preventDefault();
    var contentDiv = this.parentElement;
    contentDiv.classList.toggle('show-more');
    this.textContent = contentDiv.classList.contains('show-more') ? 'Read Less' : 'Read More';
  });
 

  
  
