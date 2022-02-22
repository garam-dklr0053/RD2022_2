{   
    // ALL PAGE EVENT //

    function pageMove(index){
        const pages = document.querySelectorAll("main section");
        const location = -100 * index;

        pages.forEach((element) => {
            element.style.transform = "translate(0, " + location + "vh)"
        })
    }

    function btnSelect(index){
        const rightNav = document.querySelectorAll("#header_wrap .scroll .scroll_btn li");
        rightNav.forEach((elem, selectIndex) => {
            if(index == selectIndex){
                elem.classList.add("select");
            } else {
                elem.classList.remove("select");
            }
        })
    }

    function navSelect(selectIndex){
        const headerNav = document.querySelectorAll("#header_wrap .nav_wrap .nav li");

        headerNav.forEach((elem, index) => {
            if(index == selectIndex){
                elem.classList.add("select");
            } else {
                elem.classList.remove("select");
            }
        })
    }

    const headerNav = document.querySelectorAll("#header_wrap .nav_wrap .nav li");

    headerNav.forEach((elem, index) => {
        elem.addEventListener("click", function(){
            pageMove(index);
            btnSelect(index);
            navSelect(index);
        });
    })

    const rightNav = document.querySelectorAll("#header_wrap .scroll .scroll_btn li");

    rightNav.forEach((elem, index) => {
        elem.addEventListener("click", function(){
            pageMove(index);
            btnSelect(index);
            navSelect(index);
        });
    })

    let wheelIndex = 0;

    function wheelEvent(event){
        const direction = event.deltaY;
        if(direction < 0){
             wheelIndex = wheelIndex - 1;
        } else {
            wheelIndex = wheelIndex + 1;
        }

        if(wheelIndex < 0){
            wheelIndex = 0;
        } else if(wheelIndex > 4){
            wheelIndex = 4;
        }
        
        window.removeEventListener("wheel", wheelEvent);

        setTimeout(() => {
            window.addEventListener("wheel",wheelEvent);
        }, 200)

        pageMove(wheelIndex);
        btnSelect(wheelIndex);
        navSelect(wheelIndex);
    }

    window.addEventListener("wheel", wheelEvent);
}

{
    // BUSNESS PAGE EVENTS //

    const buttons = document.querySelectorAll(".section.page_03 .container .main_3st .list_box li");

    function buttonSelect (selectElem){
        buttons.forEach((elem) => {
            if(selectElem == elem){
                elem.classList.add("select");
            } else {
                elem.classList.remove("select");
            }
        })
    }

    function backgroundChange (selectIndex){
        const background = document.querySelector(".section.page_03");
        background.style.backgroundImage = "url(/assets/img/page3_img/bg" + (selectIndex + 1) + ".jpg)";
    }

    buttons.forEach((elem, index) => {
        elem.addEventListener("click", function(){
            buttonSelect(elem);
            backgroundChange(index);
        })
    })
}