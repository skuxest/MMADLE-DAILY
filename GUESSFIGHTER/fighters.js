// === LIST OF FIGHTERS ===
const fighters = [

/* FEMALE FIGHTERS */
{
    name: "Amanda Nunes",
    age: 36,
    gender: "Female",
    country: ["Brazil"],
    fights: 27,
    wins: 23,
    debutYear: 2008,
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
    age: 36,
    gender: "Female",
    country: ["Kyrgyzstan"],
    fights: 29,
    wins: 23,
    debutYear: 2003,
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
    age: 32,
    gender: "Female",
    country: ["USA"],
    fights: 20,
    wins: 13,
    debutYear: 2013,
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
    age: 35,
    gender: "Female",
    country: ["China"],
    fights: 28,
    wins: 24,
    debutYear: 2013,
    weightClass: ["Strawweight"],
    image: "../FIGHTER-IMAGES/WEILI-ZHANG.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 298",
        nickname: "Magnum"
    }
},
{
    name: "Julianna Pena",
    age: 35,
    gender: "Female",
    country: ["USA"],
    fights: 18,
    wins: 12,
    debutYear: 2009,
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
    age: 42,
    gender: "Female",
    country: ["USA"],
    fights: 22,
    wins: 15,
    debutYear: 2011,
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
    age: 37,
    gender: "Male",
    country: ["USA"],
    fights: 28,
    wins: 27,
    debutYear: 2008,
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
        age: 31,
        gender: "Male",
        country: ["United Kingdom"],
        fights: 18,
        wins: 15,
        debutYear: 2014,
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
        age: 34,
        gender: "Male",
        country: ["France"],
        fights: 15,
        wins: 12,
        debutYear: 2018,
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
        age: 33,
        gender: "Male",
        country: ["Russia"],
        fights: 20,
        wins: 18,
        debutYear: 2014,
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
        age: 34,
        gender: "Male",
        country: ["USA"],
        fights: 22,
        wins: 17,
        debutYear: 2014,
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
        age: 36,
        gender: "Male",
        country: ["Russia"],
        fights: 49,
        wins: 38,
        debutYear: 2009,
        weightClass: ["Heavyweight"],
        image: "../FIGHTER-IMAGES/ALEXANDER-VOLKOV.png",
        hints: {
            style: "Striking",
            lastAppearance: "UFC 303",
            nickname: "Drago"
        }
    },    

/* LIGHT HEAVYWEIGHTS */

{
    name: "Alex Pereira",
    age: 37,
    gender: "Male",
    country: ["Brazil"],
    fights: 12,
    wins: 9,
    debutYear: 2015,
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
    age: 33,
    gender: "Male",
    country: ["Russia"],
    fights: 23,
    wins: 20,
    debutYear: 2014,
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
    age: 32,
    gender: "Male",
    country: ["Czech Republic"],
    fights: 34,
    wins: 30,
    debutYear: 2012,
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
    age: 34,
    gender: "Male",
    country: ["USA"],
    fights: 14,
    wins: 12,
    debutYear: 2017,
    weightClass: ["Light Heavyweight"],
    image: "../FIGHTER-IMAGES/JAMAHAL-HILL.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 311",
        nickname: "Sweet Dreams"
    }
},
{
    name: "Jan BLachowicz",
    age: 42,
    gender: "Male",
    country: ["Poland"],
    fights: 40,
    wins: 29,
    debutYear: 2007,
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
    age: 36,
    gender: "Male",
    country: ["USA"],
    fights: 58,
    wins: 37,
    debutYear: 2008,
    weightClass: ["Light Heavyweight", "Middleweight"],
    image: "../FIGHTER-IMAGES/ANTHONY-SMITH.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 309",
        nickname: "Lionheart"
    }
},

/* MIDDLEWEIGHTS */

{
    name: "Dricus du Plessis",
    age: 30,
    gender: "Male",
    country: ["South Africa"],
    fights: 25,
    wins: 23,
    debutYear: 2013,
    weightClass: ["Middleweight"],
    image: "../FIGHTER-IMAGES/DRICUS-DU-PLESSIS.png",
    hints: {
        style: "Kickboxing",
        lastAppearance: "UFC 312",
        nickname: "Stillknocks"
    }
},
{
    name: "Khamzat Chimaev",
    age: 31,
    gender: "Male",
    country: ["Sweden"],
    fights: 14,
    wins: 14,
    debutYear: 2018,
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
    age: 34,
    gender: "Male",
    country: ["USA"],
    fights: 36,
    wins: 29,
    debutYear: 2008,
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
    age: 29,
    gender: "Male",
    country: ["France"],
    fights: 17,
    wins: 13,
    debutYear: 2016,
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
    age: 35,
    gender: "Male",
    country: ["Nigeria", "New Zealand"],
    fights: 29,
    wins: 24,
    debutYear: 2012,
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
    age: 34,
    gender: "Male",
    country: ["Australia"],
    fights: 34,
    wins: 26,
    debutYear: 2009,
    weightClass: ["Middleweight", "Welterweight"],
    image: "../FIGHTER-IMAGES/ROBERT-WHITTAKER.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 300",
        nickname: "The Reaper"
    }
},

/* WELTERWEIGHTS */
{
name: "Georges St-Pierre",
age: 43,
gender: "Male",
country: ["Canada"],
fights: 28,
wins: 26,
debutYear: 2002,
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
    age: 36,
    gender: "Male",
    country: ["USA", "Palestine"],
    fights: 28,
    wins: 24,
    debutYear: 2012,
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
    age: 37,
    gender: "Male",
    country: ["Nigeria", "USA"],
    fights: 24,
    wins: 20,
    debutYear: 2012,
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
    age: 33,
    gender: "Male",
    country: ["Jamaica", "United Kingdom"],
    fights: 27,
    wins: 22,
    debutYear: 2011,
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
    age: 37,
    gender: "Male",
    country: ["USA"],
    fights: 22,
    wins: 17,
    debutYear: 2012,
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
    age: 38,
    gender: "Male",
    country: ["Brazil"],
    fights: 30,
    wins: 22,
    debutYear: 2012,
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
    age: 40,
    gender: "Male",
    country: ["USA"],
    fights: 52,
    wins: 35,
    debutYear: 2003,
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
    age: 42,
    gender: "Male",
    country: ["USA"],
    fights: 25,
    wins: 17,
    debutYear: 2010,
    weightClass: ["Welterweight"],
    image: "../FIGHTER-IMAGES/STEPHEN-THOMPSON.png",
    hints: {
        style: "Karate",
        lastAppearance: "UFC 291",
        nickname: "Wonderboy"
    }
},


/* LIGHTWEIGHTS */

{
    name: "Islam Makhachev",
    age: 32,
    gender: "Male",
    country: ["Russia"],
    fights: 26,
    wins: 25,
    debutYear: 2010,
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
    age: 36,
    gender: "Male",
    country: ["Russia"],
    fights: 29,
    wins: 29,
    debutYear: 2008,
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
    age: 36,
    gender: "Male",
    country: ["USA"],
    fights: 38,
    wins: 30,
    debutYear: 2009,
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
    age: 36,
    gender: "Male",
    country: ["USA"],
    fights: 28,
    wins: 25,
    debutYear: 2011,
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
    age: 35,
    gender: "Male",
    country: ["Brazil"],
    fights: 46,
    wins: 35,
    debutYear: 2008,
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
    age: 38,
    gender: "Male",
    country: ["USA"],
    fights: 31,
    wins: 24,
    debutYear: 2009,
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
    age: 41,
    gender: "Male",
    country: ["USA"],
    fights: 36,
    wins: 25,
    debutYear: 2008,
    weightClass: ["Lightweight", "Welterweight"],
    image: "../FIGHTER-IMAGES/TONY-FERGUSON.png",
    hints: {
        style: "Striking",
        lastAppearance: "UFC 279",
        nickname: "El Cucuy"
    }
},


/* FEATHERWEIGHTS */
{
    name: "Jose Aldo",
    age: 38,
    gender: "Male",
    country: ["Brazil"],
    fights: 45,
    wins: 32,
    debutYear: 2004,
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
    age: 33,
    gender: "Male",
    country: ["USA"],
    fights: 34,
    wins: 26,
    debutYear: 2010,
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
    age: 36,
    gender: "Male",
    country: ["Australia"],
    fights: 30,
    wins: 26,
    debutYear: 2012,
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
    age: 36,
    gender: "Male",
    country: ["Ireland"],
    fights: 28,
    wins: 22,
    debutYear: 2008,
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
    age: 39,
    gender: "Male",
    country: ["USA"],
    fights: 23,
    wins: 18,
    debutYear: 2008,
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
    age: 43,
    gender: "Male",
    country: ["USA"],
    fights: 35,
    wins: 24,
    debutYear: 2005,
    weightClass: ["Featherweight", "Lightweight", "Bantamweight"],
    image: "../FIGHTER-IMAGES/FRANKIE-EDGAR.png",
    hints: {
        style: "Wrestling/Boxing",
        lastAppearance: "UFC 281",
        nickname: "The Answer",
    }
},
{
    name: "Ilia Topuria",
    age: 28,
    gender: "Male",
    country: ["Georgia", "Spain"],
    fights: 16,
    wins: 16,
    debutYear: 2015,
    weightClass: ["Featherweight"],
    image: "../FIGHTER-IMAGES/ILIA-TOPURIA.png",
    hints: {
        style: "BJJ/Boxing",
        lastAppearance: "UFC 308",
        nickname: "El Matador"
    }
},


/* BANTAMWEIGHTS */

    {
        name: "Aljamain Sterling",
        age: 35,
        gender: "Male",
        country: ["USA"],
        fights: 27,
        wins: 23,
        debutYear: 2011,
        weightClass: ["Bantamweight/Featherweight"],
        image: "../FIGHTER-IMAGES/ALJAMAIN-STERLING.png",
        hints: {
            style: "BJJ",
            lastAppearance: "UFC 292",
            nickname: "Funk Master"
        }
    },
    {
        name: "Sean O'Malley",
        age: 30,
        gender: "Male",
        country: ["USA"],
        fights: 20,
        wins: 18,
        debutYear: 2015,
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
        age: 32,
        gender: "Male",
        country: ["Russia"],
        fights: 21,
        wins: 16,
        debutYear: 2013,
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
        age: 33,
        gender: "Male",
        country: ["USA"],
        fights: 20,
        wins: 16,
        debutYear: 2015,
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
        age: 32,
        gender: "Male",
        country: ["Ecuador"],
        fights: 30,
        wins: 21,
        debutYear: 2012,
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
        age: 39,
        gender: "Male",
        country: ["USA"],
        fights: 28,
        wins: 24,
        debutYear: 2005,
        weightClass: ["Bantamweight"],
        image: "../FIGHTER-IMAGES/DOMINICK-CRUZ.png",
        hints: {
            style: "Wrestling",
            lastAppearance: "UFC 278",
            nickname: "The Dominator"
        }
    },
    

/* FLYWEIGHTS */

{
    name: "Demetrious Johnson",
    age: 38,
    gender: "Male",
    country: ["USA"],
    fights: 30,
    wins: 25,
    debutYear: 2006,
    weightClass: "Flyweight",
    image: "../FIGHTER-IMAGES/DJ.png",
    hints: {
    style: "Mixed Martial Artist",
    lastAppearance: "UFC 227",
    nickname: "Mighty Mouse"
      }
},

{
    name: "Kai Kara-France",
    age: 31,
    gender: "Male",
    country: ["New Zealand"],
    fights: 36,
    wins: 24,
    debutYear: 2010,
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
    age: 30,
    gender: "Male",
    country: ["Mexico"],
    fights: 31,
    wins: 21,
    debutYear: 2011,
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
    age: 37,
    gender: "Male",
    country: ["USA"],
    fights: 21,
    wins: 16,
    debutYear: 2013,
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
    age: 31,
    gender: "Male",
    country: ["USA"],
    fights: 21,
    wins: 15,
    debutYear: 2012,
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
    age: 34,
    gender: "Male",
    country: ["Brazil"],
    fights: 31,
    wins: 27,
    debutYear: 2007,
    weightClass: ["Flyweight"],
    image: "../FIGHTER-IMAGES/ALEXANDRE-PANTOJA.png",
    hints: {
        style: "BJJ",
        lastAppearance: "UFC 296",
        nickname: "The Cannibal"
    }
}

]