function toggleShowMore() {
    // get the fullpage
    let fullpage = document.getElementById('fullpage');

    // get the current value of the fullpage's display property
    let displaySetting = fullpage.style.display;


    let btnShowMore = document.getElementById('projects-Fullpage');


    if (displaySetting == 'grid') {
        // grid is visible. hide it

        fullpage.style.display = 'none';
        // change button text
        btnShowMore.innerHTML = 'Show More >';
    }
    else {
        // grid is hidden. show it
        fullpage.style.display = 'grid';

        // change button text
        btnShowMore.innerHTML = 'Hide <';
    }


}









function myFunction() {
    let email = document.getElementById("email");

    let btnEmail = document.getElementById('btn-email');

    let displaySetting2 = email.style.display;

    if (displaySetting2 === "block") {

        email.style.display = "none";
        btnShowMore.innerHTML = 'Hide Email';
    } else {

        email.style.display = "block";
        btnShowMore.innerHTML = 'Hide Email';
    }
}
