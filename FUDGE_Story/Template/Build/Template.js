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
            alpha: "Quelle",
            edge: 1,
        },
        Transitionname2: {
            duration: 1,
            alpha: "Quelle",
            edge: 1,
        }
    };
    //Sounds
    Template.sound = {
        //music 
        examplemusic: "./Ressources/Audio/Audio_01.wav",
    };
    //Backgrounds
    Template.locations = {
        Hintergrund1: {
            name: "BG?01",
            background: "./Ressources/BG_Images/BG_01.png",
        },
        Hintergrund2: {
            name: "Bezeichnung",
            background: "Quelle",
        }
    };
    //Charakters
    Template.characters = {
        charactername: {
            name: "SeinName",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: "Quelle",
                eyesonly: "Quelle"
            }
        },
        anderercharacter: {
            name: "SeinName",
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
            marie: false,
            james: false,
            violet: false,
            luna: false
        },
        beispielwert: 0,
        beispielbool: false,
        evil: 0,
        good: 0,
        crazy: 0,
        calm: 0,
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
            "Von Leonie Schwall" +
            "<br/>" +
            "Die Hintergründe, Charaktere und Items wurden selbst gezeichnet." +
            "<br/>" +
            "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurrde." +
            "<br/>" +
            "Die Soundelemente wurden mit einer Envato Elements Lizenz lizensiert heruntergeladen" +
            "<br/>");
    }
    Template.showCredits = showCredits;
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
            // case inGameMenu.inventar:
            //     const selectedItems:string[] = await ƒS.Inventory.open();
            //     if(selectedItems && selectedItems.length > 0){
            //       selectedItems.forEach((s)=>{
            //         Object.keys(items).forEach((i)=>{
            //           const item = items[i];
            //           if(item.name === s){
            //             ƒS.Inventory.add(item);
            //           }
            //         })
            //       })
            //     }
            //     break;
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
                //hier inventar öffnungsfunktion
                console.log("Inventar");
        }
    }
    Template.hndKeyPress = hndKeyPress;
    console.log(1);
    window.addEventListener("load", start);
    function start(_event) {
        console.log(2);
        //Menu
        Template.gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenen aufrufen bezogen auf die .TS Datei
        let scenes = [
            { id: "Szenenid", scene: Template.Szene1, name: "Name" },
            //{ scene: Szene2, name: "Szene2" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        // ƒS.Progress.setData(data);
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene1() {
        console.log("FudgeStory Template Scene1 starting");
        //Gesprochener Text
        let text = {
            charactername: {
                T0000: "Tschs ich bin Vasi",
                T0001: "Was geht Brani?",
                T0002: "Inshallah",
            },
            anderercharacter: {
                T0000: ". . .",
                T0001: ". . .",
                T0003: ". . .",
            }
        };
        //Szenenablauf
        //Sound Lautstärke einstellen
        Template.ƒS.Sound.setMasterVolume(8);
        //Sound einspielen
        await Template.ƒS.Sound.fade(Template.sound.examplemusic, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        console.log("audio is being played");
        //fade ist langsam einfaden, play ist direkt abspielen
        //Anzeigen der Location, also des Backgrounds
        Template.ƒS.Location.show(Template.locations.Hintergrund1); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        await Template.ƒS.update(1);
        //Charakter anzeigen
        //await ƒS.Character.show(characters.charactername, characters.charactername.pose.standard, ƒS.positionPercent(50, 100));
        //Update immer durchführen wenn etwas angezeigt oder wieder entfernt wird
        //await ƒS.update(1);
        //Satzbau
        await Template.ƒS.Speech.tell(Template.characters.charactername, text.charactername.T0000, true /*Immer dann false bei Entscheidung die gleich kommt*/);
        await Template.ƒS.Speech.tell(Template.characters.charactername, text.charactername.T0001, true /*Immer dann false bei Entscheidung die gleich kommt*/);
        await Template.ƒS.Speech.tell(Template.characters.charactername, text.charactername.T0002, true /*Immer dann false bei Entscheidung die gleich kommt*/);
        await Template.ƒS.update(3);
        //Entscheidung
        let Entscheidungsname = {
            option1: "Wähle diese Option",
            option2: "Wähle diese Option"
        };
        let EntscheidungsnamenElement = await Template.ƒS.Menu.getInput(Entscheidungsname, "auswahl");
        switch (EntscheidungsnamenElement) {
            case Entscheidungsname.option1:
                await Template.ƒS.Speech.tell(Template.characters.anderercharacter, text.anderercharacter.T0001, true);
                //Animation des Character-Bildes
                await Template.ƒS.Character.animate(Template.characters.charactername, Template.characters.charactername.pose.standard, /*Animationswahl*/ Template.fromCenterToLeft());
                //Character verstecken
                await Template.ƒS.Character.hide(Template.characters.charactername);
                await Template.ƒS.update(2);
                //Switch case beenden
                break;
            case Entscheidungsname.option2:
                //Hier steht dann der Code, der ausgeführt wird, sobald du die option2 geklickt hast
                break;
        }
        await Template.ƒS.update(3);
        //Ende der Szene
        //Sound ausblenden
        Template.ƒS.Sound.fade(Template.sound.examplemusic, 0, 0.8, true);
        //Character verstecken
        Template.ƒS.Character.hideAll();
        //Text verstecken
        Template.ƒS.Speech.hide();
        Template.ƒS.update(1);
        //Bestimmte Szene spielen, in Abhängigkeit von der Entscheidung des Spielers
        //return "SZENENNAME"; - SZENE ABSPIELEN DIE HEISST : SZENENNAME.ts
    }
    Template.Szene1 = Szene1;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map