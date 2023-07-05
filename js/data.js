

function getData() {

    var data = new function () {
        this.Importance = { LOW: 0, MEDIUM: 1, HIGH: 2 };

        this.fr = {
            'domicile': 'Tunis, Tunisie',
            'resumeDescription': 'Développeur orienté <b>optimisation</b> et en quête de <b>perfection</b>. \
        Attentif aux détails et <b>prêt à apprendre</b> à tout moment',
            'interests': [
                'Travail d\'équipe & partage de connaissances',
                'Optimisation backend & algorithmique',
                'Résolution de problèmes & programmation compétitive',
                'Architectures logicielles & cycles de développement',
            ],
            'otherSkills': [
                'Développement en .Net MVC & Core',
                'Développement en utililisant le Spring framework (Java)',
                'Développement Agile & Scrum',
                'SQL, Mysql, Oracle(PL/SQL), Sybase(TransactSQL) & SQL Server (T-SQL)',
                'Optimisation des algorithmes (algorithmes et structures de données)',
                'Développement en C & structures de données de base du C++',
            ],
            'projects': [
                {
                    'title': 'Corp ERP',
                    'technologies': ' C#, .Net 6, Domain Driven Design, Angular, Docker, RabbitMQ',
                    'description': 'Corp <b>ERP</b> est une <b>application Web</b> conçue pour aider les entreprises informatiques à gérer et suivre \
                    les documents électroniques, inventaire, finances et autres processus et opérations critiques. Le système capture, \
                    organise et suit toutes les données requises dans un format complet et fiable pour permettre une prise de décision rapide. \
                    Il offre également aux utilisateurs un accès facile à des rapports détaillés et à des analyses pour une meilleure prise de décision.',
                    'duration': 'avril 2023',
                    'projectLink': 'https://github.com/touir1/Corp.ERP',
                    'projectLinkLabel': 'dépôt github'
                },
                {
                    'title': 'Documentation d\'Algorithmes & Data Structures',
                    'technologies': 'Java',
                    'description': 'Cette documentation fournit un aperçu complet des divers <b>algorithmes, structures de données, \
                    trucs et astuces pour résoudre des problèmes</b>. Les exemples de code de cette documentation utilisent principalement Java. Chaque \
                    les algorithmes et structures de données sont expliqués en détail, y compris leurs implémentations et les <b>complexités \
                    temporelles</b> associées. De plus, la documentation comprend des listes de structures de données et d\'algorithmes \
                    pour référence rapide.',
                    'duration': 'juillet 2022',
                    'projectLink': 'https://github.com/touir1/Algorithms-Data-Structures-Cheat-sheet',
                    'projectLinkLabel': 'dépôt github'
                },
				{
                    'title': 'Solutions de Competitive Programming',
                    'technologies': 'Java',
                    'description': 'Ce référentiel GitHub sert de documentation de mon parcours quotidien de <b>résolution de problèmes</b>, \
                    spécifiquement destiné à la préparation des entretiens avec Google. Le référentiel comprend une collection de problèmes résolus, \
                    beaucoup étant résolus dans le cadre de la pratique quotidienne. De plus, je résous les problèmes UVa répertoriés dans le livre \
                    « Competitive Programming 3 » de Steven & Felix Halim en lisant ce dernier.',
                    'duration': 'janvier 2022',
                    'projectLink': 'https://github.com/touir1/ProblemSolving',
                    'projectLinkLabel': 'dépôt github'
                },
				{
                    'title': 'API Librairie pour Workflow',
                    'technologies': 'Java',
                    'description': 'Le projet <b>workflow API</b> basé sur Java fournit des fonctionnalités essentielles pour gérer \
                    les <b>cycles</b> de flux de travail, surveillance de leur <b>état</b>, gestion des tâches et journalisation. \
                    Il permet aux utilisateurs de <b>contrôler l\'exécution du workflow</b>, <b>suivre la progression</b>, \
                    <b>gérer les tâches et les associations</b>, et gagner de la visibiliter grâce à la journalisation. Cette API offre \
                    une solution simplifiée pour une gestion efficace des workflows.',
                    'duration': 'décembre 2019',
                    'projectLink': 'https://github.com/touir1/workflowApi',
                    'projectLinkLabel': 'dépôt github'
                },
                {
                    'title': 'synchronisation de musique Youtube',
                    'technologies': 'Python, ffmpeg',
                    'description': 'Ce projet représente un programme en python utilisé pour télécharger des <b>vidéos youtube en format mp3</b> \
                    et de garder trace des fichiers mp3 téléchargé. Ce projet a été développé pour faciliter and automatiser le téléchargement \
                     de musiques depuis youtube.',
                    'duration': 'octobre 2018',
                    'projectLink': 'https://github.com/touir1/youtube-music-sync',
                    'projectLinkLabel': 'dépôt github'
                },
                {
                    'title': 'structures de données C',
                    'technologies': 'Langage C',
                    'description': 'Ce projet représente une implémentation des <b>structures de données</b> connus. \
                    Ce projet a été développé afin de rafraîchir mes connaissances du <b>langage C</b> et pour voir \
                     si je pouvais développer une bibliothéque C facile d\'utilisation implémentant tout les structures de données connus.',
                    'duration': 'septembre 2018',
                    'projectLink': 'https://github.com/touir1/Data-structures-C',
                    'projectLinkLabel': 'dépôt github'
                },
                {
                    'title': 'Indexation de fichiers',
                    'technologies': 'nodejs, jquery, javascript, npm',
                    'description': 'Ce projet représente une application web qui permet d\'<b>indexer</b> un répertoire \
                    dans le disque. Ce projet a été réalisé afin de faciliter l\'accés à une documentation qui est éparpiller \
                     sur plusieurs répertoires dans le disque.',
                    'duration': 'septembre 2018',
                    'projectLink': 'https://github.com/touir1/disk-file-scraping',
                    'projectLinkLabel': 'dépôt github'
                },
                {
                    'title': 'Site web personnel',
                    'technologies': 'HTML, css, javascript, jquery, gulp, npm',
                    'description': 'Ce projet représente un <b>site web personnel</b> pour remplacer le CV standard.\
                     Au cours de son développement, j\'ai découvert les <b>pages Github</b> qui permettent d\'héberger\
                     un site web statique et j\'ai renforcé mes connaissances en css et en javascript.',
                    'duration': 'août 2018',
                    'projectLink': 'https://github.com/touir1/touir1.github.io',
                    'projectLinkLabel': 'dépôt github'
                },
                {
                    'title': 'Algorithme de régression linéaire',
                    'technologies': 'Python, jupyter notebook, matplotlib, latex',
                    'description': 'Ce projet représente une implémentation de l\'algorithme de <b>régression linéaire</b> simple \
                    et une implémentation de cette dernière en utilisant l\'<b>algorithme du gradient</b>. \
                    Ce projet a été développé dans le but de comprendre ces algorithmes de <b>science des données</b>. \
                    Ce projet est bien documenté et ceci en utilisant les notebooks Jupyter, Latex pour les formules de math \
                    et Matplotlib pour la <b>visualisation des données</b>.',
                    'duration': 'juillet 2018',
                    'projectLink': 'https://github.com/touir1/linear-regression-SGD',
                    'projectLinkLabel': 'dépôt github'
                },
                {
                    'title': 'Analyse de sentiments des tweets',
                    'technologies': 'Python, twitter api, Jupyter notebook',
                    'description': 'Ce projet a été réalisé pour essayer de faire une <b>analyse des sentiments</b> des tweets\
                     en utilisant la bibliothéque Textblob. Ce projet est documenté en utilisant une notebook Jupyter.',
                    'duration': 'juillet 2018',
                    'projectLink': 'https://github.com/touir1/sentiment-analysis-twitter-textblob',
                    'projectLinkLabel': 'dépôt github'
                },
                {
                    'title': 'Facebook chat en mode console',
                    'technologies': 'python, fbchat api',
                    'description': 'Ce projet représente une <b>application de chat</b> Facebook développé en mode console. \
                    Ce projet a été développé dans le but d\'apprenddre le langage de programmation python. J\'ai \
                    utilisé un api nommé <b>fbchat</b> pour la réalisation du projet.',
                    'duration': 'septembre 2017',
                    'projectLink': 'https://github.com/touir1/Facebook-Chat-Terminal-mode',
                    'projectLinkLabel': 'dépôt github',
                },
                {
                    'title': 'Classification de spam',
                    'technologies': 'python, sklearn',
                    'description': 'Ce projet représente un classificateur de spam qui peux déterminer si un mail \
                    est un spam ou pas. \
                 Ce projet a été développé dans le but d\'apprendre l\'algorithme de <b>classification naïve bayésienne</b> \
                 du domaine des <b>sciences de données</b>.',
                    'duration': 'août 2017',
                    'projectLink': 'https://github.com/touir1/Spam-Classifier-machine-learning-Gaussian-Naive-Bayes',
                    'projectLinkLabel': 'dépôt github',
                },
                {
                    'title': 'Date2',
                    'technologies': 'Javascript, npm, nodejs',
                    'description': 'Date2 est un <b>module npm</b> Javascript créé pour la manipulation des dates. \
                    Ce dernier a été développé pour faciliter la <b>manipulation des dates</b> et il fourni un ensemble de fonctions <b>facile d\'utilisation</b>. \
                    Ce module peut être utilisé dans des applications Javascript ou Node.js \
                    application.',
                    'duration': 'juin 2017',
                    'projectLink': 'https://github.com/touir1/Date2',
                    'projectLinkLabel': 'dépôt github',
                },
            ],
            'education': [
                {
                    'title': 'Ecole Supérieure Privée d\'Ingénierie et de Technologie (ESPRIT) Tunis, Tunisia',
                    'degree': 'Diplôme d\'Ingénieur',
                    'description': 'Informatique - Génie Logiciel',
                    'duration': 'Septembre 2017 - Juillet 2022',
                    'score': '16.5 / 20',
                },
                {
                    'title': 'Institut Supérieure de Gestion (ISG) Tunis, Tunisia',
                    'degree': 'diplôme de Licence Fondamentale',
                    'description': 'Informatique - Informatique Appliqué à la Gestion',
                    'duration': 'Septembre 2014 - Juin 2017',
                    'score': '15.44 / 20',
                },
                {
                    'title': 'Lycée Pilote de l\'Ariana (LPA), Tunisie',
                    'degree': 'Diplôme de Baccalauréat',
                    'description': 'Science - Mathématiques',
                    'duration': 'Septembre 2010 - Juin 2014',
                    'score': '16.07 / 20',
                },
            ],
            'awards': [
                {
                    'title': 'Infor Hackathon',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Troisième édition (participation)',
                    'date': '2018',
                    'file': 'https://drive.google.com/file/d/10fwaPuFYQbb31wLfkZAJm0tQZBDJ0sWJ/view',
                },
                {
                    'title': 'Infor/Predictix Hackathon',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Deuxième édition (participation)',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1QObKZ2b7Azo1Qdw9xxJnTAc_QdCDJrz2/view',
                },
                {
                    'title': 'ACM TCPC',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Tunisian Collegiate Programming Contest (participation)',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1Ym9lS34BQbEc1MEwYOhPyhUxGUHeXxWi/view',
                },
                {
                    'title': 'Certification Microsoft : MTA 98-361',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.HIGH,
                    'description': 'Fondamentaux du Développement Logiciel',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1tVIQjzY4wABN_6Mq_Yv4gRwYYUtElAUm/view',
                },
                {
                    'title': 'Certification Microsoft : MTA 98-364',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.HIGH,
                    'description': 'Fondamentaux de la Base de Données',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1V_VD7h9ZQFcS2mNHnSLruoSGpBzkvma5/view?usp=sharing',
                },
                {
                    'title': 'Google',
                    'rank': '1896',
                    'max': '2815',
                    'sup': 'ème',
                    'importance': this.Importance.MEDIUM,
                    'description': 'Hashcode (participation)',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1QEm7YgXOXv0jZWtAfayhbw_9RBHebyRi/view?usp=sharing',
                },
                {
                    'title': 'Formation',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'ERP SAP Business One (participation)',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/18LZotJiyBYjTMMCLzodiN_F2Twnn-q-j/view?usp=sharing',
                },
                {
                    'title': 'Compétition',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Olympiade Universitaire de l’Informatique (participation)',
                    'date': '2016',
                    'file': null,
                },
                {
                    'title': 'Formations',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Camping Culturel Estudiantin (participation)',
                    'date': '2016',
                    'file': null,
                },
                {
                    'title': 'Formation',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'ASP.Net MVC 4 (participation)',
                    'date': '2016',
                    'file': 'https://drive.google.com/file/d/1whLmSH-zyMtgRFUKtnWCIL5lMzC3xKXc/view?usp=sharing',
                },
                {
                    'title': 'Google',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Code jam (participation)',
                    'date': '2016',
                    'file': null,
                },
                {
                    'title': 'Google',
                    'rank': '828',
                    'max': '1054',
                    'sup': 'ème',
                    'importance': this.Importance.MEDIUM,
                    'description': 'Hashcode (participation)',
                    'date': '2016',
                    'file': 'https://drive.google.com/file/d/1-6r1mtSvf9A9YYcPfvxmh8Gw0YJVEcm1/view?usp=sharing',
                },
                {
                    'title': 'ACM ACPC',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Arabian Collegiate Programming Contest (nominé mais non participation)',
                    'date': '2016',
                    'file': 'https://drive.google.com/file/d/1-4NHucLW6lntTG7pG3HLOHstCD2Y7_cA/view?usp=sharing',
                },
                {
                    'title': 'ACM TCPC',
                    'rank': '6',
                    'max': null,
                    'sup': 'ème',
                    'importance': this.Importance.HIGH,
                    'description': 'Tunisian Collegiate Programming Contest',
                    'date': '2016',
                    'file': 'https://drive.google.com/file/d/1TgXCXcWJhxrQ2N5QHw5hvOVVjEuxnczy/view?usp=sharing',
                },
                {
                    'title': 'Binetna',
                    'rank': '1',
                    'max': null,
                    'sup': 'ère',
                    'importance': this.Importance.HIGH,
                    'description': 'Deuxième édition',
                    'date': '2015',
                    'file': null,
                },
            ],
            'experience': [
                {
                    'title': 'Ingénieur Développement',
                    'subtitle': 'Oddo BHF',
                    'companyLogo': './img/Oddo_BHF_Logo.png',
                    'description': 'Au cours de mon expérience chez Oddo BHF en tant qu\'ingénieur logiciel dans l\'équipe \
                    de <b>gestion d\'actifs</b>, j\'ai développé et maintenu avec succès des solutions logicielles Web pour \
                    améliorer la récupération de documents, calculer les <b>scores ESG</b> et faciliter l\'intégration des \
                    données. Travaillant en étroite collaboration avec les équipes d\'Asset Management, j\'ai contribué \
                    à la production et à la maintenance quotidienne du Système d\'Information AM. De plus, j\'ai joué \
                    un rôle clé dans la mise en œuvre des <b>API Restful</b> et la gestion des <b>applications de reporting \
                    financier</b>. Grâce à ces expériences, j\'ai acquis une expertise dans une gamme de technologies, \
                    notamment <b>C#, .NET MVC4, Durandal, Knockout JS, Java, SAP Business Objects et SQL Server T-SQL</b>. \
                    Mon passage chez Oddo BHF a renforcé mes compétences en développement de logiciels dans le secteur de \
                    la gestion d\'actifs, me permettant de proposer des solutions percutantes.',
                    'date': 'Mai 2019, Aujourd\'hui',
                },
                {
                    'title': 'Analyste Développeur',
                    'subtitle': 'Linedata',
                    'companyLogo': './img/Linedata_Logo.png',
                    'description': 'L\'une des nombreuses choses que j\'ai apprises en travaillant chez Linedata \
                    est le <b>cycle de développement</b> de logiciels. Le travail est partitionné en différentes étapes \
                    allant de la demande du client jusqu\'aux tests après le déploiement du livrable du projet. J\'ai \
                    travaillé en tant que développeur logiciel full stack en utilisant le <b>framework Spring</b> et \
                     le <b>SGBD Sybase</b> comme technologies backend. Avec une équipe de 9 personnes, nous avons développé \
                     un logiciel appelé Uniloan, utilisé pour gérer d’énormes crédits et financements (<b>crédits \
                        syndiqués</b>).',
                    'date': 'Septembre 2017, Avril 2019',
                },
                {
                    'title': 'Stagiaire - Développeur web',
                    'subtitle': 'Linedata',
                    'companyLogo': './img/Linedata_Logo.png',
                    'description': 'J\'ai appris beaucoup de choses lors de mon stage chez Linedata. \
                    J\'ai eu le plaisir de travailler sur un projet qui a aidé les chefs d\'équipe à \
                    avoir une vue générale sur les performances de chaque membre de leur équipe en \
                    utilisant la base de données <b>Jira</b>. J\'ai également eu la chance d\'apprendre le \
                    <b>framework Java Spring</b> et de travailler avec le framework <b>AngularJS</b>. Outre les \
                    aspects techniques, j\'ai également eu la chance d\'apprendre à travailler en \
                    équipe, à mener des enquêtes et à rendre compte de ce que j\'ai trouvé ou fait \
                    jusqu\'à présent.',
                    'date': 'Février 2017, Juin 2017',
                },
                {
                    'title': 'Stagiaire - Banquier',
                    'subtitle': 'Banque Zitouna',
                    'companyLogo': './img/Zitouna_Bank_Logo.png',
                    'description': 'Mon stage chez la banque Zitouna m\'a permis de connaitre \
                    comment les <b>sociétés financières</b> fonctionnent en interne. J\' ai appris le rôle \
                    de chaque individu (caissier, ressource humaine, superviseur sénior et le \
                    directeur de l\'agence). J\'ai aussi vu comment ils gèrent les risques et distribuent \
                    la charge de travail sur les gestionnaires.',
                    'date': 'Juillet 2015, Août 2015',
                },
            ],
        };
        this.en = {
            'name': 'Touir',
            'surname': 'Mohamed Ali',
            'email': 'touir.mat@gmail.com',
            'phone': '',
            'facebook': 'https://www.facebook.com/mohamedali.touir.50',
            'linkedin': 'https://www.linkedin.com/in/mohamed-ali-touir-513235108/',
            'github': 'https://github.com/touir1',
            'twitter': 'https://twitter.com/TouirMohamedAli',
            'domicile': 'Tunis, Tunisia',
            'resumeDescription': '<b>Optimisation</b> oriented developer and a <b>perfection</b> seeker. \
         Has an eye for details and always <b>willing to learn</b>.',
            'interests': [
                'Teamwork & knowledge sharing',
                'Backend optimisations & algorithmics',
                'Competitive programming & problem solving',
                'Software architectures & development cycles',
            ],
            'skills': [
                {
                    'title': 'javascript',
                    'iconClass': 'fab fa-js-square',
                },
                {
                    'title': 'python',
                    'iconClass': 'fab fa-python',
                },
                {
                    'title': 'html5',
                    'iconClass': 'fab fa-html5',
                },
                {
                    'title': 'css3',
                    'iconClass': 'fab fa-css3-alt',
                },
                {
                    'title': 'java',
                    'iconClass': 'fab fa-java',
                },
                {
                    'title': 'angularjs',
                    'iconClass': 'fab fa-angular',
                },
                {
                    'title': 'nodejs',
                    'iconClass': 'fab fa-node',
                },
                {
                    'title': 'npm',
                    'iconClass': 'fab fa-npm',
                },
                {
                    'title': 'android',
                    'iconClass': 'fab fa-android',
                },
                {
                    'title': 'linux',
                    'iconClass': 'fab fa-linux',
                },
                {
                    'title': 'windows',
                    'iconClass': 'fab fa-windows',
                },
            ],
            'otherSkills': [
                'ASP.Net MVC & Core Development',
                'Spring Java framework Development',
                'Agile Development & Scrum',
                'SQL, Mysql, Oracle(PL/SQL), Sybase(TransactSQL) & SQL Server (T-SQL)',
                'Algorithm optimisations (algorithms & data structures)',
                'C Development & C++ basic data structures',
            ],
            'projects': [
                {
                    'title': 'Corp ERP',
                    'technologies': ' C#, .Net 6, Domain Driven Design, Angular, Docker, RabbitMQ',
                    'description': 'Corp <b>ERP</b> is a <b>web application</b> designed to help It companies manage and track \
                    electronic documents, inventory, finance and other processes and critical operations. The system captures, \
                    organizes and tracks all required data in a comprehensive and reliable format to support quick decision-making. \
                    It also provides uses with easy access to detailed reports and analysis for improved decision making.',
                    'duration': 'april 2023',
                    'projectLink': 'https://github.com/touir1/Corp.ERP',
                    'projectLinkLabel': 'github repository'
                },
                {
                    'title': 'Algorithms & Data Structures cheat sheet',
                    'technologies': 'Java',
                    'description': 'This documentation provides a comprehensive overview of various <b>algorithms, data structures, \
                    problem-solving tricks, and tips</b>. The code examples in this documentation primarily use Java. Each \
                    algorithm and data structure is thoroughly explained, including their implementations and associated \
                    <b>time complexities</b>. Additionally, the documentation includes listings of data structures and algorithms \
					for quick reference.',
                    'duration': 'july 2022',
                    'projectLink': 'https://github.com/touir1/Algorithms-Data-Structures-Cheat-sheet',
                    'projectLinkLabel': 'github repository'
                },
				{
                    'title': 'Competitive Programming Solutions',
                    'technologies': 'Java',
                    'description': 'This GitHub repository serves as a documentation of my daily <b>problem-solving</b> journey, \
                    specifically aimed at preparing for Google interviews. The repository includes a collection of solved problems, \
                    with many being solved as part of daily practice. Additionally, I am solving UVa problems listed in the book \
                    "Competitive Programming 3" by Steven & Felix Halim while reading the book.',
                    'duration': 'january 2022',
                    'projectLink': 'https://github.com/touir1/ProblemSolving',
                    'projectLinkLabel': 'github repository'
                },
				{
                    'title': 'Workflow API library',
                    'technologies': 'Java',
                    'description': 'The Java-based <b>workflow API</b> project provides essential functionalities for managing \
                    workflow <b>cycles</b>, monitoring their <b>state</b>, handling tasks, and logging. It enables users to \
                    <b>control workflow execution</b>, <b>track progress</b>, <b>manage tasks and associations</b>, and gain \
                    insights through logging. This API offers a streamlined solution for efficient workflow management.',
                    'duration': 'december 2019',
                    'projectLink': 'https://github.com/touir1/workflowApi',
                    'projectLinkLabel': 'github repository'
                },
                {
                    'title': 'Youtube music sync',
                    'technologies': 'Python, ffmpeg',
                    'description': 'This project represents a python program used to download <b>youtube videos in mp3 format</b> \
                    and to keep track of the mp3 music downloaded. This project was meant to facilitate and automate the download of music from youtube.',
                    'duration': 'october 2018',
                    'projectLink': 'https://github.com/touir1/youtube-music-sync',
                    'projectLinkLabel': 'github repository'
                },
                {
                    'title': 'Data structures C',
                    'technologies': 'C langage',
                    'description': 'This project represents an implementation of the known <b>datastructures</b>. \
                    This project a was developed as a mean to refresh my knowledge of the <b>C langage</b> and to see \
                     if I could build an easy to use library implementing all the known datastructures so far.',
                    'duration': 'september 2018',
                    'projectLink': 'https://github.com/touir1/Data-structures-C',
                    'projectLinkLabel': 'github repository'
                },
                {
                    'title': 'Files indexing',
                    'technologies': 'nodejs, jquery, javascript, npm',
                    'description': 'This project represents a web application that was meant to <b>index</b> a directory \
                    in the disk. This project was developed to make it easy to access the documentation which was scattered \
                     over multiple directories in the disk.',
                    'duration': 'september 2018',
                    'projectLink': 'https://github.com/touir1/disk-file-scraping',
                    'projectLinkLabel': 'github repository'
                },
                {
                    'title': 'Personal website',
                    'technologies': 'HTML, css, javascript, jquery, gulp, npm',
                    'description': 'This project represents a <b>personal website</b> to replace the standard CV.\
                 During its development, I discovered the <b>Github pages</b> that allow to host a static \
                 website and I reinforced my knowledge of css and javascript.',
                    'duration': 'august 2018',
                    'projectLink': 'https://github.com/touir1/touir1.github.io',
                    'projectLinkLabel': 'github repository'
                },
                {
                    'title': 'Linear regression algorithm',
                    'technologies': 'Python, jupyter notebook, matplotlib, latex',
                    'description': 'This project represents an implementation of the simple <b>linear regression</b> algorithm \
                 From scratch and then using the <b>gradient descent</b> algorithm with it. \
                 This project was a way to understand those <b>data science</b> algorithms. \
                 This project is well documented using the Jupyter notebooks, Latex for math formulas \
                 and Matplotlib for the <b>data visualisation</b>.',
                    'duration': 'july 2018',
                    'projectLink': 'https://github.com/touir1/linear-regression-SGD',
                    'projectLinkLabel': 'github repository'
                },
                {
                    'title': 'Sentiment analysis of tweets',
                    'technologies': 'Python, twitter api, Jupyter notebook',
                    'description': 'This project was made to test out the <b>sentiment analysis</b> of tweets using\
                     the Textblob library. This was documented using the Jupyter notebook.',
                    'duration': 'july 2018',
                    'projectLink': 'https://github.com/touir1/sentiment-analysis-twitter-textblob',
                    'projectLinkLabel': 'github repository'
                },
                {
                    'title': 'Facebook chat terminal mode',
                    'technologies': 'python, fbchat api',
                    'description': 'This project represents a Facebook <b>chat application</b> built to work in terminal.\
                 The project was meant to teach me about python a little more so it was a great experience. I used a \
                 facebook api called <b>fbchat</b>.',
                    'duration': 'september 2017',
                    'projectLink': 'https://github.com/touir1/Facebook-Chat-Terminal-mode',
                    'projectLinkLabel': 'github repository',
                },
                {
                    'title': 'Spam Classifier',
                    'technologies': 'python, sklearn',
                    'description': 'This project represents a Spam classifier who determines if your mail \
                    is a spam or not. \
                 The project was meant to teach me about the <b>naive bayes</b> algorithm from the <b>data science</b> \
                 field.',
                    'duration': 'august 2017',
                    'projectLink': 'https://github.com/touir1/Spam-Classifier-machine-learning-Gaussian-Naive-Bayes',
                    'projectLinkLabel': 'github repository',
                },
                {
                    'title': 'Date2',
                    'technologies': 'Javascript, npm, nodejs',
                    'description': 'Date2 is a Javascript <b>npm module</b> created to manipulate the date. \
                    It was designed to easily <b>manipulate the date</b> and it provides a pretty fair number \
                    of functions that are <b>easy to use</b>. This module can be used in a Javascript or a Node.js \
                    application.',
                    'duration': 'june 2017',
                    'projectLink': 'https://github.com/touir1/Date2',
                    'projectLinkLabel': 'github repository',
                },
            ],
            'education': [
                {
                    'title': 'Private Higher School of Engineering and Technology (ESPRIT) Tunis, Tunisia',
                    'degree': 'Engineering degree',
                    'description': 'Computer Science - Software Engineering Track',
                    'duration': 'September 2017 - July 2022',
                    'score': '16.5 / 20',
                },
                {
                    'title': 'Higher Institute of Management (ISG) Tunis, Tunisia',
                    'degree': 'Bachelor degree',
                    'description': 'Computer Science - Computing Applied to Management Track',
                    'duration': 'September 2014 - June 2017',
                    'score': '15.44 / 20',
                },
                {
                    'title': 'Pioneer School of Ariana (LPA), Tunisia',
                    'degree': 'Bacalaureate degree',
                    'description': 'Science - Mathematics Track',
                    'duration': 'September 2010 - June 2014',
                    'score': '16.07 / 20',
                },
            ],
            'awards': [
                {
                    'title': 'Infor Hackathon',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Third Edition (participation)',
                    'date': '2018',
                    'file': 'https://drive.google.com/file/d/10fwaPuFYQbb31wLfkZAJm0tQZBDJ0sWJ/view',
                },
                {
                    'title': 'Infor/Predictix Hackathon',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Second Edition (participation)',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1QObKZ2b7Azo1Qdw9xxJnTAc_QdCDJrz2/view',
                },
                {
                    'title': 'ACM TCPC',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Tunisian Collegiate Programming Contest (participation)',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1Ym9lS34BQbEc1MEwYOhPyhUxGUHeXxWi/view',
                },
                {
                    'title': 'Microsoft Certification : MTA 98-361',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.HIGH,
                    'description': 'Software Development Fundamentals',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1tVIQjzY4wABN_6Mq_Yv4gRwYYUtElAUm/view',
                },
                {
                    'title': 'Microsoft Certification : MTA 98-364',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.HIGH,
                    'description': 'Database Fundamentals',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1V_VD7h9ZQFcS2mNHnSLruoSGpBzkvma5/view?usp=sharing',
                },
                {
                    'title': 'Google',
                    'rank': '1896',
                    'max': '2815',
                    'sup': 'th',
                    'importance': this.Importance.MEDIUM,
                    'description': 'Hashcode (participation)',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/1QEm7YgXOXv0jZWtAfayhbw_9RBHebyRi/view?usp=sharing',
                },
                {
                    'title': 'Training',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'ERP SAP Business One (participation)',
                    'date': '2017',
                    'file': 'https://drive.google.com/file/d/18LZotJiyBYjTMMCLzodiN_F2Twnn-q-j/view?usp=sharing',
                },
                {
                    'title': 'Competition',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'University Olympiad of Computing (participation)',
                    'date': '2016',
                    'file': null,
                },
                {
                    'title': 'Trainings',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Student Cultural Camping (participation)',
                    'date': '2016',
                    'file': null,
                },
                {
                    'title': 'Training',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'ASP.Net MVC 4 (participation)',
                    'date': '2016',
                    'file': 'https://drive.google.com/file/d/1whLmSH-zyMtgRFUKtnWCIL5lMzC3xKXc/view?usp=sharing',
                },
                {
                    'title': 'Google',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Code jam (participation)',
                    'date': '2016',
                    'file': null,
                },
                {
                    'title': 'Google',
                    'rank': '828',
                    'max': '1054',
                    'sup': 'th',
                    'importance': this.Importance.MEDIUM,
                    'description': 'Hashcode (participation)',
                    'date': '2016',
                    'file': 'https://drive.google.com/file/d/1-6r1mtSvf9A9YYcPfvxmh8Gw0YJVEcm1/view?usp=sharing',
                },
                {
                    'title': 'ACM ACPC',
                    'rank': null,
                    'max': null,
                    'sup': null,
                    'importance': this.Importance.MEDIUM,
                    'description': 'Arabian Collegiate Programming Contest (nominated but didn\'t participate)',
                    'date': '2016',
                    'file': 'https://drive.google.com/file/d/1-4NHucLW6lntTG7pG3HLOHstCD2Y7_cA/view?usp=sharing',
                },
                {
                    'title': 'ACM TCPC',
                    'rank': '6',
                    'max': null,
                    'sup': 'th',
                    'importance': this.Importance.HIGH,
                    'description': 'Tunisian Collegiate Programming Contest',
                    'date': '2016',
                    'file': 'https://drive.google.com/file/d/1TgXCXcWJhxrQ2N5QHw5hvOVVjEuxnczy/view?usp=sharing',
                },
                {
                    'title': 'Binetna',
                    'rank': '1',
                    'max': null,
                    'sup': 'st',
                    'importance': this.Importance.HIGH,
                    'description': 'Second Edition',
                    'date': '2015',
                    'file': null,
                },
            ],
            'experience': [
                {
                    'title': 'Software Engineer',
                    'subtitle': 'Oddo BHF',
                    'companyLogo': './img/Oddo_BHF_Logo.png',
                    'description': 'During my tenure at Oddo BHF as a Software Engineer in the <b>Asset Management</b> Team, \
                    I have successfully developed and maintained web software solutions to improve document retrieval, \
                    calculate <b>ESG scores</b>, and facilitate data integration. Working closely with the Asset Management \
                    teams, I have contributed to the daily production and maintenance of the AM Information System. \
                    Additionally, I have played a key role in implementing <b>Restful APIs</b> and managing <b>financial \
                    reporting applications</b>. Through these experiences, I have gained expertise in a range of \
                    technologies, including <b>C#, .NET MVC4, Durandal, Knockout JS, Java, SAP Business Objects, \
                    and SQL Server T-SQL</b>. My time at Oddo BHF has enhanced my skills in software development \
                    within the asset management industry, enabling me to deliver impactful solutions.',
                    'date': 'Mai 2019, Today',
                },
                {
                    'title': 'Analyst & Software Developer',
                    'subtitle': 'Linedata',
                    'companyLogo': './img/Linedata_Logo.png',
                    'description': 'One of the many things I learned from working at Linedata \
                    was the software <b>development cycle</b>. The work is partitioned into different \
                    steps going from the client request until the tests after the deployment of \
                    the project deliverable. I worked as a full stack software developer using \
                    <b>Spring framework</b> and <b>Sybase DBMS</b> as backend technologies. With \
                    a team of 9 persons, we worked as developers of a software named Uniloan used \
                    to manage huge loans and financements (<b>Syndicated loans</b>).',
                    'date': 'September 2017, April 2019',
                },
                {
                    'title': 'Intern - Web developer',
                    'subtitle': 'Linedata',
                    'companyLogo': './img/Linedata_Logo.png',
                    'description': 'I learned many things during my internship at Linedata. \
                    I had the pleasure to work on a project that helped the team leaders to \
                    get a general view on the performance of each member of their team using \
                    <b>Jira</b> database. I also had the chance to learn the Java <b>Spring framework</b> \
                    and work with <b>AngularJS</b> framework. Apart from the technical stuff, I also \
                    had the chance to learn how to work with a team, do some investigations \
                    and always report what I found or did so far.',
                    'date': 'February 2017, June 2017',
                },
                {
                    'title': 'Intern - Banker',
                    'subtitle': 'Zitouna Bank',
                    'companyLogo': './img/Zitouna_Bank_Logo.png',
                    'description': 'My internship at Zitouna Bank was all about learning how \
                    <b>financial companies</b> work. I learned a lot about the role of each individual \
                    (Cashier, Human ressource, senior supervisor and the manager). I also learned \
                    about processes used to minimize the risks and distribute the work load.',
                    'date': 'July 2015, August 2015',
                },
            ],
        };

        this.default = this.en;
    }

    return data;
}