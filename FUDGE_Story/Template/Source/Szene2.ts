namespace Template {
    export async function Szene2(): ƒS.SceneReturn {

        ƒS.Sound.setMasterVolume(2);

        await ƒS.Sound.fade(sound.examplemusic, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        ƒS.Sound.play(sound.examplemusic, 1, false);
        console.log("audio is being played");


 ƒS.Location.show(locations.Forest1); //Location initialisieren die in Main.ts definiert wurden
    console.log("Background is being displayed");
    await ƒS.update(1);

        let text = {
            Taiyō: {
              T0000: "Wo...Wo sind wir hier?",
              T0001: "... lass uns erstmal nach Hinweisen suchen.",
              T0002: "Wir finden bald raus, wo wir sind. wo sollen wir schon sein, hahaha..-",
              T0003: "Monolog: ich will gar nicht wissen was das ist. wir dürfen dieser Frau nicht das Gefühl geben, dass wir ihr nicht vertrauen.... Warum sind hier überhaupt so viele Spinnenweben?.. und... wer ist sie?",
              T0004: "Hier sieht es sehr gemütlich aus. Danke für deine Gastfreundschaft.",
              T0005: "",
              T0006: "Ich weiß nicht wo wir gelandet sind. Wir sind einem Geräusch gefolgt und jetzt sind wir hier gefangen. Wir wollen nach Hause.",
            },
            
            Tsuki: {
              T0000: "Ich hab Angst. Wo sind wir?",
              T0001: "Danke",
              T0006: "Ich will nach Hause!! Hier ist alles gruselig und ich will nach Hause! Wir haben Sturmfrei und wir haben sonst nie Sturmfrei!!",
            },
            Jorogumo: {
                T0000: "Hallo, ihr beiden! Ihr seht aber niedlich aus!",
                T0001: "Was macht ihr hier? Wo sind eure Eltern? Sollte man so süße kleine Wesen alleine draußen herumlaufen lassen?",
                T0003: "Ach... so ist das also.",
                T0004: "Ihr seht erschöpft aus.",
                T0005: "Kommt mit mir mit. Ruht euch in meinem Gästezimmer aus",
                T0006: "Schlaft jetzt erstmal ein wenig. Wir reden später weiter. Wir finden einen Weg, wie ihr zurück in eure Welt gelangt.",
              },
          };



          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0000, true);   
          await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0000, true);
          await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0001, true);   
          await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0002, true);

          await ƒS.Character.hide(characters.Tsuki);
          await ƒS.update(1);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0000, true);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0001, true);


          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(2);

let Entscheidungsname = {
    option1: "Lasse Taiyō antworten",
    option2: "Lasse Tsuki antworten",
  };
  let EntscheidungsnamenElement = await ƒS.Menu.getInput(Entscheidungsname, "auswahl");
  switch (EntscheidungsnamenElement) {
    case Entscheidungsname.option1:
      await ƒS.Character.hide(characters.Jorogumo);
      await ƒS.update(0);
      await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0,100)); 
    await ƒS.update(0);
      await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0006, true);   
      
      break;
    case Entscheidungsname.option2:
      await ƒS.Character.hide(characters.Jorogumo);
      await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0,100)); 
      await ƒS.update(0);
        await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0006, true);   
   
      break;
    }


    await ƒS.Character.hide(characters.Tsuki);
    await ƒS.update(0);
    await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0003, true);
    await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0004, true);
    await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0005, true);
    await ƒS.Character.hide(characters.Jorogumo);
    await ƒS.update(0);
    
    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0,100)); 
    
    ƒS.Location.show(locations.Jorogumosleepingroom);
    console.log("Background is being displayed");
    await ƒS.update(0);
    
    await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0004, true);   
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0001, true);
    await ƒS.update(1);

    
    await ƒS.Character.hide(characters.Tsuki);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
    await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0006, true);
   

    ƒS.Sound.fade(sound.examplemusic, 0, 0.8, true);
    //Character verstecken
    ƒS.Character.hideAll();

    //Text verstecken
    ƒS.Speech.hide();
    ƒS.update(1);

    ƒS.Location.show(locations.Blackscreen); 
    await ƒS.update(0);
    }
}

