
function preload(images_to_load) {
    var images = new Array();
    for (var i = 0; i < images_to_load.length; i++) {
        images[i] = new Image();
        images[i].src = images_to_load[i];
    }
}

preload(
    [
        "./img/fr.jpg",
        "./img/uk.png",
        "./img/profile.jpg",
        "./img/profile_2.png",
        "./img/Linedata_Logo.png",
        "./img/Zitouna_Bank_Logo.png"
    ]
)