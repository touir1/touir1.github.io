// langage variable
var lang = 'default';

// langage button variables
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

var chooseEnFr = function(enStatement, frStatement, defaultStatement){
    if(lang == 'en'){
        return enStatement;
    }
    else if(lang == 'fr'){
        return frStatement;
    }
    else{
        return defaultStatement;
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
    $("#user_resume_description").html(getVarInLang(data,'resumeDescription'));
}

var loadInterestsData = function(langChanged){
    if(typeof langChanged === 'undefined' || langChanged == false){
        // nothing to do
    }

    // initialize the other skills data
    // clear other skills div before loop
    $("#user_interest").empty();
    // other skills loop
    getVarInLang(data,'interests').forEach(function(item){
        //append item in div
        $("#user_interest").append(
            "\
            <p class=\"mb-2\">"+item+"</p>\
        ");
    });
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

// awards highlight function
var awardsImportanceHighlight = function(importance){
    var result = 'text-danger';
    if(data.Importance.HIGH == importance) result = 'text-warning';
    if(data.Importance.MEDIUM == importance) result = 'text-muted';
    return result; 
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
                <i class=\"fa-li fa fa-trophy "+awardsImportanceHighlight(item.importance)+"\"></i>\
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

var loadExperienceData = function(langChanged){
    if(typeof langChanged === 'undefined' || langChanged == false){
        // nothing to do
    }

    // initialize the experience data
    // clear experience div before loop
    $("#user_experience").empty();
    // experience loop
    getVarInLang(data,'experience').forEach(function(item){
        //append item in div
        $("#user_experience").append(
            "\
            <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\
                <div class=\"resume-content mr-auto\">\
                    <h3 class=\"mb-0\">"+item.title+"</h3>\
                    <div class=\"subheading mb-3\">"+item.subtitle+"</div>\
                    <p>"+item.description+"</p>\
                </div>\
                <div class=\"resume-date text-md-right\">\
                    <span class=\"text-primary\">"+item.date+"</span>\
                </div>\
            </div>\
        ");
    });
}

var loadProjectData = function(langChanged){
    if(typeof langChanged === 'undefined' || langChanged == false){
        // nothing to do
    }

    // initialize the project data
    // clear project div before loop
    $("#user_projects").empty();
    // project loop
    getVarInLang(data,'projects').forEach(function(item){
        //append item in div
        $("#user_projects").append(
            "\
            <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\
                <div class=\"resume-content mr-auto\">\
                    <h3 class=\"mb-0\">"+item.title+"</h3>\
                    <div class=\"subheading mb-3\">"+item.technologies+"</div>\
                    <div>"+item.description+"</div>"
                    +((item.projectLink != null)?"<p class=\"mt-1\">"+chooseEnFr("Link","Lien","Link")+": <a href=\""+item.projectLink+"\">"
                    +((item.projectLinkLabel!=null)?item.projectLinkLabel:item.title)+"</a></p>":"")
                +"</div>\
                <div class=\"resume-date text-md-right\">\
                    <span class=\"text-primary\">"+item.duration+"</span>\
                </div>\
            </div>\
        ");
    });
}

var loadTitles = function(langChanged){
    if(typeof langChanged === 'undefined' || langChanged == false){
        // nothing to do
    }
    if(lang == 'fr'){
        $("#user_nav_about").html("à propos");
        $("#user_nav_experience").html("expérience");
        $("#user_title_experience").html("expérience");
        $("#user_nav_education").html("études");
        $("#user_title_education").html("études");
        $("#user_nav_skills").html("compétences");
        $("#user_title_skills").html("compétences");
        $("#user_title_tools").html("langages de programmation & outils");
        $("#user_title_other_skills").html("autres compétences");
        $("#user_nav_interests").html("centre d'intérêts");
        $("#user_title_interests").html("centre d'intérêts");
        $("#user_nav_awards").html("prix");
        $("#user_title_awards").html("prix, certifications & participations");
        $("#user_nav_projects").html("projets");
        $("#user_title_projects").html("projets");
    }
    else {
        $("#user_nav_about").html("About");
        $("#user_nav_experience").html("Experience");
        $("#user_title_experience").html("Experience");
        $("#user_nav_education").html("Education");
        $("#user_title_education").html("Education");
        $("#user_nav_skills").html("Skills");
        $("#user_title_skills").html("Skills");
        $("#user_title_tools").html("Programming langages & tools");
        $("#user_title_other_skills").html("Other skills");
        $("#user_nav_interests").html("Interests");
        $("#user_title_interests").html("Interests");
        $("#user_nav_awards").html("Awards");
        $("#user_title_awards").html("Awards, Certifications & Participations");
        $("#user_nav_projects").html("projects");
        $("#user_title_projects").html("projects");
    }
}

// loads all the data
// @langChanged = true || false
var loadData = function(langChanged){
    loadUserData(langChanged);
    loadEducationData(langChanged);
    loadSkillsData(langChanged);
    loadAwardData(langChanged);
    loadTitles(langChanged);
    loadExperienceData(langChanged);
    loadInterestsData(langChanged);
    loadProjectData(langChanged);
}

// event to change the langage
$('#lang_checkbox_container').bind('click',function(){
    $('#lang_checkbox').prop('checked',!toggleNumber);
    toggleNumber = !toggleNumber;
    lang = ((lang == 'default' || lang == 'en')?'fr':'en');
    loadData(true);

    if (toggleNumber) {
        $('#en_lang_label').removeClass('lang_selected');
        $('#fr_lang_label').addClass('lang_selected');
	} else {
        $('#fr_lang_label').removeClass('lang_selected');
        $('#en_lang_label').addClass('lang_selected');
    }
    //$('.navbar-collapse').collapse('hide');
});

// checks if the @child node is a descendent of the @parent node
function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

// event to close the navbar if we click out of it
$(document).click(function(e) {
	if (!isDescendant($('#navbarSupportedContent')[0], e.target)) {
    	$('.navbar-collapse').collapse('hide');
    }
});

loadData(false);
