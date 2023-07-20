namespace Template {
    export async function Szene3(): ƒS.SceneReturn {

        ƒS.Sound.setMasterVolume(2);

        await ƒS.Sound.fade(sound.examplemusic, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        ƒS.Sound.play(sound.examplemusic, 1, false);
        console.log("audio is being played");


        ƒS.Location.show(locations.Jorogumolivingroom); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        await ƒS.update(1);

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
          let EntscheidungsnamenElement = await ƒS.Menu.getInput(Entscheidungsname, "auswahl");
          switch (EntscheidungsnamenElement) {
            case Entscheidungsname.option1:
              await ƒS.Character.animate(characters.Taiyō, characters.Taiyō.pose.standard, fromCenterToCenter());
              await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0000, true);   
          
          await ƒS.Character.hide(characters.Tsuki);
          await ƒS.update(1);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);

          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0000, true);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0001, true);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0003, true);
          
          
          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.update(0);
          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(0);

          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0001, true);   
          
          await ƒS.Character.hide(characters.Tsuki);
          await ƒS.update(1);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0004, true);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0005, true);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0006, true);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0007, true);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0008, true);

          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.update(0);
          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(0);

          await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0002, true);   
          await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0003, true);

          await ƒS.Character.hide(characters.Tsuki);
          await ƒS.update(1);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0009, true);
 
              break;
            case Entscheidungsname.option2:
              await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0003, true);

              await ƒS.Character.hide(characters.Tsuki);
              await ƒS.update(1);
              await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
              await ƒS.update(1);
              await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0009, true);
              break;
            }
        

          
    //Sound ausblenden
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

