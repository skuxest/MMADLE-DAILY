const fighters = [

    /* FEMALE FIGHTERS */
    {
        name: "Amanda Nunes",
        birthYear: 1988,
        gender: "Female",
        country: ["Brazil"],
        fights: 27,
        wins: 23,
        debutYear: 2013, // UFC debut
        weightClass: ["Bantamweight", "Featherweight"],
        image: "../FIGHTER-IMAGES/AMANDA-NUNES.png",
        hints: {
            style: "Striking",
            lastAppearance: "UFC 289",
            nickname: "The Lioness"
        }
    },
    {
        name: "Valentina Shevchenko",
        birthYear: 1988,
        gender: "Female",
        country: ["Kyrgyzstan"],
        fights: 29,
        wins: 23,
        debutYear: 2015, // UFC debut
        weightClass: ["Flyweight", "Bantamweight"],
        image: "../FIGHTER-IMAGES/VALENTINA-SHEVCHENKO.png",
        hints: {
            style: "Muay Thai",
            lastAppearance: "UFC 295",
            nickname: "Bullet"
        }
    },
    {
        name: "Rose Namajunas",
        birthYear: 1992,
        gender: "Female",
        country: ["USA"],
        fights: 20,
        wins: 13,
        debutYear: 2014, // UFC debut
        weightClass: ["Strawweight", "Flyweight"],
        image: "../FIGHTER-IMAGES/ROSE-NAMAJUNAS.png",
        hints: {
            style: "BJJ",
            lastAppearance: "UFC 300",
            nickname: "Thug"
        }
    },
    {
        name: "Zhang Weili",
        birthYear: 1989,
        gender: "Female",
        country: ["China"],
        fights: 28,
        wins: 24,
        debutYear: 2018, // UFC debut
        weightClass: ["Strawweight"],
        image: "../FIGHTER-IMAGES/ZHANG-WEILI.png",
        hints: {
            style: "Striking",
            lastAppearance: "UFC 298",
            nickname: "Magnum"
        }
    },
    {
        name: "Julianna Pena",
        birthYear: 1989,
        gender: "Female",
        country: ["USA"],
        fights: 18,
        wins: 12,
        debutYear: 2013, // UFC debut
        weightClass: ["Bantamweight"],
        image: "../FIGHTER-IMAGES/JULIANNA-PENA.png",
        hints: {
            style: "BJJ",
            lastAppearance: "UFC 292",
            nickname: "The Venezuelan Vixen"
        }
    },
    {
        name: "Holly Holm",
        birthYear: 1982,
        gender: "Female",
        country: ["USA"],
        fights: 22,
        wins: 15,
        debutYear: 2015, // UFC debut
        weightClass: ["Bantamweight", "Featherweight"],
        image: "../FIGHTER-IMAGES/HOLLY-HOLM.png",
        hints: {
            style: "Striking",
            lastAppearance: "UFC 299",
            nickname: "The Preachers Daughter"
        }
    },    

/* HEAVYWEIGHTS */
{
    name: "Jon Jones",
    birthYear: 1987,
    gender: "Male",
    country: ["USA"],
    fights: 28,
    wins: 27,
    debutYear: 2008, // UFC debut
    weightClass: ["Light Heavyweight", "Heavyweight"],
    image: "../FIGHTER-IMAGES/JON-JONES.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 285",
        nickname: "Bones"
    }
},
{
    name: "Tom Aspinall",
    birthYear: 1993,
    gender: "Male",
    country: ["United Kingdom"],
    fights: 18,
    wins: 15,
    debutYear: 2020, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/TOM-ASPINALL.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 304",
        nickname: "No nickname"
    }
},
{
    name: "Ciryl Gane",
    birthYear: 1990,
    gender: "Male",
    country: ["France"],
    fights: 15,
    wins: 12,
    debutYear: 2019, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/CIRYL-GANE.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 285",
        nickname: "Bon Gamin"
    }
},
{
    name: "Sergei Pavlovich",
    birthYear: 1991,
    gender: "Male",
    country: ["Russia"],
    fights: 20,
    wins: 18,
    debutYear: 2018, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/SERGEI-PAVLOVICH.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 304",
        nickname: "No nickname"
    }
},
{
    name: "Curtis Blaydes",
    birthYear: 1990,
    gender: "Male",
    country: ["USA"],
    fights: 22,
    wins: 17,
    debutYear: 2016, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/CURTIS-BLAYDES.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 304",
        nickname: "Razor"
    }
},
{
    name: "Alexander Volkov",
    birthYear: 1988,
    gender: "Male",
    country: ["Russia"],
    fights: 49,
    wins: 38,
    debutYear: 2017, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/ALEXANDER-VOLKOV.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 303",
        nickname: "Drago"
    }
},
{
    name: "Stipe Miocic",
    birthYear: 1982,
    gender: "Male",
    country: ["USA"],
    fights: 24,
    wins: 20,
    debutYear: 2011, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/STIPE-MIOCIC.png",
    hints: {
        style: "Boxing/Wrestling",
        lastAppearance: "UFC 295",
        nickname: "Stone Cold"
    }
},
{
    name: "Francis Ngannou",
    birthYear: 1986,
    gender: "Male",
    country: ["Cameroon"],
    fights: 20,
    wins: 17,
    debutYear: 2015, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/FRANCIS-NGANNOU.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 270",
        nickname: "The Predator"
    }
},
{
    name: "Tai Tuivasa",
    birthYear: 1993,
    gender: "Male",
    country: ["Australia"],
    fights: 20,
    wins: 15,
    debutYear: 2017, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/TAI-TUIVASA.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 293",
        nickname: "Bam Bam"
    }
},
{
    name: "Derrick Lewis",
    birthYear: 1985,
    gender: "Male",
    country: ["USA"],
    fights: 40,
    wins: 27,
    debutYear: 2014, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/DERRICK-LEWIS.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 298",
        nickname: "The Black Beast"
    }
},
{
    name: "Jailton Almeida",
    birthYear: 1991,
    gender: "Male",
    country: ["Brazil"],
    fights: 21,
    wins: 19,
    debutYear: 2022, // UFC debut
    weightClass: ["Heavyweight"],
    image: "../FIGHTER-IMAGES/JAILTON-ALMEIDA.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 302",
        nickname: "Malhadinho"
    }
},      
    
/* LIGHT HEAVYWEIGHTS */
    /* LIGHT HEAVYWEIGHTS */
{
    name: "Alex Pereira",
    birthYear: 1987,
    gender: "Male",
    country: ["Brazil"],
    fights: 12,
    wins: 9,
    debutYear: 2021, // UFC debut
    weightClass: ["Light Heavyweight", "Middleweight"],
    image: "../FIGHTER-IMAGES/ALEX-PEREIRA.png",
    hints: {
        style: "Kickboxing",
        lastAppearance: "UFC 313",
        nickname: "Poatan"
    }
},
{
    name: "Magomed Ankalaev",
    birthYear: 1991,
    gender: "Male",
    country: ["Russia"],
    fights: 23,
    wins: 20,
    debutYear: 2018, // UFC debut
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/MAGOMED-ANKALAEV.png",
    hints: {
        style: "Sambo/Striking",
        lastAppearance: "UFC 313",
        nickname: "No nickname"
    }
},
{
    name: "Jiri Prochazka",
    birthYear: 1992,
    gender: "Male",
    country: ["Czech Republic"],
    fights: 34,
    wins: 30,
    debutYear: 2020, // UFC debut
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/JIRI-PROCHAZKA.png",
    hints: {
        style: "Striker",
        lastAppearance: "UFC 312",
        nickname: "BJP"
    }
},
{
    name: "Jamahal Hill",
    birthYear: 1990,
    gender: "Male",
    country: ["USA"],
    fights: 14,
    wins: 12,
    debutYear: 2020, // UFC debut
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/JAMAHAL-HILL.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 311",
        nickname: "Sweet Dreams"
    }
},
{
    name: "Jan Blachowicz",
    birthYear: 1982,
    gender: "Male",
    country: ["Poland"],
    fights: 40,
    wins: 29,
    debutYear: 2014, // UFC debut
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/JAN-BLACHOWICZ.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 310",
        nickname: "Prince of Cieszyn"
    }
},
{
    name: "Anthony Smith",
    birthYear: 1988,
    gender: "Male",
    country: ["USA"],
    fights: 58,
    wins: 37,
    debutYear: 2016, // UFC debut
    weightClass: ["Light Heavyweight", "Middleweight"],
    image: "../FIGHTER-IMAGES/ANTHONY-SMITH.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 309",
        nickname: "Lionheart"
    }
},
{
    name: "Glover Teixeira",
    birthYear: 1979,
    gender: "Male",
    country: ["Brazil"],
    fights: 41,
    wins: 33,
    debutYear: 2012, // UFC debut
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/GLOVER-TEIXEIRA.png",
    hints: {
        style: "BJJ/Boxing",
        lastAppearance: "UFC 283",
        nickname: "Xicao"
    }
},
{
    name: "Johnny Walker",
    birthYear: 1992,
    gender: "Male",
    country: ["Brazil"],
    fights: 28,
    wins: 21,
    debutYear: 2018, // UFC debut
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/JOHNNY-WALKER.png",
    hints: {
        style: "Muay Thai",
        lastAppearance: "UFC 300",
        nickname: "Big Johnny"
    }
},
{
    name: "Ryan Spann",
    birthYear: 1991,
    gender: "Male",
    country: ["USA"],
    fights: 30,
    wins: 21,
    debutYear: 2018, // UFC debut
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/RYAN-SPANN.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC 297",
        nickname: "Superman"
    }
},
{
    name: "Paul Craig",
    birthYear: 1987,
    gender: "Male",
    country: ["Scotland"],
    fights: 30,
    wins: 17,
    debutYear: 2016, // UFC debut
    weightClass: ["Light Heavyweight", "Middleweight"],
    image: "../FIGHTER-IMAGES/PAUL-CRAIG.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 295",
        nickname: "Bearjew"
    }
},
{
    name: "Aleksandar Rakic",
    birthYear: 1992,
    gender: "Male",
    country: ["Austria"],
    fights: 18,
    wins: 14,
    debutYear: 2017, // UFC debut
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/ALEKSANDAR-RAKIC.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 302",
        nickname: "Rocket"
    }
},

/* MIDDLEWEIGHTS */

/* MIDDLEWEIGHTS */
{
    name: "Dricus du Plessis",
    birthYear: 1994,
    gender: "Male",
    country: ["South Africa"],
    fights: 25,
    wins: 23,
    debutYear: 2020, // UFC debut
    weightClass: ["Middleweight"],
    image: "../FIGHTER-IMAGES/DRICUS-DU-DUPLESSIS.png",
    hints: {
        style: "Kickboxing",
        lastAppearance: "UFC 312",
        nickname: "Stillknocks"
    }
},
{
    name: "Khamzat Chimaev",
    birthYear: 1993,
    gender: "Male",
    country: ["Sweden", "UAE"],
    fights: 14,
    wins: 14,
    debutYear: 2020, // UFC debut
    weightClass: ["Middleweight", "Welterweight"],
    image: "../FIGHTER-IMAGES/KHAMZAT-CHIMAEV.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC 305",
        nickname: "Borz"
    }
},
{
    name: "Sean Strickland",
    birthYear: 1990,
    gender: "Male",
    country: ["USA"],
    fights: 36,
    wins: 29,
    debutYear: 2014, // UFC debut
    weightClass: ["Middleweight"],
    image: "../FIGHTER-IMAGES/SEAN-STRICKLAND.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 312",
        nickname: "Tarzan (DeSean)"
    }
},
{
    name: "Nassourdine Imavov",
    birthYear: 1995,
    gender: "Male",
    country: ["France"],
    fights: 17,
    wins: 13,
    debutYear: 2020, // UFC debut
    weightClass: ["Middleweight"],
    image: "../FIGHTER-IMAGES/NASSOURDINE-IMAVOV.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 310",
        nickname: "The Sniper"
    }
},
{
    name: "Israel Adesanya",
    birthYear: 1989,
    gender: "Male",
    country: ["Nigeria", "New Zealand"],
    fights: 29,
    wins: 24,
    debutYear: 2018, // UFC debut
    weightClass: ["Middleweight", "Light Heavyweight"],
    image: "../FIGHTER-IMAGES/ISRAEL-ADESANYA.png",
    hints: {
        style: "Kickboxing",
        lastAppearance: "UFC 305",
        nickname: "The Last Stylebender"
    }
},
{
    name: "Robert Whittaker",
    birthYear: 1990,
    gender: "Male",
    country: ["Australia"],
    fights: 34,
    wins: 26,
    debutYear: 2012, // UFC debut
    weightClass: ["Middleweight", "Welterweight"],
    image: "../FIGHTER-IMAGES/ROBERT-WHITTAKER.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 300",
        nickname: "The Reaper"
    }
},
{
    name: "Marvin Vettori",
    birthYear: 1993,
    gender: "Male",
    country: ["Italy"],
    fights: 28,
    wins: 19,
    debutYear: 2016, // UFC debut
    weightClass: ["Middleweight"],
    image: "../FIGHTER-IMAGES/MARVIN-VETTORI.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 298",
        nickname: "The Italian Dream"
    }
},
{
    name: "Jared Cannonier",
    birthYear: 1984,
    gender: "Male",
    country: ["USA"],
    fights: 26,
    wins: 18,
    debutYear: 2015, // UFC debut
    weightClass: ["Middleweight", "Light Heavyweight"],
    image: "../FIGHTER-IMAGES/JARED-CANNONIER.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 299",
        nickname: "The Killa Gorilla"
    }
},
{
    name: "Kelvin Gastelum",
    birthYear: 1991,
    gender: "Male",
    country: ["USA"],
    fights: 30,
    wins: 18,
    debutYear: 2013, // UFC debut
    weightClass: ["Middleweight", "Welterweight"],
    image: "../FIGHTER-IMAGES/KELVIN-GASTELUM.png",
    hints: {
        style: "Boxing/Wrestling",
        lastAppearance: "UFC 297",
        nickname: "Mini Cain"
    }
},
{
    name: "Darren Till",
    birthYear: 1992,
    gender: "Male",
    country: ["England"],
    fights: 24,
    wins: 18,
    debutYear: 2015, // UFC debut
    weightClass: ["Middleweight", "Welterweight"],
    image: "../FIGHTER-IMAGES/DARREN-TILL.png",
    hints: {
        style: "Muay Thai",
        lastAppearance: "UFC 282",
        nickname: "The Gorilla"
    }
},
{
    name: "Paulo Costa",
    birthYear: 1991,
    gender: "Male",
    country: ["Brazil"],
    fights: 17,
    wins: 14,
    debutYear: 2017, // UFC debut
    weightClass: ["Middleweight"],
    image: "../FIGHTER-IMAGES/PAULO-COSTA.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 302",
        nickname: "Borrachinha"
    }
},

/* WELTERWEIGHTS */
/* WELTERWEIGHTS */
{
    name: "Georges St-Pierre",
    birthYear: 1981,
    gender: "Male",
    country: ["Canada"],
    fights: 28,
    wins: 26,
    debutYear: 2004, // UFC debut
    weightClass: ["Welterweight", "Middleweight"],
    image: "../FIGHTER-IMAGES/GSP.png",
    hints: {
        style: "Karate",
        lastAppearance: "UFC 217",
        nickname: "Rush"
    }
},
{
    name: "Belal Muhammad",
    birthYear: 1988,
    gender: "Male",
    country: ["USA", "Palestine"],
    fights: 28,
    wins: 24,
    debutYear: 2016, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/BELAL-MUHAMMAD.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC 304",
        nickname: "Remember the Name"
    }
},
{
    name: "Kamaru Usman",
    birthYear: 1987,
    gender: "Male",
    country: ["Nigeria", "USA"],
    fights: 24,
    wins: 20,
    debutYear: 2015, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/KAMARU-USMAN.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 296",
        nickname: "The Nigerian Nightmare"
    }
},
{
    name: "Leon Edwards",
    birthYear: 1991,
    gender: "Male",
    country: ["Jamaica", "United Kingdom"],
    fights: 27,
    wins: 22,
    debutYear: 2014, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/LEON-EDWARDS.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC London 2025",
        nickname: "Rocky"
    }
},
{
    name: "Colby Covington",
    birthYear: 1987,
    gender: "Male",
    country: ["USA"],
    fights: 22,
    wins: 17,
    debutYear: 2014, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/COLBY-COVINGTON.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 296",
        nickname: "Chaos"
    }
},
{
    name: "Gilbert Burns",
    birthYear: 1986,
    gender: "Male",
    country: ["Brazil"],
    fights: 30,
    wins: 22,
    debutYear: 2014, // UFC debut
    weightClass: ["Welterweight", "Lightweight"],
    image: "../FIGHTER-IMAGES/GILBERT-BURNS.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 294",
        nickname: "Durinho"
    }
},
{
    name: "Jorge Masvidal",
    birthYear: 1984,
    gender: "Male",
    country: ["USA"],
    fights: 52,
    wins: 35,
    debutYear: 2013, // UFC debut
    weightClass: ["Welterweight", "Lightweight"],
    image: "../FIGHTER-IMAGES/JORGE-MASVIDAL.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 287",
        nickname: "Gamebred"
    }
},
{
    name: "Stephen Thompson",
    birthYear: 1982,
    gender: "Male",
    country: ["USA"],
    fights: 25,
    wins: 17,
    debutYear: 2012, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/STEPHEN-THOMPSON.png",
    hints: {
        style: "Karate",
        lastAppearance: "UFC 291",
        nickname: "Wonderboy"
    }
},
{
    name: "Shavkat Rakhmonov",
    birthYear: 1994,
    gender: "Male",
    country: ["Kazakhstan"],
    fights: 18,
    wins: 18,
    debutYear: 2020, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/SHAVKAT-RAKHMONOV.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 300",
        nickname: "Nomad"
    }
},
{
    name: "Jack Della Maddalena",
    birthYear: 1996,
    gender: "Male",
    country: ["Australia"],
    fights: 19,
    wins: 17,
    debutYear: 2022, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/JACK-DELLA-MADDALENA.png",
    hints: {
        style: "Boxing",
        lastAppearance: "UFC 299",
        nickname: "JDM"
    }
},
{
    name: "Michael Chiesa",
    birthYear: 1987,
    gender: "Male",
    country: ["USA"],
    fights: 24,
    wins: 16,
    debutYear: 2012, // UFC debut
    weightClass: ["Welterweight", "Lightweight"],
    image: "../FIGHTER-IMAGES/MICHAEL-CHIESA.png",
    hints: {
        style: "Grappling",
        lastAppearance: "UFC 291",
        nickname: "Maverick"
    }
},
{
    name: "Vicente Luque",
    birthYear: 1991,
    gender: "Male",
    country: ["Brazil"],
    fights: 30,
    wins: 22,
    debutYear: 2015, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/VICENTE-LUQUE.png",
    hints: {
        style: "Striking/BJJ",
        lastAppearance: "UFC 298",
        nickname: "The Silent Assassin"
    }
},
{
    name: "Ian Garry",
    birthYear: 1997,
    gender: "Male",
    country: ["Ireland"],
    fights: 14,
    wins: 14,
    debutYear: 2021, // UFC debut
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/IAN-GARRY.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 298",
        nickname: "The Future"
    }
},

/* LIGHTWEIGHTS */

/* LIGHTWEIGHTS */
{
    name: "Islam Makhachev",
    birthYear: 1992,
    gender: "Male",
    country: ["Russia"],
    fights: 26,
    wins: 25,
    debutYear: 2015, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/ISLAM-MAKHACHEV.png",
    hints: {
        style: "Wrestling/Sambo/Striking",
        lastAppearance: "UFC 297",
        nickname: "Eagle 2.0"
    }
},
{
    name: "Khabib Nurmagomedov",
    birthYear: 1988,
    gender: "Male",
    country: ["Russia"],
    fights: 29,
    wins: 29,
    debutYear: 2012, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/KHABIB-NURMAGOMEDOV.png",
    hints: {
        style: "Wrestling/Sambo",
        lastAppearance: "UFC 254",
        nickname: "The Eagle"
    }
},
{
    name: "Dustin Poirier",
    birthYear: 1988,
    gender: "Male",
    country: ["USA"],
    fights: 38,
    wins: 30,
    debutYear: 2011, // UFC debut
    weightClass: ["Lightweight", "Featherweight"],
    image: "../FIGHTER-IMAGES/DUSTIN-POIRIER.png",
    hints: {
        style: "Boxing",
        lastAppearance: "UFC 291",
        nickname: "The Diamond"
    }
},
{
    name: "Justin Gaethje",
    birthYear: 1988,
    gender: "Male",
    country: ["USA"],
    fights: 28,
    wins: 25,
    debutYear: 2017, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/JUSTIN-GAETHJE.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 291",
        nickname: "The Highlight"
    }
},
{
    name: "Charles Oliveira",
    birthYear: 1989,
    gender: "Male",
    country: ["Brazil"],
    fights: 46,
    wins: 35,
    debutYear: 2010, // UFC debut
    weightClass: ["Lightweight", "Featherweight"],
    image: "../FIGHTER-IMAGES/CHARLES-OLIVEIRA.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 280",
        nickname: "Do Bronx"
    }
},
{
    name: "Michael Chandler",
    birthYear: 1986,
    gender: "Male",
    country: ["USA"],
    fights: 31,
    wins: 24,
    debutYear: 2021, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/MICHAEL-CHANDLER.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 281",
        nickname: "Iron"
    }
},
{
    name: "Tony Ferguson",
    birthYear: 1983,
    gender: "Male",
    country: ["USA"],
    fights: 36,
    wins: 25,
    debutYear: 2011, // UFC debut
    weightClass: ["Lightweight", "Welterweight"],
    image: "../FIGHTER-IMAGES/TONY-FERGUSON.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 279",
        nickname: "El Cucuy"
    }
},
{
    name: "Arman Tsarukyan",
    birthYear: 1996,
    gender: "Male",
    country: ["Armenia"],
    fights: 24,
    wins: 21,
    debutYear: 2019, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/ARMAN-TSARUKYAN.png",
    hints: {
        style: "Wrestling/Striking",
        lastAppearance: "UFC 300",
        nickname: "Ahalkalakets"
    }
},
{
    name: "Rafael Fiziev",
    birthYear: 1993,
    gender: "Male",
    country: ["Kyrgyzstan"],
    fights: 15,
    wins: 12,
    debutYear: 2019, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/RAFAEL-FIZIEV.png",
    hints: {
        style: "Muay Thai",
        lastAppearance: "UFC 299",
        nickname: "Ataman"
    }
},
{
    name: "Mateusz Gamrot",
    birthYear: 1991,
    gender: "Male",
    country: ["Poland"],
    fights: 26,
    wins: 23,
    debutYear: 2020, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/MATEUSZ-GAMROT.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC 298",
        nickname: "Gamer"
    }
},
{
    name: "Beneil Dariush",
    birthYear: 1989,
    gender: "Male",
    country: ["Iran", "USA"],
    fights: 30,
    wins: 22,
    debutYear: 2014, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/BENEIL-DARIUSH.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 297",
        nickname: "Benny"
    }
},
{
    name: "Dan Hooker",
    birthYear: 1990,
    gender: "Male",
    country: ["New Zealand"],
    fights: 36,
    wins: 24,
    debutYear: 2014, // UFC debut
    weightClass: ["Lightweight"],
    image: "../FIGHTER-IMAGES/DAN-HOOKER.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 300",
        nickname: "The Hangman"
    }
},

/* FEATHERWEIGHTS */
/* FEATHERWEIGHTS */
{
    name: "Jose Aldo",
    birthYear: 1986,
    gender: "Male",
    country: ["Brazil"],
    fights: 45,
    wins: 32,
    debutYear: 2011, // UFC debut
    weightClass: ["Featherweight", "Bantamweight"],
    image: "../FIGHTER-IMAGES/JOSE-ALDO.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 278",
        nickname: "Junior"
    }
},
{
    name: "Max Holloway",
    birthYear: 1991,
    gender: "Male",
    country: ["USA"],
    fights: 34,
    wins: 26,
    debutYear: 2012, // UFC debut
    weightClass: ["Featherweight", "Lightweight"],
    image: "../FIGHTER-IMAGES/MAX-HOLLOWAY.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 297",
        nickname: "Blessed"
    }
},
{
    name: "Alexander Volkanovski",
    birthYear: 1988,
    gender: "Male",
    country: ["Australia"],
    fights: 30,
    wins: 26,
    debutYear: 2016, // UFC debut
    weightClass: ["Featherweight", "Lightweight"],
    image: "../FIGHTER-IMAGES/ALEXANDER-VOLKANOVSKI.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 314",
        nickname: "The Great"
    }
},
{
    name: "Conor McGregor",
    birthYear: 1988,
    gender: "Male",
    country: ["Ireland"],
    fights: 28,
    wins: 22,
    debutYear: 2013, // UFC debut
    weightClass: ["Featherweight", "Lightweight"],
    image: "../FIGHTER-IMAGES/CONOR-MCGREGOR.png",
    hints: {
        style: "Boxing",
        lastAppearance: "UFC 264",
        nickname: "The Notorious"
    }
},
{
    name: "Chad Mendes",
    birthYear: 1985,
    gender: "Male",
    country: ["USA"],
    fights: 23,
    wins: 18,
    debutYear: 2011, // UFC debut
    weightClass: ["Featherweight"],
    image: "../FIGHTER-IMAGES/CHAD-MENDES.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC 232",
        nickname: "Money"
    }
},
{
    name: "Frankie Edgar",
    birthYear: 1981,
    gender: "Male",
    country: ["USA"],
    fights: 35,
    wins: 24,
    debutYear: 2011, // UFC debut at Featherweight
    weightClass: ["Featherweight", "Lightweight", "Bantamweight"],
    image: "../FIGHTER-IMAGES/FRANKIE-EDGAR.png",
    hints: {
        style: "Wrestling/Boxing",
        lastAppearance: "UFC 281",
        nickname: "The Answer"
    }
},
{
    name: "Ilia Topuria",
    birthYear: 1997,
    gender: "Male",
    country: ["Georgia", "Spain"],
    fights: 16,
    wins: 16,
    debutYear: 2020, // UFC debut
    weightClass: ["Featherweight"],
    image: "../FIGHTER-IMAGES/ILIA-TOPURIA.png",
    hints: {
        style: "BJJ/Boxing",
        lastAppearance: "UFC 308",
        nickname: "El Matador"
    }
},
{
    name: "Yair Rodriguez",
    birthYear: 1992,
    gender: "Male",
    country: ["Mexico"],
    fights: 21,
    wins: 16,
    debutYear: 2014, // UFC debut
    weightClass: ["Featherweight"],
    image: "../FIGHTER-IMAGES/YAIR-RODRIGUEZ.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 290",
        nickname: "El Pantera"
    }
},
{
    name: "Brian Ortega",
    birthYear: 1991,
    gender: "Male",
    country: ["USA"],
    fights: 20,
    wins: 16,
    debutYear: 2014, // UFC debut
    weightClass: ["Featherweight"],
    image: "../FIGHTER-IMAGES/BRIAN-ORTEGA.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 299",
        nickname: "T-City"
    }
},
{
    name: "Josh Emmett",
    birthYear: 1985,
    gender: "Male",
    country: ["USA"],
    fights: 24,
    wins: 19,
    debutYear: 2016, // UFC debut
    weightClass: ["Featherweight"],
    image: "../FIGHTER-IMAGES/JOSH-EMMETT.png",
    hints: {
        style: "Striking/Wrestling",
        lastAppearance: "UFC 298",
        nickname: "CC0"
    }
},
{
    name: "Arnold Allen",
    birthYear: 1994,
    gender: "Male",
    country: ["United Kingdom"],
    fights: 21,
    wins: 19,
    debutYear: 2015, // UFC debut
    weightClass: ["Featherweight"],
    image: "../FIGHTER-IMAGES/ARNOLD-ALLEN.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 297",
        nickname: "Almighty"
    }
},

/* BANTAMWEIGHTS */

/* BANTAMWEIGHTS */
{
    name: "Aljamain Sterling",
    birthYear: 1989,
    gender: "Male",
    country: ["USA"],
    fights: 27,
    wins: 23,
    debutYear: 2014, // UFC debut
    weightClass: ["Bantamweight", "Featherweight"],
    image: "../FIGHTER-IMAGES/ALJAMAIN-STERLING.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 292",
        nickname: "Funk Master"
    }
},
{
    name: "Sean O'Malley",
    birthYear: 1994,
    gender: "Male",
    country: ["USA"],
    fights: 20,
    wins: 18,
    debutYear: 2017, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/SEAN-OMALLEY.png",
    hints: {
        style: "Striker",
        lastAppearance: "UFC 306",
        nickname: "Sugar"
    }
},
{
    name: "Petr Yan",
    birthYear: 1992,
    gender: "Male",
    country: ["Russia"],
    fights: 21,
    wins: 16,
    debutYear: 2018, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/PETR-YAN.png",
    hints: {
        style: "Boxing",
        lastAppearance: "UFC 298",
        nickname: "No Mercy"
    }
},
{
    name: "Cory Sandhagen",
    birthYear: 1991,
    gender: "Male",
    country: ["USA"],
    fights: 20,
    wins: 16,
    debutYear: 2018, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/CORY-SANDHAGEN.png",
    hints: {
        style: "Striker",
        lastAppearance: "UFC 299",
        nickname: "The Sandman"
    }
},
{
    name: "Marlon Vera",
    birthYear: 1992,
    gender: "Male",
    country: ["Ecuador"],
    fights: 30,
    wins: 21,
    debutYear: 2014, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/MARLON-VERA.png",
    hints: {
        style: "BJJ/Striking",
        lastAppearance: "UFC 295",
        nickname: "Chito"
    }
},
{
    name: "Dominick Cruz",
    birthYear: 1985,
    gender: "Male",
    country: ["USA"],
    fights: 28,
    wins: 24,
    debutYear: 2011, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/DOMINICK-CRUZ.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC 278",
        nickname: "The Dominator"
    }
},
{
    name: "Merab Dvalishvili",
    birthYear: 1991,
    gender: "Male",
    country: ["Georgia"],
    fights: 21,
    wins: 17,
    debutYear: 2017, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/MERAB-DVALISHVILI.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC 300",
        nickname: "The Machine"
    }
},
{
    name: "Song Yadong",
    birthYear: 1997,
    gender: "Male",
    country: ["China"],
    fights: 30,
    wins: 22,
    debutYear: 2017, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/SONG-YADONG.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 299",
        nickname: "Kung Fu Kid"
    }
},
{
    name: "Umar Nurmagomedov",
    birthYear: 1996,
    gender: "Male",
    country: ["Russia"],
    fights: 17,
    wins: 17,
    debutYear: 2021, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/UMAR-NURMAGOMEDOV.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC 297",
        nickname: "No nickname"
    }
},
{
    name: "Rob Font",
    birthYear: 1987,
    gender: "Male",
    country: ["USA"],
    fights: 26,
    wins: 20,
    debutYear: 2014, // UFC debut
    weightClass: ["Bantamweight"],
    image: "../FIGHTER-IMAGES/ROB-FONT.png",
    hints: {
        style: "Boxing",
        lastAppearance: "UFC 296",
        nickname: "No nickname"
    }
},
    
/* FLYWEIGHTS */

/* FLYWEIGHTS */
{
    name: "Demetrious Johnson",
    birthYear: 1986,
    gender: "Male",
    country: ["USA"],
    fights: 30,
    wins: 25,
    debutYear: 2011, // UFC debut
    weightClass: ["Flyweight"],
    image: "../FIGHTER-IMAGES/DJ.png",
    hints: {
        style: "Mixed Martial Artist",
        lastAppearance: "UFC 227",
        nickname: "Mighty Mouse"
    }
},
{
    name: "Kai Kara-France",
    birthYear: 1993,
    gender: "Male",
    country: ["New Zealand"],
    fights: 36,
    wins: 24,
    debutYear: 2018, // UFC debut
    weightClass: ["Flyweight"],
    image: "../FIGHTER-IMAGES/KAI-KARA-FRANCE.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 293",
        nickname: "Don't Blink"
    }
},
{
    name: "Brandon Moreno",
    birthYear: 1994,
    gender: "Male",
    country: ["Mexico"],
    fights: 31,
    wins: 21,
    debutYear: 2016, // UFC debut
    weightClass: ["Flyweight"],
    image: "../FIGHTER-IMAGES/BRANDON-MORENO.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 290",
        nickname: "The Assassin Baby"
    }
},
{
    name: "Henry Cejudo",
    birthYear: 1987,
    gender: "Male",
    country: ["USA"],
    fights: 21,
    wins: 16,
    debutYear: 2014, // UFC debut
    weightClass: ["Flyweight", "Bantamweight"],
    image: "../FIGHTER-IMAGES/HENRY-CEJUDO.png",
    hints: {
        style: "Wrestling",
        lastAppearance: "UFC FIGHT NIGHT: CEJUDO VS SONG",
        nickname: "Triple C"
    }
},
{
    name: "Brandon Royval",
    birthYear: 1993,
    gender: "Male",
    country: ["USA"],
    fights: 21,
    wins: 15,
    debutYear: 2020, // UFC debut
    weightClass: ["Flyweight"],
    image: "../FIGHTER-IMAGES/BRANDON-ROYVAL.png",
    hints: {
        style: "All-Rounder",
        lastAppearance: "UFC 296",
        nickname: "Raw Dawg"
    }
},
{
    name: "Alexandre Pantoja",
    birthYear: 1990,
    gender: "Male",
    country: ["Brazil"],
    fights: 31,
    wins: 27,
    debutYear: 2017, // UFC debut
    weightClass: ["Flyweight"],
    image: "../FIGHTER-IMAGES/ALEXANDRE-PANTOJA.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 296",
        nickname: "The Cannibal"
    }
},
{
    name: "Deiveson Figueiredo",
    birthYear: 1987,
    gender: "Male",
    country: ["Brazil"],
    fights: 26,
    wins: 22,
    debutYear: 2017, // UFC debut
    weightClass: ["Flyweight", "Bantamweight"],
    image: "../FIGHTER-IMAGES/DEIVESON-FIGUEIREDO.png",
    hints: {
        style: "BJJ/Striking",
        lastAppearance: "UFC 300",
        nickname: "Deus da Guerra"
    }
},
{
    name: "Steve Erceg",
    birthYear: 1995,
    gender: "Male",
    country: ["Australia"],
    fights: 14,
    wins: 12,
    debutYear: 2023, // UFC debut
    weightClass: ["Flyweight"],
    image: "../FIGHTER-IMAGES/STEVE-ERCEG.png",
    hints: {
        style: "Striking/Grappling",
        lastAppearance: "UFC 300",
        nickname: "Astro Boy"
    }
},

    
];
