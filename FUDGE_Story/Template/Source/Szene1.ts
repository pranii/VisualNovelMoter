namespace Template {
  export async function Szene1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1 starting");
    //Gesprochener Text
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

 
    ƒS.Sound.setMasterVolume(2);

    
    //Sound einspielen
    await ƒS.Sound.fade(sound.examplemusic, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
    ƒS.Sound.play(sound.examplemusic, 1, false);
    console.log("audio is being played");

    //fade ist langsam einfaden, play ist direkt abspielen
 

  
    ƒS.Location.show(locations.Hintergrund3); 
    console.log("Background is being displayed");
    await ƒS.update(1);


   
   await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.standard, ƒS.positionPercent(0,100)); 

   
   await ƒS.update(1);



    //Satzbau
    await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0000, true);   
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0000, true);
    await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0001, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0001, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0002, true);
    await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0003, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0003, true);
    await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0004, true);

    ƒS.Inventory.add(items.Apfel);
    console.log(items);

  await ƒS.Character.hide(characters.Tsuki);
  await ƒS.update(2);

  ƒS.Location.show(locations.Hintergrund5); 
  console.log("Background is being displayed");
  await ƒS.update(1);
  
  
  await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.standard, ƒS.positionPercent(0,100)); 
  await ƒS.update(3);
    
 



    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0005, true);
    await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0005, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0006, true);
    await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0006, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0007, true);
    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0008, true);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0009, true);
 
    await ƒS.Character.hide(characters.Tsuki);
    ƒS.Location.show(locations.Blackscreen); 
    await ƒS.update(0);
    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.transiotions, ƒS.positionPercent(0,100)); 
    await ƒS.update(3);

    //Sound ausblenden
    ƒS.Sound.fade(sound.examplemusic, 0, 0.8, true);
    //Character verstecken
    ƒS.Character.hideAll();

    //Text verstecken
    ƒS.Speech.hide();
    ƒS.update(1);

    //Bestimmte Szene spielen, in Abhängigkeit von der Entscheidung des Spielers
    //HINTERGRUND WEISS + TRANSITION BILD
  }
}