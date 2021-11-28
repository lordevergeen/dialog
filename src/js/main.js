let headerBtn = $(".header_button");
let overlay = $(".overlay");
let popupClose = $(".popup_close");
let popupFormBtn = $(".popup_form-btn");

headerBtn.on("click",function (){
    overlay.fadeIn("slow");
});

popupClose.on("click",function (){
    overlay.fadeOut("slow");
});

popupFormBtn.on("click",function (e){
    e.preventDefault();
    overlay.fadeOut("slow");
});

overlay.on("click", function (e) {
if (e.target.className === "overlay") {
overlay.fadeOut("slow")
}
});


let ul= $('.review_list');

    ul.on('click', 'li:not(.review_item_active)', function() {

    $(this)
    .addClass('review_item_active').siblings().removeClass('review_item_active')
        .closest('div.review_tabs').find('div.review_tabs-content').removeClass('review_tabs-content_active').eq($(this).index()).addClass('review_tabs-content_active');
});





let owl = $('.owl-carousel');
owl.owlCarousel({

    item:3,
    margin:30,
    autoHeight: true,
    dotsContainer: "#dots",
    loop:true,

    // responsive:{
    // 768:{
    //     items:2
    // },
    // 425:{
    //     items:1,
    //    stagePadding:50
    // }
    // }

    });


$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});




let map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.878961, 74.595101],
        zoom: 30
    });
    let myIcon = DG.icon({
        iconUrl: 'https://toppng.com/public/uploads/thumbnail/vector-freeuse-head-transparent-shrek-shrek-face-transparent-background-11562932607q2gkq6udoa.png',
        iconSize: [100, 80],

    });

    DG.marker([42.878961, 74.595101],{icon:myIcon}).addTo(map).bindPopup('swamp').bindLabel('"get out of my swamp!"', { static: true });

});


// DG.marker([42.878982, 74.595075], {icon: myIcon}).addTo(map).bindPopup('IKEA').bindLabel('Я статическая подсказка!',{ static: false });





