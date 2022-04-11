const initSwitch = () => {

  var buttons = document.getElementsByClassName("house-btn")
  var texts = document.getElementsByClassName("info-card")

  Array.from(buttons).map(btn => {
    btn.addEventListener('click', (event) =>  {
      Array.from(buttons).map(button => 
          button.dataset.id === event.target.dataset.id ? button.classList.add("active") : button.classList.remove("active"))
      Array.from(texts).map(text => 
          text.dataset.id === event.target.dataset.id ? text.classList.add("show") : text.classList.remove("show"))
    })
  })
};

export {initSwitch};