namespace Template {
  export async function Szene4(): ƒS.SceneReturn {
    ƒS.Sound.setMasterVolume(2);

    await ƒS.Sound.fade(sound.Shoreee, 0.07, 0.1, true);
    ƒS.Sound.play(sound.Shoreee, 1, false);
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

    ƒS.Location.show(locations.Forest2);
    console.log("Background is being displayed");
    await ƒS.update(2);

    ƒS.Location.show(locations.Forest1);
    console.log("Background is being displayed");
    await ƒS.update(0);

    await ƒS.Sound.fade(sound.Rusalki, 0.07, 0.1, true);
    ƒS.Sound.play(sound.Rusalki, 1, false);

    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0, 100));
    await ƒS.update(0);
    await ƒS.Character.hide(characters.Rusalka);
    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0, 100));
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0000, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0001, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0003, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0000, true);

    ƒS.Location.show(locations.ShoreShore);
    console.log("Background is being displayed");
    await ƒS.update(0);

    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0006, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0005, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0006, true);

    await ƒS.Character.hide(characters.Tsuki);
    await ƒS.Character.show(characters.Rusalka, characters.Rusalka.pose.standard, ƒS.positionPercent(0, 100));
    await ƒS.update(0);

    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0000, true);

    await ƒS.Character.hide(characters.Rusalka);
    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0, 100));
    await ƒS.update(0);

    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0001, true);

    await ƒS.Character.hide(characters.Tsuki);
    await ƒS.Character.show(characters.Rusalka, characters.Rusalka.pose.standard, ƒS.positionPercent(0, 100));
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0001, true);

    await ƒS.Character.hide(characters.Rusalka);
    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0, 100));
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0002, true);

    await ƒS.Character.hide(characters.Tsuki);
    await ƒS.Character.show(characters.Rusalka, characters.Rusalka.pose.standard, ƒS.positionPercent(0, 100));
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0003, true);
    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0004, true);

    await ƒS.Character.hide(characters.Rusalka);
    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0, 100));
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0003, true);

    await ƒS.Character.hide(characters.Tsuki);
    await ƒS.Character.show(characters.Rusalka, characters.Rusalka.pose.standard, ƒS.positionPercent(0, 100));
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0005, true);
    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0006, true);
    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0007, true);
    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0008, true);
    await ƒS.Speech.tell(characters.Rusalka, text.Rusalka.T0009, true);

    await ƒS.Character.hide(characters.Rusalka);
    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0, 100));
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0004, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0005, true);
   
          // Abschluss der Szene

          await ƒS.Character.hideAll();
          

          ƒS.Location.show(locations.CS2);
          console.log("Background is being displayed");
          await ƒS.update(0);
          await ƒS.update(3);

          ƒS.Sound.fade(sound.ForestGumpy, 0, 0.8, true);
          ƒS.Character.hideAll();
          ƒS.Speech.hide();
          await ƒS.update(1);

ƒS.Sound.fade(sound.Shoreee, 0, 0.8, true);
//Character verstecken


//Text verstecken
ƒS.Speech.hide();
ƒS.update(1);

ƒS.Location.show(locations.Blackscreen); 
await ƒS.update(0);
    }
}

