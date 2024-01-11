(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

//mobile menu

  const hamburger = document.querySelector(".hamburger");
  const list = document.querySelector(".list");
  const addressMenu = document.querySelector(".address-menu");
  const socialMediaList = document.querySelector(".social-media-list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    list.classList.toggle("active");
    addressMenu.classList.toggle("active");
    socialMediaList.classList.toggle("active");
  })

  document.querySelectorAll("list-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    list.classList.remove("active");
   
    
  }))

  document.querySelectorAll("address-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      addressMenu.classList.remove("active");
    }))

 
    //social-media-list social-media-link