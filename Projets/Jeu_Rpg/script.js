/* on récupère toutes les parties qui sont susceptibles de changer après */
const debut = document.getElementsByClassName("menu");
const boutonJouer = document.getElementById("btnJouer");
const boutonOptions = document.getElementById("btnOptions");
const menu = document.getElementsByClassName("menuDeux");
const nom = document.getElementById("nom");
const capacite = document.getElementById("capacite");
const boutonValider = document.getElementById("play");
// const boutonInfo = document.getElementById("inforPerso");

// pour les textes concernant l'histoire
const histoire = document.getElementById("textuel");

// pour les choix 
const lesChoix = document.getElementById("lesBoutons");

// pour ajouter des images dans la div prévue
const divImage = document.getElementById("imageAjout");

// pour afficher une div après un clic qui été cachée de base
function AfficherDiv() {
    debut[0].style.display = "none";
    menu[0].style.display = "inline-block";
}


/******
*  Ci dessous, les fonctions concernant le jeu en lui-même  
*****/

/* on initialise le personnage */
let personnage = {
    nom: "",
    pointsVie: 30,
    force: 10,
    pointsResis: 0,
    xp: 0,
    niveau: 1,
    familia: "",
    arme: "",
    ami: "",
    etat: "",
    aide: "",
};

/* afin de voir les statistique du personnage
function afficherInfo() {
    let statistique = "<p> Nom : " + personnage.nom + ", Niveau : " + personnage.niveau + ", Points de vie : " + personnage.pointsVie + ", Force : " + personnage.force + ", Points de résistance : " + personnage.pointsResis + " </p>";
    
    boutonInfo.innerHTML = statistique;
}
*/

/* fonction pour personnaliser le personnage */
function creerPerso() {
    let name = nom.value;
    personnage.nom = name;
    
    menu[0].style.display = "none";
    //boutonInfo.style.display = "block";
    
    principale(name);
}

/* la fonction principale qui va appeler les autres */
function principale (prenom) {
    
    // les textes de dialogues à afficher et les images
    let phrase1 = "<p>- Bienvenue " + prenom + ", le monde de Caerdydd t'accueille à bras ouvert ! Nous sommes si heureux de te compter parmi nos potentiels héros, parmi ces personnes qui s'élèveront dans notre monde afin de nous apporter des nouveautés... Oops j'en oublie les bonnes manières, pardonne moi. Je me prénomme Kuyma, je suis la déesse suprême de Caerdydd, sa créatrice. Accompagne moi je te prie, je vais te guider. </p>";
    let interligne1 = "<p class=\"italique\">~~ Vous l'accompagnez et traversez des nuages jusqu'à arriver en vue d'une ville construite singulièrement ~~</p>";
    let image1 = "<img class=\"monImage\" src=\"images/fondAincrad.jpg\"/>";
    
    let phrase2 = " <p>- Voici Shuime, la capitale de ce monde, avec en son centre, la tour des Galera. Ne vous fiez pas à sa belle apparence, elle regroupe des donjons où naîssent toutes sortes de créatures que vous n'imagineriez pas. La Familia Tsuki en fait le recensement en allant explorer les étages des donjons en premier. Oh! J'oublie les essentiels encore, il faut que je te parle des Familia. Assis-toi, on a encore beaucoup à discuter !</p>";
    let interligne2 = "<p class=\"italique\">~~ Vous vous asseyez sur des nuages ayant pris la forme de fauteuils ~~</p>";
    let phrase3 = "<p> - Une Familia est un sorte de clan, une famille dans laquelle chacun évolue sous l'oeil protecteur d'un dieu ou d'une déesse. Par exemple, la Familia Tsuki est dirigée par la déesse Tsuki, déesse du feu et des vents. Tu peux formuler une demande afin de rentrer dans une de ces Familia mais tu peux aussi être mandaté par un ou une déesse. </p> <br /> <p> - Bien ! Maintenant, tu vas pouvoir choisir tes capacités. Tu as le choix entre les compétences à l'épée, les compétences au bâton magique ou alors les compétences à l'épée magique. Chacune de ses compétences auront à un moment donnée, une compétence unique. A toi de trouver... Oh, c'est l'heure ! Au revoir, " + prenom + " ! </p>";
    
    // on passe à la suite de l'histoire
    let didas = "<p class=\"italique\">~~ Vous vous sentez tomber à travers les nuages vers la ville et lorsque vous voyez arriver le toit d'un batiment, vous fermez les yeux, attendant l'impact. Cependant rien ne se passe. Vous étiez arrivé dans le dit bâtiment et une jeune femme vous accoste ~~</p>";
    let image2 = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    let discours = "<p>- Oh bonjour ! Tu viens d'arriver c'est ça ? Cela se voit. Viens je vais t'expliquer un peu. Ici nous sommes à la Guilde, nous donnons des missions au jeune aventurier comme toi afin de les faire progresser et pour qu'il puisse accéder au plus loin niveau qu'il leur est possible. Oh je te vois venir. Tu ne peux pas partir en mission '' seul '', tu as besoin d'intégrer une Familia. Et même ainsi, mieux vaux être accompagnés dans les quêtes passé un certain niveau. Elles offrent des bonus spécifique, par exemple la Familia Hestia t'offre 20 points de vie supplémentaire. A toi de choisir ! </p>";
    let details = "<p class=\"italique\"> ~~ La Familia Hestia offre 20 points de vie supplémentaire, la Familia Hecate offre 20 points de résistance et enfin la Familia Ares offre 20 points de forces supplémentaire ~~ </p>";
    
    let buttons = "<a id=\"btn1\" onclick=\"integrerFamilia(this);\">Familia Hestia</a> " 
                + "<a id=\"btn2\" onclick=\"integrerFamilia(this);\">Familia Hecate</a> " 
                + "<a id=\"btn3\" onclick=\"integrerFamilia(this);\">Familia Ares</a>";
    
    
    
    // pour afficher les écritures tout doucement et les unes après les autres 
    histoire.innerHTML = phrase1;
    setTimeout(function(){histoire.innerHTML += interligne1; divImage.innerHTML = image1}, 5*1000);
    setTimeout(function(){histoire.innerHTML += phrase2;}, 10*1000);
    setTimeout(function(){histoire.innerHTML += interligne2;}, 14*1000);
    setTimeout(function(){histoire.innerHTML += phrase3;}, 17*1000);
    setTimeout(function(){histoire.innerHTML = didas;}, 30*1000);
    setTimeout(function(){histoire.innerHTML += discours; divImage.innerHTML = image2;}, 34*1000);
    setTimeout(function(){lesChoix.innerHTML += details; lesChoix.style.display = "inline-block"; lesChoix.innerHTML += buttons}, 37*1000);
}

/* les fonctions d'intégration d'une familia */
function integrerFamilia(balise) {
   let bal = balise.textContent;
    
    console.log(bal);
    
    if (bal == "Familia Hestia") {
        personnage.familia = "Hestia";
        personnage.pointsVie += 20;
        personnage.ami = "Bichi";
        suite();
    }
    else if (bal == "Familia Hecate") {
        personnage.familia = "Hecate";
        personnage.pointsResis += 20;
        personnage.ami = "Aoki";
        suite();
    }
    else if (bal == "Familia Ares") {
        personnage.familia = "Ares";
        personnage.force += 20;
        personnage.ami = "Tsino";
        suite();
    }
    else {
        console.log("erreur de lecture");
    }
}

/* la suite */
function suite() {
    /* l'histoire encore */
    let deb1 = "<p>- Ooh tu as choisi cette familia ! D'accord très bien. Maintenant passons aux capacités. Tu peux choisir entre une épée normale, un bâton magique ou alors une épée magique. Ce ne sont que des armes de qualité basique cependant tu pourras en acheter ou les améliorer quand tu auras atteint le niveau 10. &#128521; </p>"
    
    let image3 = "<img class=\"mesImages\" src=\"images/epee.png\"/>"
                + "<img class=\"mesImages\" src=\"images/baton.png\"/>"
                + "<img class=\"mesImages\" src=\"images/epeeMagique.png\"/>";
    
    
    let bout = "<a id=\"btn1\" onclick=\"choixArme(this);\">Epee</a> " 
                + "<a id=\"btn2\" onclick=\"choixArme(this);\">Baton Magique</a> " 
                + "<a id=\"btn3\" onclick=\"choixArme(this);\">Epee Magique</a>";
    
    histoire.innerHTML = deb1;
    divImage.innerHTML = image3;
    lesChoix.innerHTML = bout;
}

/* fonction pour le choix de l'arme */
function choixArme (arme) {
    let weapon = arme.textContent;
    
    console.log(weapon);
    
    if (weapon == "Epee") {
        personnage.arme += "Epee";
        personnage.force += 10;
        premierCombat();
    }
    else if (weapon == "Baton Magique") {
        personnage.arme += "BatonMagique";
        personnage.force += 10;
        premierCombat();
    }
    else if (weapon == "Epee Magique") {
        personnage.arme += "EpeeMagique";
        personnage.force += 10;
        premierCombat();
    }
    else {
        console.log("erreur dans la lecture");
    }
}

/* suite de l'histoire */
function premierCombat() {
    let blanc2 = "";
    
    let first = "<p>- Très bien, alors à partir de maintenant tu seras accompagné par " + personnage.ami + ", qui va t'accompagner dans chacun de tes combats. Allons-y pour te montrer un peu les environs. </p>";
    let firstDid = "<p class=\"italique\">~~ Vous la suivez jusqu'à l'intérieur de la tour, au premier étage du donjon, où vous tombiez sur des Skrulls, des petits monstres. Vous les battez très vite grâce à l'aide de votre compagnon ~~</p> <p class=\"italique\">~~ Vous avez gagné un niveau, vous êtes maintenant niveau 2 ! Voyons voir un peu vos statistiques : ~~</p> ";
    let img2 = "<img class=\"monImage\" src=\"images/mob.png\"/>";
    
    // on augmente les statistiques
    personnage.niveau = 2;
    personnage.pointsVie += 10;
    personnage.pointsResis += 5;
    
    let stat = "<p> Votre nom : " + personnage.nom + ", le niveau : " + personnage.niveau + ", les points de vie : " + personnage.pointsVie + ", la force : " + personnage.force + ", les points de résistance : " + personnage.pointsResis + " </p>";
    
    let secondD = "<p>- Bien, maintenant tu dois prendre une quête afin de monter de niveau.. à celui actuel, tu ne peux que prendre pour le moment '' Arrivée dans la Familia '' qui est une quête simple. </p>";
    let seconDee = "<p class=\"italique\">~~ Vous acceptez la quête et vous vous retrouvez dans l'arrière du magasin de forgeron de la Familia Hephaistos. Vous devez attirer un maximum de personne dans la boutique. Cependant, un choix vous a été proprosé : porter la robe rouge (très mignonne avec ce petit serre-tête) afin de présenter une visage plus avenant au public et ainsi réduire le temps de travail, soit ne pas la porter et rallonger le temps de travail. Que choisissez-vous ? ~~</p>";
    
    let choixRo = "<a id=\"btn1\" onclick=\"choixRobe(this);\">La porter</a>" 
                + "<a id=\"btn2\" onclick=\"choixRobe(this);\">Ne pas la porter</a>";
    
    
    lesChoix.innerHTML = blanc2;
    histoire.innerHTML = first;
    setTimeout(function(){histoire.innerHTML += firstDid; divImage.innerHTML = img2;}, 2*1000);
    setTimeout(function(){histoire.innerHTML += stat;}, 3*1000);
    setTimeout(function(){histoire.innerHTML += secondD; histoire.innerHTML += seconDee;}, 4*1000);
    setTimeout(function(){lesChoix.innerHTML = choixRo;}, 5*1000);
}

/* pour savoir quel choix a été fait */
function choixRobe (reponse) {
    let rep = reponse.textContent;
    
    if (rep == "La porter") {
        sweet();
    }
    else if (rep == "Ne pas la porter") {
        personnage.etat = "fatigue";
        sweet();
    }
    else {
        console.log("erreur dans la lecture");
    }
}

/* fonction qui prend la relève */
function sweet () {
    let blanc3 = "";
    let image5 = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    let inter1 = "<p class=\"italique\">~~ Vous finissez le travail et retournez à la guilde afin d'avoir la récompense ~~</p>"
                + "<p> - Oh vous êtes là ! Venez on va valider votre quête. </p>" 
                + "<p class=\"italique\">~~ Vous avez gagné un niveau ainsi qu'un peu de force ~~</p>";
    personnage.niveau = 3;
    personnage.force += 5;
    
    let mad = "<p> - Bien, maintenant vous avez le choix, soit vous continuez les quêtes afin de monter en niveau et de vous entraîner, soit vous pouvez aller vous reposer chez vous. </p>";
    
    let statB = "<a id=\"btn1\" onclick=\"choixChemin(this);\">Prendre une nouvelle quête</a>" 
                + "<a id=\"btn2\" onclick=\"choixChemin(this);\">Rentrer chez soi</a>";
    
    lesChoix.innerHTML = blanc3;
    divImage.innerHTML = image5;
    histoire.innerHTML = inter1;
    setTimeout(function(){histoire.innerHTML += mad;}, 3*1000);
    setTimeout(function(){lesChoix.innerHTML += statB;}, 4*1000);
}

/* pour savoir quel choix a été fait */
function choixChemin(chem) {
    let che = chem.textContent;
    
    if (che == "Prendre une nouvelle quête") {
        newQuete();
    }
    else if (che == "Rentrer chez soi") {
        goHome();
    }
    else {
        console.log("erreur dans la lecture");
    }
}


/******
*  Ci dessous, toutes les fonctions concernant la partie '' prendre une nouvelle quête '' 
*  Donc toute la partie droite du schema du scenario donné 
*****/

/* suite de l'histoire si on a choisi de prendre une nouvelle quête */
function newQuete() {
    let blancB = "";
    let newQ = "<p> - Hop, j'ai une quête pour vous. Elle s'intitule '' La contre-attaque des Vaches '', vous devrez aller dans le donjon pour la réaliser. Cependant vous pouvez choisir de ne pas la réaliser tout de suite et aller vous promener en dehors de la ville. Faites toutefois attention aux petits monstres qui peuvent venir vous attaquer. </p>";
    
    let newB = "<a id=\"btn1\" onclick=\"choixCheminBis(this);\">Aller dans le donjon</a> " 
                + "<a id=\"btn2\" onclick=\"choixCheminBis(this);\">Aller à l'extérieur de la ville</a>";
    
    let image6 = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    
    lesChoix.innerHTML = blancB;
    divImage.innerHTML = image6;
    histoire.innerHTML = newQ;
    setTimeout(function(){lesChoix.innerHTML = newB;}, 3*1000);
}

/* pour savoir quel choix a été fait */
function choixCheminBis(chemBis) {
    let cheBis = chemBis.textContent;
    
    if (cheBis == "Aller dans le donjon") {
        personnage.niveau = 4;
        personnage.pointsResis += 5;
        personnage.xp += 30;
        saveLili();
    } else if (cheBis == "Aller à l'extérieur de la ville") {
        alert("Attention, cette partie n'ayant pas encore été faite, vous ne pouviez pas la réaliser. J'en suis navrée.");
    } else {
        console.log("erreur dans la lecture");
    }
}

/* suite de l'histoire */
function saveLili() {
    let blancD = "";
    
    let don = "<p class=\"italique\">~~ Vous marchez à la recherche de l'objet qu'il vous faut : une baie des Lailay. Très utilisée dans la cuisine mais aussi dans les bains, afin de détendre les muscles ~~</p>"
        + "<p>- Au secouuuuuurs ! </p> "
        + "<p class=\"italique\">~~ Ce cri venait d'un coin devant vous. Vous y courez et voyez une jeune fille sans défense contre des petits monstres en forme d'araignée ~~</p>";
    
    let questD = "<a id=\"btn1\" onclick=\"choixDonjon(this);\">La sauver</a> "
                + "<a id=\"btn2\" onclick=\"choixDonjon(this);\">Ne pas la sauver</a>";
    
    divImage.innerHTML = blancD;
    histoire.innerHTML = don;
    
    lesChoix.innerHTML = questD;
    
}

/* pour savoir quel choix a été fait */
function choixDonjon(choo) {
    let choD = choo.textContent;
    
    if (choD == "La sauver") {
        suiteDonjon();
    }
    else if (choD == "Ne pas la sauver") {
        alert("Attention, cette partie n'ayant pas encore été faite, vous ne pouviez pas la réaliser. J'en suis navrée.");
    }
    else {
        console.log("erreur dans la lecture");
    }
}

/* pour continuer l'histoire */
function suiteDonjon() {
    let blanc = "";
    let phraseIta = "<p class=\"italique\"> ~~ Vous courrez pour la sauver d'une mort certaine. Après avoir bravé le danger des petits monstres, du fait de leur nombre, vous demandez à la jeune fille si elle va bien ~~ </p>";
    
    let phrase2 = "<p>- Bien merci beaucoup de votre aide. Je ne sais pas comment j'aurai pu m'en sortir... Ils-Ils m'ont bloqués alors que je cherchais un ami.. </p>";
    
    let phraseIte = "<p class=\"italique\">~~ S'en suivit une discussion avec Lili, la jeune fille que vous avez sauvé. Elle se propose de vous aider à trouver votre objet, ce que vous acceptez afin de garder un oeil sur elle et pour pouvoir l'amener plus tard à la guilde. ~~</p>";
    
    let temps = "<p class=\"italique\">~~ Le temps passe, vous apprenez à connaître Lili, qui vous montre où trouver l'objet recherché. Suite à cela, vous sortez du donjon avec Lili vous accompagnant afin de vous rendre à la guilde, pour récupérer votre récompense ainsi que de poser des questions à une conseillère ~~</p> <p class=\"italique\">~~ Oh vous avez gagné un niveau ! ~~</p>";
    
    let stat = "<p> Votre nom : " + personnage.nom + ", le niveau : " + personnage.niveau + ", les points de vie : " + personnage.pointsVie + ", la force : " + personnage.force + ", les points de résistance : " + personnage.pointsResis + " </p>";
    
    let temps3 = "<p class=\"italique\">~~ Vous vous avancez jusqu'à un guichet où une conseillère est présente. Ainsi vous lui posez des questions sur la Familia de Lili ~~</p>";
    
    let rep = "<p>- Hum.. La Familia Komu est un sujet un peu sensible.. le dieu est passioné par le vin, il ne jure que par lui : c'est le dieu du vin après tout. Cependant il ne traite pas sa Familia comme tout les autres dieux et déesses.. Il propose à ses enfants de ramener le plus de sous afin de goûter à son vin. Ce n'est pas, pour une partie de ces enfants du moins, par choix qu'ils ont intégrés sa Familia.. Il est le seul dieu à accepter des personnes venant de l'extérieur de Shuime. Les autres dieux ne sont concentrés que sur la capitale. </p>";
    
    let rep2 = "<p>- Ooh je vois votre air sur votre visage.. Il est possible de changer de Familia oui, cependant il faut que les deux dieux en questions acceptent et que bien sûr la personne concernée par ce changement soit consentante. Mais nous pouvons en faire la demande si vous le souhaitez, Mademoiselle. Toutefois, revenez me voir demain avec votre réponse, après y avoir mûrement réfléchis. </p>";
    
    let soir = "<p class=\"italique\">~~ Vous vous retournez et sortez de la Guilde, avec Lili à vos côtés, afin d'aller en discuter au calme ~~</p>";
    
    let demain = "<p class=\"italique\">~~ Vous revenez à la Guilde le lendemain matin, Lili vous attendant déjà à l'intérieur. Vous vous dirigez vers la conseillère de la veille, qui vous reconnaît ~~</p>";
    
    let demain2 = "<p>- Ah c'est vous ! Bonjour, j'espère que vous y avez bien réfléchis. Ces changements sont assez rare. Toutefois vous avez l'air de vous être mis d'accord sur une possibilité. Puis-je l'entendre ? </p>";
    let demainBout = "<a id=\"btn1\" onclick=\"choixAmi(this);\">L'integrer dans la Familia</a> "
                    + "<a id=\"btn2\" onclick=\"choixAmi(this);\">Ne pas l'integrer dans la Familia</a>";
    
    lesChoix.innerHTML = blanc;
    divImage.innerHTML = blanc;
    histoire.innerHTML = phraseIta;
    setTimeout(function(){histoire.innerHTML = phrase2;}, 3*1000);
    setTimeout(function(){histoire.innerHTML += phraseIte;}, 5*1000);
    setTimeout(function(){histoire.innerHTML = temps;}, 7*1000);
    setTimeout(function(){histoire.innerHTML = temps; histoire.innerHTML += stat;}, 9*1000);
    setTimeout(function(){histoire.innerHTML += temps3;}, 13*1000);
    setTimeout(function(){histoire.innerHTML += rep;}, 15*1000);
    setTimeout(function(){histoire.innerHTML += rep2; histoire.innerHTML = soir;}, 17*1000);
    setTimeout(function(){histoire.innerHTML = demain;}, 23*1000);
    setTimeout(function(){histoire.innerHTML += demain2; lesChoix.innerHTML = demainBout;}, 24*1000);
}

/* fonction qui regarde le choix realisé */
function choixAmi(amitie) {
    let ami = amitie.textContent;
    
    if (ami == "L'integrer dans la Familia") {
        personnage.aide = "Lili";
        suiteFamilia();
    }
    else if (ami == "Ne pas l'integrer dans la Familia") {
        suiteFamilia()
    }
    else {
        console.log("erreur dans la lecture");
    }
}

/* continuation de l'histoire */
function suiteFamilia() {
    let blanc = "";
    
    let debut = "<p>- Très bien, il en sera fait selon ce que vous aviez voulu. Maintenant plusieurs choix s'offrent à vous. Soit vous pouvez vous balader en ville au gré de vos envies, et vous reviendrez ici quand vous voudrez, soit vous pouvez aller faire une quête. Dans ce cas-ci, vous pouvez soit y aller accompagner par votre nouvelle ami qui va jouer le rôle de supporter, soit y aller sans elle. Cependant, les récompenses seront les mêmes pour chacun. </p>";
    
    let buttons = "<a id=\"btn1\" onclick=\"choixFam(this);\">Aller se balader</a> " 
                + "<a id=\"btn2\" onclick=\"choixFam(this);\">Faire la quête avec elle</a> " 
                + "<a id=\"btn3\" onclick=\"choixFam(this);\">Faire la quête sans elle</a>";
    
    divImage.innerHTML = blanc;
    lesChoix.innerHTML = blanc;
    histoire.innerHTML = debut;
    setTimeout(function(){lesChoix.innerHTML = buttons;}, 2*1000);
}

/* fonction qui regarde le choix realisé */
function choixFam(reponse) {
    let rep = reponse.textContent;
    
    if (rep == "Aller se balader") {
        perdreVille();
    } else if (rep == "Faire la quête avec elle") {
        queteAvecElle();
        personnage.niveau = 5;
    } else if (rep == "Faire la quête sans elle") {
        perdreAmi();
    } else {
        console.log("erreur dans la lecture");
    }
}

/* la fonction appelé quand on perd après s'etre baladé en ville */
function perdreVille() {
    let blanc = "";
    
    let phraseFin = "<h2> Aie aie aie, vous avez perdu ! </h2> "
                    + "<p> Explication : voulant visiter de fond en comble la capitale Shuime, vous avez décidé de prendre une semaine de ''vacances'', une semaine où vous ne prendrez aucune quête. Et chouette la Monstrole, un grand évènement rassemblant les meilleurs combattant de la Familia Ganiya lors de combat contre des grands monstres, était en ville à ce moment là. Vous y avez été fait un tour, admirant les plus grand et rêvant d'avoir la même renommée. </p> "
                    + "<p> Toutefois, il y a eu un incident : un grand monstre s'est échappé de sa cage. Les gardes ont été dépassés par sa vitesse, vous vous êtes retrouvés devant ce grand monstre. Et malgré l'aide de Lili, vous avez vous aussi été fortement dépassé. Il vous a terrassé. </p>";
    
    let bouton = "<a id=\"btn1\" onclick=\"refresh(this);\">Recommencer</a> ";
    
    divImage.innerHTML = blanc;
    lesChoix.innerHTML = bouton;
    histoire.innerHTML = phraseFin;
}

/* fonction quand on prend la quete sans elle */
function perdreAmi() {
    let blanc = "";
    
    let phraseFin = "<h2> Aie aie aie, vous avez perdu ! </h2> "
                    + "<p> Explication : vous n'avez pas accepté l'aide que Lili vous offrait. Pourtant la conseillère vous avez dit qu'il valait mieux faire des quêtes en étant accompagné, surtout quand on commence à avoir votre niveau. </p>";
    
    let bouton = "<a id=\"btn1\" onclick=\"refresh(this);\">Recommencer</a> ";
    
    divImage.innerHTML = blanc;
    lesChoix.innerHTML = bouton;
    histoire.innerHTML = phraseFin;
}

/* fonction quand on prend la quete avec elle */
function queteAvecElle() {
    let blanc = "";
    
    let image = "<img class=\"monImage\" src=\"images/mob2.png\"/>";
    
    let inter = "<p class=\"italique\">~~ Vous avez pris la quête du Monstre du Lac. Des villageois autour du lac de Serarph ont fait remonté à la Guilde qu'il y aurait un Monstre du lac qui ferait fuir ou mangerait tous les poissons du lac. Votre mission est d'aller voir ce qu'il en est ~~</p>";
    
    let mater = "<p class=\"italique\">~~ Cependant avant d'aller voir le lac, vous vous accordez l'après-midi de détente et d'entraînement avec des petits monstres au niveau le plus faible du donjon. Vous croisez sur la route une personne que vous n'avez plus vu depuis votre première quête : le forgeron Welf. ~~</p>";
    
    let bouton = "<a id=\"btn1\" onclick=\"choixPapoter(this);\">Aller lui parler</a> " 
                + "<a id=\"btn2\" onclick=\"choixPapoter(this);\">Ne pas lui parler</a>";
    
    
    divImage.innerHTML = blanc;
    histoire.innerHTML = inter;
    setTimeout(function(){histoire.innerHTML += mater;}, 3*1000);
    setTimeout(function(){divImage.innerHTML = image;}, 3*1000);
}

/* depend du choix réalisé avant */
function choixPapoter(papoter) {
    let papo = papoter.textContent;
    
    if (papo == "Aller lui parler") {
        personnage.aide = "Welf, Lili";
        let poto = "parler";
        avantFinQuete(poto);
    }
    else if (papo == "Ne pas lui parler") {
        let poto = "pas parler";
        avantFinQuete(poto);
    }
    else {
        console.log("erreur dans la lecture");
    }
}

/* la suite de l'histoire */
function avantFinQuete (motus) {
    let blanc = "";
    
    let intro = "<p>- Oh mais c'est toi " + personnage.nom + " ! Comment vas tu ? Et qui est la charmante jeune fille avec toi ? </p>";
    
    let intra = "<p class=\"italique\">~~ Vous discutez pendant un moment avec Welf ~~</p>";
    
    let phrase = "<p>- Ah mais " + personnage.nom + ", pourquoi ne viendrais-tu pas à la forge pour que tu vois si tu ne trouves pas quelque chose de meilleur que ce que tu as pour le moment ? Tu n'es pas obligé d'accepter maintenant, tu peux venir un autre jours. </p>";
    
    let inmer = "<p class=\"italique\">~~ Vous hésitez mais devez tout de même lui donner une réponse ~~</p>";
    
    let boutno = "<a id=\"btn1\" onclick=\"choixEntrainement(this);\">Aller chez le forgeron</a> " 
                + "<a id=\"btn2\" onclick=\"choixEntrainement(this);\">S'entraîner</a>";
    
    /**********************************************************************************************************************************************************************************/
    
    let phrase2 = "<p class=\"italique\">~~ Vous allez vous entrainer au niveau faible du donjon, afin de vous améliorer doucement. Lili vous accompagne toujours ~~</p>";
    
    
    if (motus == "parler") {
        lesChoix.innerHTML = blanc;
        divImage.innerHTML = blanc;
        histoire.innerHTML = intro;
        setTimeout(function(){histoire.innerHTML += intra;}, 6*1000);
        setTimeout(function(){histoire.innerHTML += phrase; histoire.innerHTML += inmer;}, 8*1000);
        setTimeout(function(){lesChoix.innerHTML = boutno;}, 9*1000);
        
    } else if (motus == "pas parler") {
        lesChoix.innerHTML = blanc;
        divImage.innerHTML = blanc;
        histoire.innerHTML = phrase2;
        personnage.niveau = 6;
        personnage.pointsResis += 2;
        personnage.pointsVie += 2;
        avantFinPartie();
        
    } else {
          console.log("il y a une erreur");   
    }
}

/* fonction après l'entrainement quand on parle pas a Welf */
function avantFinPartie() {
    let blanc = "";
    
    let introduction = "<p class=\"italique\">~~ Un jour après.. ~~</p>";
    
    let salon = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    
    let inta = "<p class=\"italique\">~~ Vous arrivez juste à l'instant à la Guilde, afin de récupérer les récompenses de votre précédente quête et de voir la prochaine. Lili est avec vous ~~</p>";
    
    let stat = "<p> Votre nom : " + personnage.nom + ", le niveau : " + personnage.niveau + ", les points de vie : " + personnage.pointsVie + ", la force : " + personnage.force + ", les points de résistance : " + personnage.pointsResis + " </p>";
    
    let phrase = "<p>- Alors, vous avez un peu gagné pour cette quête bravo ! </p>"
                + stat + "<p>- Très bien, voici la nouvelle quête disponible maintenant. Huum... il y a la quête du monstre du lac... hum oui tenez ! </p>";
    
    let inter = "<p class=\"italique\">~~ Vous avez pris la quête du Monstre du Lac. Des villageois autour du lac de Serarph ont fait remonté à la Guilde qu'il y aurait un Monstre du lac qui ferait fuir ou mangerait tous les poissons du lac. Votre mission est d'aller voir ce qu'il en est ~~</p>";
    
    let inter2 = "<p class=\"italique\">~~ Le lac de Serarph se trouve juste à côté d'un petit village possédant un temple. Ce dernier servait de culte pour la déesse Sidnu, déesse de la pêche. Pour arriver au lac où le Monstre du lac aurait été aperçu, il vous faut passer par le devant de ce temple, qui sert maintenant de donjon pour former les enfants de la Familia Sidnu. ~~</p>";
    
    let image = "<img class=\"monImage\" src=\"images/mob2.png\"/>";
    
    let rencontre = "<p class=\"italique\">~~ Vous arrivez près du lac et vous pouvez voir le corps du Monstre du Lac sortir sur la terre ferme, pour vous accueillir. Plusieurs choix s'offrent à vous ~~</p>";
    
    let chooose = "<a id=\"btn1\" onclick=\"choixCombaBoss();\">Combattre le boss</a> " 
                + "<a id=\"btn2\" onclick=\"choixParlerBoss();\">Parler avec le boss</a>";
    
    lesChoix.innerHTML = blanc;
    divImage.innerHTML = salon;
    histoire.innerHTML = introduction;
    setTimeout(function(){histoire.innerHTML += inta;}, 3*1000);
    setTimeout(function(){histoire.innerHTML += phrase; histoire.innerHTML += inter;}, 9*1000);
    setTimeout(function(){histoire.innerHTML = inter2;}, 14*1000);
    setTimeout(function(){histoire.innerHTML += rencontre; divImage.innerHTML = image; lesChoix.innerHTML = chooose;}, 18*1000);
}

/* choix gagnant de combattre le boss */
function choixCombaBoss() {
    let histo = "<h2> Bravo vous avez gagné ! </h2> "
                    + "<p> Explication : vous avez terrassé le Monstre du Lac et sauvé le village d'à côté car juste avant vous vous étiez entrainé. Vous aviez ainsi gagné assez pour pouvoir le battre. </p> ";
    
    let again = "<a id=\"btn1\" onclick=\"refresh(this);\">Recommencer</a>";
    
    lesChoix.innerHTML = again;
    histoire.innerHTML = histo;
}

/* choix de parler au boss */
function choixParlerBoss() {
    let histo = "<h2> Aie aie aie, vous avez perdu ! </h2> "
                + "<p> Explication : pour pouvoir gagner contre un boss en lui parlant, il aurait fallu que vous parliez avec d'autres personnes que les personnes de la Guilde. </p>";
    
    let again = "<a id=\"btn1\" onclick=\"refresh(this);\">Recommencer</a>";
    
    lesChoix.innerHTML = again;
    histoire.innerHTML = histo;
}


/* choix quand on parle avec Welf*/
function choixEntrainement(entrai) {
    let entr = entrai.textContent;
     
    if (entr == "S'entraîner") {
        personnage.niveau = 7;
        apresEntrainement();
    } else if (entr == "Aller chez le forgeron") {
        personnage.niveau = 7;
        personnage.pointsResis += 10;
        personnage.pointsVie += 10;
        personnage.force += 10;
        apresEntrainement();
    } else {
        console.log("erreur dans la lecture");
    }
}

/* fonction prise de quête */
function apresEntrainement() {
    let blanc = "";

    let salon = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    
    let introduction = "<p class=\"italique\">~~ Vous arrivez juste à l'instant à la Guilde, afin de récupérer les récompenses de votre précédente quête et de voir la prochaine. Lili est avec vous ~~</p>";
    
    let stat = "<p> Votre nom : " + personnage.nom + ", le niveau : " + personnage.niveau + ", les points de vie : " + personnage.pointsVie + ", la force : " + personnage.force + ", les points de résistance : " + personnage.pointsResis + " </p>";
    
    let phrase = "<p>- Alors, vous avez un peu gagné pour cette quête bravo ! </p>"
                + stat + "<p>- Très bien, voici la nouvelle quête disponible maintenant. Huum... il y a la quête du monstre du lac... hum oui tenez ! </p>";
    
    let inter = "<p class=\"italique\">~~ Vous avez pris la quête du Monstre du Lac. Des villageois autour du lac de Serarph ont fait remonté à la Guilde qu'il y aurait un Monstre du lac qui ferait fuir ou mangerait tous les poissons du lac. Votre mission est d'aller voir ce qu'il en est ~~</p>";
    
    let inter2 = "<p class=\"italique\">~~ Le lac de Serarph se trouve juste à côté d'un petit village possédant un temple. Ce dernier servait de culte pour la déesse Sidnu, déesse de la pêche. Pour arriver au lac où le Monstre du lac aurait été aperçu, il vous faut passer par le devant de ce temple, qui sert maintenant de donjon pour former les enfants de la Familia Sidnu. ~~</p>";

    let inter3 = "<p class=\"italique\">~~ En arrivant près de ce temple, vous entendez des cris et des appels aux secours. Vous décidez de vous approchez et voyez un groupe au sol, dnas la zone d'un combat de boss d'étage. Ce sont eux qui crient à l'aide ~~</p>";
    
    let appel = "<p>- S'IL VOUS PLAIT ! VENEZ NOUS AIDER ! JE VOUS EN SUPPLIE, IL EST BEAUCOUP TROP FORT POUR NOUS </p>";
    
    let boutonsCh = "<a id=\"btn1\" onclick=\"perdreNonSecours();\">Retourner à la guilde</a> " 
                    + "<a id=\"btn2\" onclick=\"combattreBoss();\">Secourir les autres joueurs</a>"
                    + "<a id=\"btn3\" onclick=\"retourGuilde();\">Continuer la quête</a>";

    lesChoix.innerHTML = blanc;
    divImage.innerHTML = salon;
    histoire.innerHTML = introduction;
    setTimeout(function(){histoire.innerHTML += phrase;}, 3*1000);
    setTimeout(function(){histoire.innerHTML = inter;}, 6*1000);
    setTimeout(function(){histoire.innerHTML += inter2;}, 14*1000);
    setTimeout(function(){histoire.innerHTML += inter3; histoire.innerHTML += appel;}, 17*1000);
    setTimeout(function(){lesChoix.innerHTML = boutonsCh;}, 19*1000);
}

/* perdre par non secours */
function perdreNonSecours () {
    let blanc = "";
    
    let phraseFin = "<h2> Aie aie aie, vous avez perdu ! </h2> "
                    + "<p> Explication : d'autres joueurs vous demandaient de l'aide cependant vous avez préférés les laisser à leur sort pour repartir à la Guilde afin d'appeler à l'aide. Un beau geste.  </p> "
                    + "<p> Toutefois, une fois un boss engagé dans un combat, si les joueurs dans la zone de combat ne sont pas mort, le boss continue à combattre et ils ne peuvent plus en sortir. Vous les avez condamnés à mourir au lieu d'aller les aider. </p>";
    
    let bouton = "<a id=\"btn1\" onclick=\"refresh(this);\">Recommencer</a>";
    
    divImage.innerHTML = blanc;
    lesChoix.innerHTML = bouton;
    histoire.innerHTML = phraseFin;
}

/* fonction du combat du boss qui détermine si l'on a gagné ou pas */
function combattreBoss() {
    let blanc ="";
    
    let image = "<img class=\"monImage\" src=\"images/voleurMort.jpg\"/>";
    
    let again = "<a id=\"btn1\" onclick=\"refresh(this);\">Recommencer</a>";
    
    let histo = "<p class=\"italique\">~~ En acceptant de les aider, vous avez automatiquement récupéré la quête ''La vengeance du Voleur''. Celle-ci consiste à arrêter et tuer le boss Le Voleur de Mort qui se trouve dans ce temple ~~</p>";
    
    let delu = "<p class=\"italique\">~~ Après une durée indeterminée à combattre le boss avec l'aide de Welf et de Lili ~~</p>";
    
    let gagner = "<h2> Bravo vous avez gagné ! </h2> "
                    + "<p> Explication : vous avez terrassé le Voleur de Mort et sauvé les joueurs grâce à l'aide de Lili et de Welf, que vous n'avez pas refusé. </p> ";
    
    
    lesChoix.innerHTML = blanc;
    divImage.innerHTML = image;
    histoire.innerHTML = histo;
    setTimeout(function(){histoire.innerHTML = delu;}, 3*1000);
    setTimeout(function(){histoire.innerHTML = gagner; lesChoix.innerHTML = again;}, 7*1000);
}

/* la fonction appelé quand on perd contre un mini boss */
function perdreMiniBoss() {
    let blanc = "";
    
    let phraseFin = "<h2> Aie aie aie, vous avez perdu ! </h2> "
                    + "<p> Explication : vous avez vu une quête forte intéressante et voulant continuer à vous améliorer, en cherchant des défis n'importe où, vous avez accepté de prendre cette fameuse quête : la Quête du Dragon de Glace. Il fallait juste arriver à attraper des cristaux que ce dragon de glace formait. </p> "
                    + "<p> Toutefois, une fois sur place, vous vous êtes aperçu de la taille et des dégâts de X'rphan The White Wyrn quand il était trop tard pour reculer. Il vous a terrassé. </p>";
    
    let image = "<img class=\"monImage\" src=\"images/orphan.png\"/>" ;
    
    let bouton = "<a id=\"btn1\" onclick=\"refresh(this);\">Recommencer</a>";
    
    divImage.innerHTML = image;
    lesChoix.innerHTML = bouton;
    histoire.innerHTML = phraseFin;
}

/* fonction quand on choisit de continuer la quête */
function retourGuilde() {
    let blanc = "";
    
    let salon = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    
    let intro = "<p class=\"italique\">~~ Vous continuez la quête sans vous souciez des cris des autres joueurs bloqués avec le boss. C'était de leur faute d'aller titiller le boss alors qu'ils n'avaient pas le niveau en soit ~~</p>"
                + "<p class=\"italique\">~~ Après l'avoir terminé, vous retournez à la guilde ~~</p>";
    
    let intra = "<p class=\"italique\">~~ Vous arrivez juste à l'instant à la Guilde, afin de récupérer les récompenses de votre précédente quête et de voir la prochaine. Lili est avec vous ~~</p>";
    
    let phraseFin = "<h2> Aie aie aie, vous avez perdu ! </h2> "
                    + "<p> Explication : d'autres joueurs vous demandaient de l'aide cependant vous avez préférés les laisser à leur sort pour finir votre quête et après partir à la Guilde afin d'appeler à l'aide. </p> "
                    + "<p> Toutefois, une fois un boss engagé dans un combat, si les joueurs dans la zone de combat ne sont pas mort, le boss continue à combattre et ils ne peuvent plus en sortir. Vous les avez condamnés à mourir au lieu d'aller les aider. </p>";
    
    let bouton = "<a id=\"btn1\" onclick=\"refresh(this);\">Recommencer</a>";
    
    divImage.innerHTML = salon;
    lesChoix.innerHTML = blanc;
    histoire.innerHTML = intro;
    setTimeout(function(){histoire.innerHTML += intra;}, 4*1000);
    setTimeout(function(){histoire.innerHTML = phraseFin; lesChoix.innerHTML = bouton;}, 6*1000);
}

/******
*  Ci dessous, toutes les fonctions concernant la partie '' rentrer chez soi '' 
*  Donc toute la partie gauche du schema du scenario donné 
*****/

/* suite de l'histoire si on a choisi de rentrer chez soi */
function goHome() {
    
}

/* fonction qui refresh la page pour du coup recommencer la partie */
function refresh(ref) {
    let rf = ref.textContent;
    
    if (rf == "Recommencer") {
        location.reload();
    }
    else {
        console.log("erreur dans la lecture");
    }
}
