namespace Template {
  export async function Szene1(): ƒS.SceneReturn {
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
    ƒS.Sound.setMasterVolume(8);

    //Sound einspielen
    await ƒS.Sound.fade(sound.examplemusic, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
    console.log("audio is being played");

    //fade ist langsam einfaden, play ist direkt abspielen
 

    //Anzeigen der Location, also des Backgrounds
    ƒS.Location.show(locations.Hintergrund1); //Location initialisieren die in Main.ts definiert wurden
    console.log("Background is being displayed");
    await ƒS.update(1);

    //Charakter anzeigen
    //await ƒS.Character.show(characters.charactername, characters.charactername.pose.standard, ƒS.positionPercent(50, 100));
    //Update immer durchführen wenn etwas angezeigt oder wieder entfernt wird
    //await ƒS.update(1);

    //Satzbau
    await ƒS.Speech.tell(characters.charactername, text.charactername.T0000, true /*Immer dann false bei Entscheidung die gleich kommt*/);
    await ƒS.Speech.tell(characters.charactername, text.charactername.T0001, true /*Immer dann false bei Entscheidung die gleich kommt*/);
    await ƒS.Speech.tell(characters.charactername, text.charactername.T0002, true /*Immer dann false bei Entscheidung die gleich kommt*/);
    await ƒS.update(3);


    //Entscheidung
    let Entscheidungsname = {
      option1: "Wähle diese Option",
      option2: "Wähle diese Option"
    };
    let EntscheidungsnamenElement = await ƒS.Menu.getInput(Entscheidungsname, "auswahl");
    switch (EntscheidungsnamenElement) {
      case Entscheidungsname.option1:
        await ƒS.Speech.tell(characters.anderercharacter, text.anderercharacter.T0001, true);
        //Animation des Character-Bildes
        await ƒS.Character.animate(characters.charactername, characters.charactername.pose.standard, /*Animationswahl*/fromCenterToLeft());

        //Character verstecken
        await ƒS.Character.hide(characters.charactername);
        await ƒS.update(2);

        //Switch case beenden
        break;

      case Entscheidungsname.option2:
        //Hier steht dann der Code, der ausgeführt wird, sobald du die option2 geklickt hast
        break;
    }

    await ƒS.update(3);

    //Ende der Szene

    //Sound ausblenden
    ƒS.Sound.fade(sound.examplemusic, 0, 0.8, true);
    //Character verstecken
    ƒS.Character.hideAll();

    //Text verstecken
    ƒS.Speech.hide();
    ƒS.update(1);

    //Bestimmte Szene spielen, in Abhängigkeit von der Entscheidung des Spielers
    //return "SZENENNAME"; - SZENE ABSPIELEN DIE HEISST : SZENENNAME.ts
  }
}