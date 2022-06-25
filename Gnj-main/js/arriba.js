// const toTop = document.querySelector("#ir-arriba");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100000) {
//     querySelector("#ir-arriba").style.display = "block";
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// })
;


const btn_scrolltop = document.getElementById("btn_scrolltop")
      btn_scrolltop.addEventListener('click', () => {
        window.scrollTo(0, 0)
      })

    window.onscroll = () => {
      add_btn_scrolltop()
    }

    const add_btn_scrolltop = () => {
      if (window.scrollY < 900) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
      } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
      }
    }
