const navToggleBtn = document.querySelector('.navbar-toggler');
const navCollapseDiv = document.querySelector('.navbar-collapse');

navToggleBtn.addEventListener('click', () => {
    navCollapseDiv.classList.toggle('showNavbar');
    navToggleBtn.classList.toggle('showNavbar-toggler');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
        
          var popupViews = document.querySelectorAll('.popup_view');
        var popupBtns = document.querySelectorAll('.popup_btn');
        var closeBtns = document.querySelectorAll('.close_btn');


        var popup= function(popupClick){
            popupViews[popupClick].classList.add('active');
        }

        popupBtns.forEach((popupBtn,i) => {
            popupBtn.addEventListener("click",() => {
                popup(i);
            });
        });


        closeBtns. forEach((closeBtn) =>{
            closeBtn.addEventListener("click", ()=> {
                popupViews.forEach((popupView) => {
                    popupView.classList.remove('active');

                });
            });
        });
    
