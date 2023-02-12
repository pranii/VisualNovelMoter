namespace NAMESPACENAME {
    export async function Scene1(): ƒS.SceneReturn {
      console.log("FudgeStory Template Scene1 starting");
    
    
      let text = {
        Charactername: {
          T0000: "Beispielsatz",
        },
      };
  
    //Soundfunktion
    //Sound ist angelegt in der Main
      ƒS.Sound.fade(sound.Beispielsound, 0.07, 0.1, true); 
      //Location anzeigen (Bild zeigen)
      await ƒS.Location.show(locations.beispiellocation);
      //Character Anzeigen
      await ƒS.Character.show(characters.beispielcharacter, characters.beispielcharacter.pose.beispielpose, ƒS.positionPercent(15, 100));
      //Warten + Update
      await ƒS.update(1);
      //Speech Funktion
      await ƒS.Speech.tell(characters.beispielcharacter, text.beispielcharacter.T0000);
      ƒS.Sound.play(sound.money, 0.3, false);
      //Animieren (Bild bewegen)
      await ƒS.Character.animate(characters.beispielcharacter, characters.beispielcharacter.pose.normal, /*Animation*/fromCenterToCenter());
      //Verstecken 
      await ƒS.Character.hide(characters.beispielcharacter);
      //Wartefunktion
      await delay();
      //Entscheidung
      let firstDialogueElementOptions = {
        iSayYes: "Anruf annehmen",
        iSayNo: "Anruf ignorieren"
      };
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");

      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iSayYes:
            //Irgendwas kann hier ausgeführt werden
          break;
        case firstDialogueElementOptions.iSayNo:
            //Irgendwas kann hier ausgeführt werden
          break;
      }  
    }
}