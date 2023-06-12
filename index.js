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
 // server
 const scriptURL = 'https://script.google.com/macros/s/AKfycbx5bCvxgSBNbk6Jad_Yusgv4kPvFboi5OmemMesok-yO9SWFoX3_o3fRlHfhk7qBeeg/exec'
 const form = document.forms['submit-to-google-sheet']

 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => console.log('Success!', response))
     .catch(error => console.error('Error!', error.message))
 })
 /*function submit () {
    alert("Thank you, your response has been received.");
 }*/
 /*function submit() {
    console.log("Thank you, your response has been received.");
  }*/
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you, your response has been received.");
    // Additional code to handle form submission
  }