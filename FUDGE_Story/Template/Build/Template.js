"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //Transitions
    Template.transition = {
        Transitionname: {
            duration: 1,
            alpha: "./Ressources/Logo.png",
            edge: 1,
        },
        Transitionname2: {
            duration: 1,
            alpha: "./Ressources/Logo.png",
            edge: 1,
        }
    };
    //Menü
    let inGameMenu = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        volumeup: "+",
        volumedown: "-",
        inventar: "Inventar",
    };
    //Buttonfunktionen
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            //Speichern
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            //Laden
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            //Sound lauter
            case inGameMenu.volumeup:
                incrementSound();
                break;
            //Sound leiser
            case inGameMenu.volumedown:
                decrementSound();
                break;
            case inGameMenu.inventar:
                await Template.ƒS.Inventory.open();
                await Template.ƒS.update();
                console.log("inventory open");
                break;
            //Credits
            case inGameMenu.credits:
                showCredits();
                break;
        }
    }
    //Menü standardmäßig an = true. Standardmäßig aus = false
    let menu = false;
    //Shortcuts fürs Menu
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Close");
                    Template.gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    Template.gameMenu.open();
                    menu = true;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.I:
                await Template.ƒS.Inventory.open();
                await Template.ƒS.update();
                //hier inventar öffnungsfunktion
                console.log("A");
        }
    }
    Template.hndKeyPress = hndKeyPress;
    Template.items = {
        Apfel: {
            name: "Apfel",
            description: " saftiger Apfel.",
            image: "./Ressources/Images/Items/Apfel.png",
            static: true,
            exist: true,
        }
    };
    //Sounds
    Template.sound = {
        //music 
        examplemusic: "./Ressources/Audio/Audio_01.wav",
        Shoreee: "./Ressources/Audio/shore.wav",
        ForestGumpy: "./Ressources/Audio/Forest.wav",
        Rusalki: "./Ressources/Audio/Choir.wav",
    };
    //Backgrounds
    Template.locations = {
        Hintergrund1: {
            name: "Balkon",
            background: "./Ressources/Background1/Balkon.png",
        },
        Hintergrund2: {
            name: "Wohnzimmer",
            background: "./Ressources/Background1/Wohnzimmer1.png",
        },
        Hintergrund3: {
            name: "Wohnzimmer2",
            background: "./Ressources/Background1/Wohnzimmer2.png",
        },
        Hintergrund4: {
            name: "Nachrichten",
            background: "./Ressources/Background1/Nachrichten.png",
        },
        Hintergrund5: {
            name: "LP1",
            background: "./Ressources/Background1/LostPlace1.png",
        },
        Hintergrund6: {
            name: "LP2",
            background: "./Ressources/Background1/LostPlace2.png",
        },
        Forest1: {
            name: "Forest1",
            background: "./Ressources/Background1/World2/Forest.png",
        },
        Forest2: {
            name: "Forest2",
            background: "FUDGE_Story/Template/Ressources/Background1/World2/ForestForest.png",
        },
        Jorogumolivingroom: {
            name: "Jorogumolivingroom",
            background: "./Ressources/Background1/Jorogumoliving.png",
        },
        Jorogumosleepingroom: {
            name: "JorogumoSleeping",
            background: "./Ressources/Background1/Jorogumosleep.png",
        },
        CS1: {
            name: "JorogumoCS",
            background: "./Ressources/Background1/CS1.png",
        },
        CS2: {
            name: "RusalkaCS",
            background: "./Ressources/Background1/CS2.png",
        },
        RusalkaShore: {
            name: "RusalkaShore",
            background: "./Ressources/Background1/World2/Shore.png",
        },
        ShoreShore: {
            name: "ShoreShore",
            background: "./Ressources/Background1/World2/ShoreShore.png",
        },
        Felsentag: {
            name: "FelsenTag",
            background: "./Ressources/Background1/World2/Felsen.png",
        },
        FelsenNacht: {
            name: "LP2",
            background: "./Ressources/Background1/World2/Ende.png",
        },
        Blackscreen: {
            name: "Blackscreen",
            background: "./Ressources/Background1/World2/33.png",
        }
    };
    //Charakters
    Template.characters = {
        Tsuki: {
            name: "Tsuki",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: "./Ressources/Character/Twins/Tsuki.png",
                anxious: "./Ressources/Character/Twins/twinsanxious.png",
                friendly: "./Ressources/Character/Twins/TaiyoTsukifriendly.png",
                determined: "./Ressources/Character/Twins/determined.png",
                transiotions: "./Ressources/Character/Twins/Transition.png"
            }
        },
        Taiyō: {
            name: "Taiyō",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: "./Ressources/Character/Twins/Tayio.png",
                eyesonly: "Quelle"
            }
        },
        Jorogumo: {
            name: "Jorogumo",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: "./Ressources/Character/Jorugomo/Jorogumo1.png",
                jorogumo1: "./Ressources/Character/Jorugomo/Jorogumo2.png",
                ending: "./Ressources/Character/Jorugomo/Jorogumo ending.png",
                transition1: "./Ressources/Character/Jorugomo/Jorogumotrs20.png",
                transition2: "./Ressources/Character/Jorugomo/Jorogumotrs21.png",
                transition3: "./Ressources/Character/Jorugomo/Jorogumotrs22.png",
            }
        },
        Rusalka: {
            name: "Rusalka",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: "./Ressources/Character/Rusalka/Rusalka.png",
                eyesonly: "Quelle"
            }
        }
    };
    //Animations
    function fromLeftToRight() {
        return {
            start: { translation: Template.ƒS.positionPercent(15, 100) },
            end: { translation: Template.ƒS.positions.bottomright },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromLeftToRight = fromLeftToRight;
    function fromlefterToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(75, 100) },
            end: { translation: Template.ƒS.positionPercent(100, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromlefterToLeft = fromlefterToLeft;
    function fromCenterToCenter() {
        return {
            start: { translation: Template.ƒS.positions.center, scaling: new Template.ƒS.Position(0.5, 0.5) },
            end: { translation: Template.ƒS.positions.center, scaling: new Template.ƒS.Position(0.5, 0.5) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromCenterToCenter = fromCenterToCenter;
    function fromCenterToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(40, 80) },
            end: { translation: Template.ƒS.positionPercent(10, 80) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromCenterToLeft = fromCenterToLeft;
    function fromLeftToCenter() {
        return {
            start: { translation: Template.ƒS.positionPercent(10, 80) },
            end: { translation: Template.ƒS.positionPercent(40, 80) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromLeftToCenter = fromLeftToCenter;
    //SaveGame preparation
    Template.dataForSave = {
        //Hier Speicherbare Elemente eintragen
        points: 0,
        gesprochen: {
            Rusalka: false,
            Jorogumo: false,
            Taiyo: false,
            Tsuki: false
        },
        beispielwert: 0,
        beispielbool: false,
        evil: 0,
        good: 0,
    };
    let volume = 5.0;
    //Sound lauter machen
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    //Sound leiser machen
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    //Credits anzeigen
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("Die Visual Novel wurde mit FudgeStory erstellt." +
            "<br/>" +
            "Von Pranvera Pelaj" +
            "<br/>" +
            "Die Hintergründe, Charaktere und Items wurden mit Hilfe von MidJourney und DALL-E generiert." +
            "<br/>" +
            "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurde." +
            "<br/>" +
            "Die Soundelemente wurden mit einer Motion Array Lizenz lizensiert heruntergeladen." +
            "<br/>");
    }
    Template.showCredits = showCredits;
    console.log(1);
    window.addEventListener("load", start);
    function start(_event) {
        console.log(2);
        //Menu
        Template.gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenen aufrufen bezogen auf die .TS Datei  // SZENE HINZUFP
        let scenes = [
            { id: "Szenenid", scene: Template.Szene1, name: "Name" },
            { id: "Szene2", scene: Template.Szene2, name: "Szene2" },
            { id: "Szene3", scene: Template.Szene3, name: "Szene3" },
            { id: "Szene4", scene: Template.Szene4, name: "Szene4" },
            { id: "Szene5", scene: Template.Szene5, name: "Szene5" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene3() {
        Template.ƒS.Sound.setMasterVolume(2);
        await Template.ƒS.Sound.fade(Template.sound.examplemusic, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        Template.ƒS.Sound.play(Template.sound.examplemusic, 1, false);
        console.log("audio is being played");
        Template.ƒS.Location.show(Template.locations.Jorogumolivingroom); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        await Template.ƒS.update(1);
        let text = {
            Taiyō: {
                T0000: "Hallo. Ich habe Fragen an dich.",
                T0001: "Wo sind wir hier?",
                T0002: "Das tut mir Leid.",
                T0003: "... Ich würde meine Schwester mitnehmen und mich draußen ein wenig umgucken.",
            },
            Jorogumo: {
                T0000: "Endlich bist du so weit. Ich habe schon viele Menschen kennengelernt. Sie wissen nicht mit ihrer Angst umzugehen.",
                T0001: "Sie haben Angst vor dem Unbekannten.",
                T0003: "Ich möchte dir helfen. Frage alles, was du wissen möchtest.",
                T0004: "In einer fremden Dimension. In letzter Zeit verfangen sich immer mehr Menschen aus eurer Dimension in der Unseren.",
                T0005: "Mein Name ist Jorogumo. Ich bin eine Spinnengöttin.",
                T0006: "Vor einiger Zeit hatte ich noch einige Freunde, die auch zu den Insektengöttern gehört hatten.",
                T0007: "aber dann..",
                T0008: "das ist erstmal genug für heute.",
                T0009: "Gerne doch. Passt auf euch auf.",
            },
        };
        let Entscheidungsname = {
            option1: "Sprich mit Jorogumo",
            option2: "Sprich nicht mit Jorogumo.",
        };
        let EntscheidungsnamenElement = await Template.ƒS.Menu.getInput(Entscheidungsname, "auswahl");
        switch (EntscheidungsnamenElement) {
            case Entscheidungsname.option1:
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.determined, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0000, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0000, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0001, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0003, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.determined, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.determined, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0001, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0004, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0005, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0006, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0007, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0008, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.determined, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0002, true);
                await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0003, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0009, true);
                break;
            case Entscheidungsname.option2:
                await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0003, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0009, true);
                break;
        }
        //Sound ausblenden
        Template.ƒS.Sound.fade(Template.sound.examplemusic, 0, 0.8, true);
        //Character verstecken
        Template.ƒS.Character.hideAll();
        //Text verstecken
        Template.ƒS.Speech.hide();
        Template.ƒS.update(1);
        Template.ƒS.Location.show(Template.locations.Blackscreen);
        await Template.ƒS.update(0);
    }
    Template.Szene3 = Szene3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene1() {
        Template.ƒS.Sound.setMasterVolume(2);
        await Template.ƒS.Sound.fade(Template.sound.ForestGumpy, 0.07, 0.1, true);
        Template.ƒS.Sound.play(Template.sound.ForestGumpy, 1, false);
        let text = {
            Tsuki: {
                T0000: "hahhaa, ja, wir können tun und lassen, was wir wollen. Lass uns nur darauf achten, dass wir das Haus sauber halten bis Mama und Papa kommen.",
                T0001: "Gerne.",
                T0002: "Hörst du das?",
                T0003: "Lass uns nachsehen. Die Scheune ist bei uns um die Ecke.",
                T0004: "Gut. ich auch.",
                T0005: "so. Hier müsste es sein.",
                T0006: "Taiyō? Wo bist du?",
                T0007: "Taiyō?",
                T0008: "Taiyō?",
                T0009: "AHHHHHHHHHHHHHHH",
            },
            Taiyō: {
                T0000: "FREIHEIT!",
                T0001: "Hahaha, fang doch nicht sofort damit an. Lass uns erstmal hineingehen und überlegen, wie wir den restlichen Tag verbringen wollen.",
                T0003: "Wow. Ich will wissen was das ist!! Es klingt wunderschön!!",
                T0004: "Hahahahaha, ja!! Lass mich noch den Apfel einpacken.",
                T0005: "Ich höre es wieder!!",
                T0006: "TSUKIII!! HILFE!!! ICH SEHE NICHTS MEHR.",
            },
        };
        Template.ƒS.Location.show(Template.locations.Hintergrund3);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0001, true);
        await Template.ƒS.Sound.fade(Template.sound.Rusalki, 0.07, 0.1, true);
        Template.ƒS.Sound.play(Template.sound.Rusalki, 1, false);
        console.log("audio is being played");
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0004, true);
        Template.ƒS.Inventory.add(Template.items.Apfel);
        console.log(Template.items);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.update(2);
        Template.ƒS.Location.show(Template.locations.Hintergrund5);
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.Rusalki, 0.10, 0.1, true);
        Template.ƒS.Sound.play(Template.sound.Rusalki, 1, false);
        console.log("audio is being played");
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0005, true);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0005, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0006, true);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0006, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0007, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0008, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0009, true);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        Template.ƒS.Location.show(Template.locations.Blackscreen);
        await Template.ƒS.update(0);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.transiotions, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(3);
        Template.ƒS.Sound.fade(Template.sound.Rusalki, 0, 0.8, true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
    }
    Template.Szene1 = Szene1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene2() {
        // Soundeinstellungen
        Template.ƒS.Sound.setMasterVolume(2);
        await Template.ƒS.Sound.fade(Template.sound.ForestGumpy, 0.07, 0.1, true);
        Template.ƒS.Sound.play(Template.sound.ForestGumpy, 1, false);
        // Dialogtexte
        let text = {
            Taiyō: {
                T0000: "Wo...Wo sind wir hier?",
                T0001: "... lass uns erstmal nach Hinweisen suchen.",
                T0002: "Wir finden bald raus, wo wir sind. Wo sollen wir schon sein, hahaha...",
                T0003: "Monolog: Ich will gar nicht wissen, was das ist. Wir dürfen dieser Frau nicht das Gefühl geben, dass wir ihr nicht vertrauen.... Warum sind hier überhaupt so viele Spinnenweben?... Und... wer ist sie?",
                T0004: "Hier sieht es sehr gemütlich aus. Danke für deine Gastfreundschaft.",
                T0005: "",
                T0006: "Ich weiß nicht, wo wir gelandet sind. Wir sind einem Geräusch gefolgt und jetzt sind wir hier gefangen. Wir wollen nach Hause.",
            },
            Tsuki: {
                T0000: "AHHH WARUM BIST DU EIN JUNGE?",
                T0004: "WARUM BIN ICH EIN JUNGE?",
                T0005: "HILFE",
                T0001: "Danke",
                T0006: "Ich will nach Hause!! Hier ist alles gruselig und ich will nach Hause! Wir haben Sturmfrei und wir haben sonst nie Sturmfrei!!",
            },
            Jorogumo: {
                T0000: "Hallo, ihr beiden! Ihr seht aber niedlich aus!",
                T0001: "Was macht ihr hier? Wo sind eure Eltern? Sollte man so süße kleine Wesen alleine draußen herumlaufen lassen?",
                T0003: "Ach... so ist das also.",
                T0004: "Ihr seht erschöpft aus.",
                T0005: "Kommt mit mir mit. Ruht euch in meinem Gästezimmer aus.",
                T0006: "Schlaft jetzt erstmal ein wenig. Wir reden später weiter. Wir finden einen Weg, wie ihr zurück in eure Welt gelangt.",
            },
        };
        // Szenen- und Charakteranzeige
        Template.ƒS.Location.show(Template.locations.Forest1);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0005, true);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0002, true);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0001, true);
        // Entscheidungspunkt
        let Entscheidungsname = {
            option1: "Lasse Taiyō antworten",
            option2: "Lasse Tsuki antworten",
        };
        let EntscheidungsnamenElement = await Template.ƒS.Menu.getInput(Entscheidungsname, "auswahl");
        switch (EntscheidungsnamenElement) {
            case Entscheidungsname.option1:
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0006, true);
                break;
            case Entscheidungsname.option2:
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0006, true);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.update(0);
        await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0005, true);
        await Template.ƒS.Character.hide(Template.characters.Jorogumo);
        await Template.ƒS.update(0);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
        Template.ƒS.Location.show(Template.locations.Jorogumosleepingroom);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0001, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0006, true);
        await Template.ƒS.Character.hide(Template.characters.Jorogumo);
        await Template.ƒS.update(0);
        Template.ƒS.Location.show(Template.locations.CS1);
        console.log("Background is being displayed");
        await Template.ƒS.update(0);
        await Template.ƒS.update(3);
        // Abschluss der Szene
        Template.ƒS.Sound.fade(Template.sound.ForestGumpy, 0, 0.8, true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
    }
    Template.Szene2 = Szene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene4() {
        Template.ƒS.Sound.setMasterVolume(2);
        await Template.ƒS.Sound.fade(Template.sound.Shoreee, 0.07, 0.1, true);
        Template.ƒS.Sound.play(Template.sound.Shoreee, 1, false);
        console.log("audio is being played");
        let text = {
            Taiyō: {
                T0000: "Lass uns ihr folgen.",
                T0001: "Ich bin Taiyo. Das ist meine kleine Schwester Tsuki. Wir haben uns verlaufen.",
                T0002: "Wir haben deine Stimme gehört und sind der wunderschönen Melodie gefolgt.",
                T0003: "Weisst du wie wir zurück in die Menschenwelt kommen?",
                T0004: "Warte... Wie..",
                T0005: "...",
                T0006: "Lass uns zu ihr gehen. Vielleicht kann sie uns weiterhelfen.",
            },
            Tsuki: {
                T0000: "Taiyo!!!!",
                T0001: " Die Melodie!!",
                T0003: " Hörst du das??? Das ist die Melodie aus der Scheune!!",
                T0004: "Wieso denn?",
                T0005: "Ist...",
                T0006: "Ist das eine Meerjungfrau?",
            },
            Rusalka: {
                T0000: "Hallo ihr beiden. Wer seid ihr denn?",
                T0001: "Ach, ihr seid wahrscheinlich aus der Menschenwelt. Wie seid ihr hierhergekommen?",
                T0003: "Wie bitte? Ihr habt meine Stimme in der Menschenwelt gehört? Das kann doch nur...",
                T0004: "MONOLOG: Das müssen die Kinder aus der Prophezeiung sein. Ein Riss in der Menschenwelt führt in das Reich der Toten. Durch Sie wird die Eule des Friedens zurück zu uns finden. Dass herrscht endlich wieder Gleichgewicht.",
                T0005: "Ich wollte euch  nicht hierherlocken. Das tut mir Leid.",
                T0006: "Aber ich kann euch vielleicht weiterhelfen.",
                T0007: "Hier, nehmt dieses Amulett und geht damit an den Felsen der Wahrheit. Dort wünscht ihr euch ganz fest, dass ihr wieder in eure Welt gelangt.",
                T0008: "Aber gebt euch vor bösen Kreaturen in Acht! Hier in der Nähe müsste Jorogumo sein. Passt auf, dass Sie das Amulett nicht zu Gesicht bekommt.",
                T0009: "Niemand darf erfahren, dass ihr dieses Amulett besitzt. Ich  muss hier schnell weg. Viel Glück!",
            },
        };
        Template.ƒS.Location.show(Template.locations.Forest2);
        console.log("Background is being displayed");
        await Template.ƒS.update(2);
        Template.ƒS.Location.show(Template.locations.Forest1);
        console.log("Background is being displayed");
        await Template.ƒS.update(0);
        await Template.ƒS.Sound.fade(Template.sound.Rusalki, 0.07, 0.1, true);
        Template.ƒS.Sound.play(Template.sound.Rusalki, 1, false);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Character.hide(Template.characters.Rusalka);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0000, true);
        Template.ƒS.Location.show(Template.locations.ShoreShore);
        console.log("Background is being displayed");
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0006, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0005, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0006, true);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.Character.show(Template.characters.Rusalka, Template.characters.Rusalka.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0000, true);
        await Template.ƒS.Character.hide(Template.characters.Rusalka);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0001, true);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.Character.show(Template.characters.Rusalka, Template.characters.Rusalka.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0001, true);
        await Template.ƒS.Character.hide(Template.characters.Rusalka);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0002, true);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.Character.show(Template.characters.Rusalka, Template.characters.Rusalka.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0004, true);
        await Template.ƒS.Character.hide(Template.characters.Rusalka);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0003, true);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.Character.show(Template.characters.Rusalka, Template.characters.Rusalka.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0005, true);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0006, true);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0007, true);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0008, true);
        await Template.ƒS.Speech.tell(Template.characters.Rusalka, text.Rusalka.T0009, true);
        await Template.ƒS.Character.hide(Template.characters.Rusalka);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.friendly, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0005, true);
        // Abschluss der Szene
        await Template.ƒS.Character.hideAll();
        Template.ƒS.Location.show(Template.locations.CS2);
        console.log("Background is being displayed");
        await Template.ƒS.update(0);
        await Template.ƒS.update(3);
        Template.ƒS.Sound.fade(Template.sound.ForestGumpy, 0, 0.8, true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.Shoreee, 0, 0.8, true);
        //Character verstecken
        //Text verstecken
        Template.ƒS.Speech.hide();
        Template.ƒS.update(1);
        Template.ƒS.Location.show(Template.locations.Blackscreen);
        await Template.ƒS.update(0);
    }
    Template.Szene4 = Szene4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene5() {
        Template.ƒS.Sound.setMasterVolume(2);
        await Template.ƒS.Sound.fade(Template.sound.Shoreee, 0.07, 0.1, true);
        Template.ƒS.Sound.play(Template.sound.Shoreee, 1, false);
        console.log("audio is being played");
        Template.ƒS.Location.show(Template.locations.Hintergrund3);
        console.log("Background is being displayed");
        await Template.ƒS.update(1);
        let text = {
            Taiyō: {
                T0000: "Hallo Jorogumo! Danke dir! Wir haben dich auch schon gesucht.",
                T0002: "Wir haben Rusalka getroffen. Sie hat uns einen Tipp gegeben, wie wir nach Hause kommen.",
                T0003: "Bitte Jorugumo. Wir wollen nach Hause, wir halten das in dieser Dimension nicht mehr aus.",
                T0004: "Warum willst du in die Menschenwelt?",
                T0005: "Das stimmt nicht! In unserer Welt unterscheiden wir nicht zwischen Tieren und Insekten. Jeder hat ein Recht auf Leben.",
                T0006: "Rusalka hat gesagt, dass die Eule der Vernunft wieder zurückkehren wird.",
                T0007: "Sprich doch mal mit ihr. Ihr habt alle den selben Wunsch. Frieden herzustellen",
                T0008: "Ihr habt euch gegenseitig. Ihr müsst lernen, miteinander zu sprechen und Konflikte aus dem Weg zu räumen",
                T0009: "um ein friedliches Miteinander zu schaffen.",
            },
            Tsuki: {
                T0000: "*Schluckt* Wir haben die Sonne genossen und uns ein wenig umge...",
                T0001: "Ja, ganz toll... mhmmm",
                T0003: "Ich weiß du hast ein reines Herz. Bitte... Lass uns gehen. Wir vermissen unsere Eltern.",
                T0004: "Komm doch mit uns mit.",
                T0005: "Danke für alles Jorogumo. Wie können wir uns bei dir bedanken?",
            },
            Jorogumo: {
                T0000: "Hallo ihr beiden! Ich habe euch schon überall gesucht!",
                T0021: "Ich hatte Angst, dass ihr euch vielleicht verlaufen habt.",
                T0022: "Was habt ihr erlebt?",
                T0001: "Was ist das?",
                T0020: "...",
                T0004: "IHR HABT DAS AMULETT ERHALTEN???",
                T0005: "IHR KÖNNT MICH NICHT ANLÜGEN WUAHAHAHHA HAA",
                T0006: "ENDLICH!!! SO VIEL MACHT WUHAAHAHAH DIE WERDEN ES NOCH BEREUEN",
                T0007: "ICH AUCH NICHT. MAN DARF HIER NIEMANDEM VERTRAUEN.",
                T0008: "Ihr würdet mich wirklich mitnehmen?",
                T0009: "Hier in unserer Dimension herrscht seit vielen Jahren Ungleichgewicht. Niemand ist glücklich.",
                T0010: "SO EINFACH IST DAS NICHT. ICH BIN NUR EIN INSEKT. DIE ANDEREN TRAUEN MIR NICHT.",
                T0011: "Ich habe noch nie Menschen wie euch gesehen. Ihr müsst die Kinder aus der Prophezeiung sein.",
                T0012: "Ihr habt mir eine neue Sicht auf die Situation geschenkt. Ich habe zu danken. Bitte kehrt zurück in eure Welt. Eure Eltern vermissen euch sicher schon",
                T0013: "HAHHAHAHAH HER MIT DEM AMULETT.",
                T0014: "IHR WERDET FÜR IMMER MEIN SEIN.",
                T0015: "HAHHAHAHAHAHAHA",
            },
        };
        Template.ƒS.Location.show(Template.locations.Felsentag);
        console.log("Background is being displayed");
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0021, true);
        await Template.ƒS.Character.hide(Template.characters.Jorogumo);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0000, true);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0022, true);
        await Template.ƒS.Character.hide(Template.characters.Tsuki);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.standard, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.Character.hide(Template.characters.Jorogumo);
        await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.update(0);
        let Entscheidungsname = {
            option1: "Sage die Wahrheit.",
            option2: "Versuche dich herauszureden.",
        };
        let EntscheidungsnamenElement = await Template.ƒS.Menu.getInput(Entscheidungsname, "auswahl");
        switch (EntscheidungsnamenElement) {
            case Entscheidungsname.option1:
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Taiyō, text.Taiyō.T0002, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition1, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition2, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition3, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0004, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0005, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0003, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition1, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0007, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0003, true);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0004, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition1, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0008, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0004, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition1, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0009, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0007, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition1, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0010, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0005, true);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0008, true);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Taiyō.T0009, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition1, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0011, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0005, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.update(0);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition1, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0012, true);
                Template.ƒS.Location.show(Template.locations.Blackscreen);
                await Template.ƒS.update(0);
                break;
            case Entscheidungsname.option2:
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Tsuki, Template.characters.Tsuki.pose.anxious, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.Speech.tell(Template.characters.Tsuki, text.Tsuki.T0000, true);
                await Template.ƒS.Character.hide(Template.characters.Tsuki);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition1, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0020, true);
                await Template.ƒS.Character.hide(Template.characters.Jorogumo);
                await Template.ƒS.Character.show(Template.characters.Jorogumo, Template.characters.Jorogumo.pose.transition2, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0001, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0004, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0005, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0013, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0014, true);
                await Template.ƒS.Speech.tell(Template.characters.Jorogumo, text.Jorogumo.T0015, true);
                Template.ƒS.Location.show(Template.locations.Blackscreen);
                await Template.ƒS.update(0);
                break;
        }
        Template.ƒS.Sound.fade(Template.sound.Shoreee, 0, 0.8, true);
        //Character verstecken
        Template.ƒS.Character.hideAll();
        //Text verstecken
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
    }
    Template.Szene5 = Szene5;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map