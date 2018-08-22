// langage variable
var lang = 'default';

// langage button variables
var toggle = document.getElementById('lang_container');
var toggleContainer = document.getElementById('lang_toggle-container');
var toggleNumber;

// get the variable in the page langage
var getVarInLang = function(data,varName){
    if(lang == 'en'){
        return data.en[varName];
    }
    else if(lang == 'fr'){
        return data.fr[varName];
    }
    else{
        return data.default[varName];
    }
}

// loads the user data
var loadUserData = function(langChanged){
    if(typeof langChanged === 'undefined' || langChanged == false){
        // initialize the user data
        $("#user_surname").html(data.default.surname);
        $("#user_name").html(data.default.name);
        $('#user_fullName').html(data.default.surname + ' ' + data.default.name);
        $("#user_email").html(data.default.email);
        $("#user_email").attr("href", "mailto:"+data.default.email);
        $("#user_phone").html(data.default.phone);

        // initialize the social data
        $("#user_linkedin").attr("href", data.default.linkedin);
        $("#user_github").attr("href", data.default.github);
        $("#user_facebook").attr("href", data.default.facebook);
        $("#user_twitter").attr("href", data.default.twitter);
    }

    $("#user_domicile").html(getVarInLang(data,'domicile'));
}

// loads the skills data
var loadSkillsData = function(langChanged){
    if(typeof langChanged === 'undefined' || langChanged == false){
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
    }

    // initialize the other skills data
    // clear other skills div before loop
    $("#user_otherSkills").empty();
    // other skills loop
    getVarInLang(data,'otherSkills').forEach(function(item){
        //append item in div
        $("#user_otherSkills").append(
            "\
            <li>\
            <i class=\"fa-li fa fa-check\"></i>\
            "+item+"\
            </li>\
        ");
    });
}

// loads the education data
var loadEducationData = function(langChanged){
    if(typeof langChanged === 'undefined' || langChanged == false){
        // nothing to do
    }

    // initialize the education data
    // clear education div before loop
    $("#user_education").empty();
    // education loop
    getVarInLang(data,'education').forEach(function(item){
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
}

// loads the award data
var loadAwardData = function(langChanged){
    if(typeof langChanged === 'undefined' || langChanged == false){
        // nothing to do
    }

    // initialize the awards data
    // clear awards div before loop
    $("#user_awards").empty();
    // awards loop
    getVarInLang(data,'awards').forEach(function(item){
        //append item in div
        $("#user_awards").append(
            "\
            <li>\
                <i class=\"fa-li fa fa-trophy text-warning\"></i>\
                "+((item.rank != null)?item.rank:"")
                +((item.sup != null)?"<sup>" + item.sup + "</sup>":"")
                +((item.rank != null)?((item.max != null)?" Place"+((lang == 'default' || lang == 'en')?" of ":" sur ") + item.max:" Place"):"") 
                +((item.rank != null)?" - ":"")
                +item.title + " - " + item.description + " " + " - " + item.date
                +((item.file != null)?" - <a href=\""+item.file + "\" target=\"_blank\">view</a>":"") + "\
            </li>\
        ");
    });
}

// loads all the data
// @langChanged = true || false
var loadData = function(langChanged){
    loadUserData(langChanged);
    loadEducationData(langChanged);
    loadSkillsData(langChanged);
    loadAwardData(langChanged);
}

// langage button controller
toggle.addEventListener('click', function() {
    toggleNumber = !toggleNumber;
    lang = ((lang == 'default' || lang == 'en')?'fr':'en');
    loadData(true);
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = '#18c52c';
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = 'dodgerblue';
	}
});

loadData(false);