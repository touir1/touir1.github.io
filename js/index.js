// initialize the user data
$("#user_surname").html(data.default.surname);
$("#user_name").html(data.default.name);
$('#user_fullName').html(data.default.surname + ' ' + data.default.name);
$("#user_domicile").html(data.default.domicile);
$("#user_email").html(data.default.email);
$("#user_email").attr("href", "mailto:"+data.default.email);
$("#user_phone").html(data.default.phone);

// initialize the social data
$("#user_linkedin").attr("href", data.default.linkedin);
$("#user_github").attr("href", data.default.github);
$("#user_facebook").attr("href", data.default.facebook);
$("#user_twitter").attr("href", data.default.twitter);