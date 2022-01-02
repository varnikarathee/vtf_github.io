
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
    