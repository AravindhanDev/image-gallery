$('#imageGallery').imagePopup({
    overlay: "rgba(0, 100, 100, 0.5)",
    closeButton: {
        src: "images/close.png",
        width: "4rem",
        height: "4rem"
    },
    imageBorder: "10px solid #f4eee8",
    borderRadius: "0.5rem",
    imageWidth: "20rem",
    imageHeight: "20rem",
    imageCaption: {
        exist: true,
        color: "#f4eee8",
        fontSize: "2rem",
        marginTop: "1rem"
    },
    open: function() {
        console.log("Opened");
    },

    close: function() {
        console.log("Closed");
    }
});

$('#imageGallery2').imagePopup({
    overlay: "rgba(0, 100, 100, 0.5)",
    closeButton: {
        src: "images/close.png",
        width: "4rem",
        height: "4rem"
    },
    imageBorder: "10px solid #f4eee8",
    borderRadius: "0.5rem",
    imageWidth: "20rem",
    imageHeight: "20rem",
    imageCaption: {
        exist: true,
        color: "#f4eee8",
        fontSize: "2rem",
        marginTop: "1rem"
    },
    open: function() {
        console.log("Opened");
    },

    close: function() {
        console.log("Closed");
    }
});


$('#imageGallery3').imagePopup({
    overlay: "rgba(0, 100, 100, 0.5)",
    closeButton: {
        src: "images/close.png",
        width: "4rem",
        height: "4rem"
    },
    imageBorder: "10px solid #f4eee8",
    borderRadius: "0.5rem",
    imageWidth: "20rem",
    imageHeight: "20rem",
    imageCaption: {
        exist: true,
        color: "#f4eee8",
        fontSize: "2rem",
        marginTop: "1rem"
    },
    open: function() {
        console.log("Opened");
    },

    close: function() {
        console.log("Closed");
    }
});





var icon = $("#icon")
var body = $('body')

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}


let localData = localStorage.getItem("theme");

if (localData === "light") {
    icon.attr('src', 'images/moon.png');
    body.removeClass("dark-theme");
} else if (localData === 'dark') {
    icon.attr('src', 'images/sun.png');
    body.addClass("dark-theme");
}

icon.on('click', () => {
    body.toggleClass("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.attr('src', 'images/sun.png')
        localStorage.setItem("theme", "dark")
    } else {
        icon.attr('src', 'images/moon.png')
        localStorage.setItem("theme", "light")
    }
})