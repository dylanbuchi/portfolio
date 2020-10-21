$(".hjava").on("mouseover", function () {
    $(this).addClass("active-j");
    $(".hpy").removeClass("active-p");
    $(".hdart").removeClass("active-d");
});
$(".hpy").on("mouseover", function () {
    $(this).addClass("active-p");
    $(".hjava").removeClass("active-j");
    $(".hdart").removeClass("active-d");
});
$(".hdart").on("mouseover", function () {
    $(this).addClass("active-d");
    $(".hjava").removeClass("active-j");
    $(".hpy").removeClass("active-p");
});
