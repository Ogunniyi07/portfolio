let navBar = document.querySelector(".navbar");

//sticky Navigation menu JS code
let nav = document.querySelector("nav");
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}


//changing banner image at intervals
    function changeBg(){

        const images = [
        'url("stranger.jpg")',
        'url("2.jpg")',
        ]
   

    const banner = document.querySelector('.home .banner')
    const bg = images[Math.floor(Math.random() * 
       images.length )];
       banner.style.backgroundImage = bg;

    }
    setInterval(changeBg, 1000)



    (function (){
        var title = [
            "Stanger Things",
            "All Of Us are Dead",
        ],
        i = 0;
        setInterval(function(){
            $('#title').fadeOut(function(){
                $(this).html(title[(i = (i + 1) % title.length)]).fadeIn();
            });
        }, 1000)
    })();


  
