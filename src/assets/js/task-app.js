$(document).on("click", ".wd-dropdown", function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("in")) {
    $(this).parent().removeClass("in");
  } else {
    $(this).parent().addClass("in");
  }
});

$(document).on("click", ".wd-sidebar-navbar-toggle", function (e) {
  e.preventDefault();

  if ($(this).siblings(".wd-sidebar-navabar-lavel-1").hasClass("in")) {
    $(this).siblings(".wd-sidebar-navabar-lavel-1").removeClass("in");
    $(this).siblings(".wd-sidebar-navabar-lavel-1").slideUp();
  } else {
    $(this).siblings(".wd-sidebar-navabar-lavel-1").addClass("in");
    $(this).siblings(".wd-sidebar-navabar-lavel-1").slideDown();
  }
});

// header
$(document).on("click", "#wdHeaderMenuIcon", function (e) {
  console.log($("#wdWrapper").hasClass("in"));
  if ($("#wdWrapper").hasClass("in")) {
    $("#wdWrapper").removeClass("in");
    $(this).children("i").removeClass("ri-close-line");
    $(this).children("i").addClass("ri-menu-line");
  } else {
    $("#wdWrapper").addClass("in");
    $(this).children("i").addClass("ri-close-line");
    $(this).children("i").removeClass("ri-menu-line");
  }
});
