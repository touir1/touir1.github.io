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

