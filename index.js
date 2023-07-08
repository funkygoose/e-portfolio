// 
// 
// 

function contact(event) {
   event.preventDefault();
   const loading = document.querySelector('.modal__overlay--loading');
   const success = document.querySelector('.modal__overlay--success');
   loading.classList += " modal__overlay--visible";
   emailjs
   
   .sendForm(
      'service_mbzxseb',
      'template_2zgb05j',
      event.target,
      'ZMNjtS8M82GCX2i5s'
   )
   .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
   })
   .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
         "The email service is temporarily unavailable. Please contact me at 'uriel1119@gmail.com' "
      );
   });
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
     isModalOpen = false;
     return document.body.classList.remove("modal--open");
  }
   isModalOpen = true;
   document.body.classList += " modal--open"
}
