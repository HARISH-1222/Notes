const btn = document.getElementById("btn");
const inpList = document.getElementById("list");

const textCont = document.querySelector(".text-content");

const myList = document.getElementById("myList");

btn.addEventListener("click",()=>{
    let note = document.querySelector(".inp-note").value;
    console.log(note);
    textCont.innerHTML += `<li>${note}</li>`;

    // event.preventDefault();
  
  // Get the form data
  const formData = new FormData(myList);
  console.log(formData);
  // Send the form data to the server
  // fetch('/submit-form', {
  //   method: 'POST',
  //   body: formData
  // })
  // .then(response => response.text())
  // .then(data => {
  //   console.log(`Server response: ${data}`);
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });  
})