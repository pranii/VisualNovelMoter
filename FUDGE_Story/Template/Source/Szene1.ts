namespace Template {
  export async function Szene1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1 starting");
    //Gesprochener Text
    let text = {
      Tsuki: {
        T0000: "Ja, das wird witzig! Geh doch schon einmal ins Wohnzimmer, dann besprechen wir, was wir heute unternehmen. Ich komme auch gleich, ich bring uns unsere Gläser mit.",
        T0001: "Gerne. Also. Was machen wir heute? Sollen wir vielleicht mal nachsehen, was unser alter Nachbar Kitoro treibt?",
        T0002: "Gute Idee.",
        T0003: "Stimmt.",
        T0004: "……",
        T0005: " Was soll schon passieren. ",
        T0006: "Ich pack noch kurz unseren Rucksack. Auf leerem Magen kann man schlecht Abenteuer erleben.",
        T0007: "Ja.",
        T0008: "...",
        T0009: "Ich glaube die Musik kommt von dort! Immer mir nach.",
        T0010: "Ich pack noch kurz unseren Rucksack. Auf leerem Magen kann man schlecht Abenteuer erleben.",
      },
      Taiyō: {
        T0000: "So schmeckt Freiheit, Tsuki. Ich freue mich auf den Sommer mit dir. Ich hab Lust auf Abenteuer und Sonnenstrahlen.",
        T0001: "Danke für den Orangensaft.",
        T0003: "Klingt gut! Wir können mit seinem Hund spazieren gehen.",
        T0004: "Die Fabrik ist hier gleich um die Ecke!",
        T0005: "Was sagst du? Gehen wir uns das mal ansehen?",
        T0006: "Hörst du das auch?",
        T0007: "Meinst du?",
        T0008: ". . .",
        T0009: ". . .",
      }
      TaiyōundTsuki: {
        T0000: "AHHHHHHHHHHHH.",
        
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
    //await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.standard, ƒS.positionPercent(50, 100));
    //Update immer durchführen wenn etwas angezeigt oder wieder entfernt wird
    //await ƒS.update(1);



    //Satzbau
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0000, true /*Immer dann false bei Entscheidung die gleich kommt*/);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0001, true /*Immer dann false bei Entscheidung die gleich kommt*/);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0002, true /*Immer dann false bei Entscheidung die gleich kommt*/);
    await ƒS.update(3);


    //Entscheidung
    let Entscheidungsname = {
      option1: "Wähle diese Option",
      option2: "Wähle diese Option"
    };
    let EntscheidungsnamenElement = await ƒS.Menu.getInput(Entscheidungsname, "auswahl");
    switch (EntscheidungsnamenElement) {
      case Entscheidungsname.option1:
        await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0001, true);
        //Animation des Character-Bildes
        await ƒS.Character.animate(characters.Tsuki, characters.Tsuki.pose.standard, /*Animationswahl*/fromCenterToLeft());

        //Character verstecken
        await ƒS.Character.hide(characters.Tsuki);
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