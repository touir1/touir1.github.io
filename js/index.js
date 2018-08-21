// initialize the user data
$("#user_surname").html(data.default.surname);
$("#user_name").html(data.default.name);
$('#user_fullName').html(data.default.surname + ' ' + data.default.name);
$("#user_email").html(data.default.email);
$("#user_email").attr("href", "mailto:"+data.default.email);
$("#user_phone").html(data.default.phone);
$("#user_domicile").html(data.default.domicile);

// initialize the social data
$("#user_linkedin").attr("href", data.default.linkedin);
$("#user_github").attr("href", data.default.github);
$("#user_facebook").attr("href", data.default.facebook);
$("#user_twitter").attr("href", data.default.twitter);

// initialize the skills data
// clear skills div before loop
$("#user_skills").empty();
// skills loop
data.default.skills.forEach(function(item){
    //append item in div
    $("#user_skills").append(
        "\
        <li class=\"list-inline-item\">\
        <i class=\""+item.iconClass+"\" title=\""+item.title+"\"></i>\
        </li>\
    ");
});


// initialize the other skills data
// clear other skills div before loop
$("#user_otherSkills").empty();
// other skills loop
data.default.otherSkills.forEach(function(item){
    //append item in div
    $("#user_otherSkills").append(
        "\
        <li>\
        <i class=\"fa-li fa fa-check\"></i>\
        "+item+"\
        </li>\
    ");
});

// initialize the education data
// clear education div before loop
$("#user_education").empty();
// education loop
data.default.education.forEach(function(item){
    //append item in div
    $("#user_education").append(
        "\
        <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\
            <div class=\"resume-content mr-auto\">\
                <h3 class=\"mb-0\">"+item.title+"</h3>\
                <div class=\"subheading mb-3\">"+item.degree+"</div>\
                <div>"+item.description+"</div>\
                <p>Score: "+item.score+"</p>\
            </div>\
            <div class=\"resume-date text-md-right\">\
                <span class=\"text-primary\">"+item.duration+"</span>\
            </div>\
        </div>\
    ");
});

// initialize the awards data
// clear awards div before loop
$("#user_awards").empty();
// awards loop
data.default.awards.forEach(function(item){
    //append item in div
    $("#user_awards").append(
        "\
        <li>\
            <i class=\"fa-li fa fa-trophy text-warning\"></i>\
            "+((item.rank != null)?item.rank:"")
            +((item.sup != null)?"<sup>" + item.sup + "</sup>":"")
            +((item.rank != null)?((item.max != null)?" Place of " + item.max:" Place"):"") 
            +((item.rank != null)?" - ":"")
            +item.title + " - " + item.description + " " + " - " + item.date
            +((item.file != null)?" - <a href=\""+item.file + "\">view</a>":"") + "\
        </li>\
    ");
});
