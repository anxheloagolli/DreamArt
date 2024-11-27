let navbar = document.querySelector(".navbar");
window.onscroll = () => {
    let heightWindow = window.pageYOffset;
    console.log(heightWindow);
    if(heightWindow > 200){
        navbar.style.backgroundColor = "rgb(13, 110, 253)"
    }else{navbar.style.backgroundColor = " rgb( 33, 37, 41)"}
};


