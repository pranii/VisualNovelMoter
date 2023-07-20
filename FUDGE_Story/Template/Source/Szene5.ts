namespace Template {
    export async function Szene5(): ƒS.SceneReturn {

        ƒS.Sound.setMasterVolume(2);

        await ƒS.Sound.fade(sound.examplemusic, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        ƒS.Sound.play(sound.examplemusic, 1, false);
        console.log("audio is being played");


 ƒS.Location.show(locations.Hintergrund3); //Bild + Text + daraufhin Hintergrund
    console.log("Background is being displayed");
    await ƒS.update(1);

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

//Entscheidung

                T0008: "Ihr würdet mich wirklich mitnehmen?",
                T0009: "Hier in unserer Dimension herrscht seit vielen Jahren ungleichgewicht. Niemand ist glücklich.",
                T0010: "SO EINFACH IST DAS NICHT. ICH BIN NUR EIN INSEKT. DIE ANDEREN TRAUEN MIR NICHT.",
                T0011: "Ich habe noch nie Menschen wie euch gesehen. Ihr müsst die Kinder aus der Prophezeiung sein.",
                T0012: "Ihr habt mir eine neue Sicht auf die Situation geschenkt. Ich habe zu danken. Bitte kehrt zurück in eure Welt. Eure Eltern vermissen euch sicher schon",

//schlechtes Ende
                T0013: "HAHHAHAHAH HER MIT DEM AMULETT.",
                T0014: "IHR WERDET FÜR IMMER MEIN SEIN.",
                T0015: "HAHHAHAHAHAHAHA",
                

              },
          };
        


ƒS.Location.show(locations.Forest2); 
    console.log("Background is being displayed");
    await ƒS.update(1);

    await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
    await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0001, true);
   
    ƒS.Location.show(locations.Felsentag); 
    console.log("Background is being displayed");
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0021, true);


    await ƒS.Character.hide(characters.Jorogumo);
    await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0,100)); 
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0000, true);


    await ƒS.Character.hide(characters.Tsuki);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 
    await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0022, true);



    // await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0000, true);  
    // await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0005, true); 
          // await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0009, true);


    await ƒS.Character.hide(characters.Tsuki);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.standard, ƒS.positionPercent(0,100)); 


      await ƒS.Character.hide(characters.Jorogumo);
      await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.friendly, ƒS.positionPercent(0,100)); 
      await ƒS.update(0);
  


      let Entscheidungsname = {
        option1: "Sage die Wahrheit.",
        option2: "Versuche dich herauszureden.",
      };
      let EntscheidungsnamenElement = await ƒS.Menu.getInput(Entscheidungsname, "auswahl");
      switch (EntscheidungsnamenElement) {
        case Entscheidungsname.option1:

          await ƒS.Character.hide(characters.Tsuki);
          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.update(0);
          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100));
          
          
        await ƒS.update(0);
          await ƒS.Speech.tell(characters.Taiyō, text.Taiyō.T0002, true);   
          
      
          await ƒS.Character.hide(characters.Taiyō);
          await ƒS.Character.hide(characters.Tsuki);
          await ƒS.update(0);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition1, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);
          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.update(0);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition2, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);
          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.update(0);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition3, ƒS.positionPercent(0,100)); 
          await ƒS.update(1);


          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0004, true);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0005, true);

          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100)); 
          await ƒS.update(0);
          await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0003, true);  


          await ƒS.Character.hide(characters.Tsuki);
          await ƒS.update(0);
          await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition1, ƒS.positionPercent(0,100)); 
          await ƒS.update(0);
          await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0007, true);


          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100)); 
          await ƒS.update(0);
            await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0003, true);   
            await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0004, true);

            await ƒS.Character.hide(characters.Tsuki);
            await ƒS.update(0);
            await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition1, ƒS.positionPercent(0,100)); 
            await ƒS.update(0);
            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0008, true);


          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100)); 
          await ƒS.update(0);
            await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0004, true);   
           
            await ƒS.Character.hide(characters.Tsuki);
            await ƒS.update(0);
            await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition1, ƒS.positionPercent(0,100)); 
            await ƒS.update(0);
            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0009, true);


            await ƒS.Character.hide(characters.Jorogumo);
            await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100)); 
            await ƒS.update(0);
              await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0007, true);   

              await ƒS.Character.hide(characters.Tsuki);
              await ƒS.update(0);
              await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition1, ƒS.positionPercent(0,100)); 
              await ƒS.update(0);
              await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0010, true);

              await ƒS.Character.hide(characters.Jorogumo);
              await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100)); 
              await ƒS.update(0);
                await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0005, true);
                await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0008, true);
                await ƒS.Speech.tell(characters.Tsuki, text.Taiyō.T0009, true);



                await ƒS.Character.hide(characters.Tsuki);
              await ƒS.update(0);
              await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition1, ƒS.positionPercent(0,100)); 
              await ƒS.update(0);
              await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0011, true);


              await ƒS.Character.hide(characters.Jorogumo);
              await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100)); 
              await ƒS.update(0);
                await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0005, true);

                await ƒS.Character.hide(characters.Tsuki);
                await ƒS.update(0);
                await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition1, ƒS.positionPercent(0,100)); 
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0012, true);
               
                ƒS.Location.show(locations.Blackscreen); 
                await ƒS.update(0);
              
          break;
        case Entscheidungsname.option2:
          await ƒS.Character.hide(characters.Jorogumo);
          await ƒS.Character.show(characters.Tsuki, characters.Tsuki.pose.anxious, ƒS.positionPercent(0,100)); 
          await ƒS.Character.hide(characters.Tsuki);
          await ƒS.update(0);
            await ƒS.Speech.tell(characters.Tsuki, text.Tsuki.T0000, true);   
            

            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0020, true);
            await ƒS.update(1);
            await ƒS.Character.hide(characters.Tsuki);
            await ƒS.update(2);
            await ƒS.Character.hide(characters.Taiyō);
            await ƒS.Character.hide(characters.Tsuki);
            await ƒS.update(0);
            await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition1, ƒS.positionPercent(0,100)); 
            await ƒS.update(1);
            await ƒS.Character.hide(characters.Jorogumo);
            await ƒS.update(0);
            await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition2, ƒS.positionPercent(0,100)); 
            await ƒS.update(1);
            await ƒS.Character.hide(characters.Jorogumo);
            await ƒS.update(0);
            await ƒS.Character.show(characters.Jorogumo, characters.Jorogumo.pose.transition3, ƒS.positionPercent(0,100)); 
            await ƒS.update(1);
            
            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0001, true);
            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0004, true);
            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0005, true);
            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0013, true);
            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0014, true);
            await ƒS.Speech.tell(characters.Jorogumo, text.Jorogumo.T0015, true);
            
            ƒS.Location.show(locations.Blackscreen); 
            await ƒS.update(0);
          break;
        }


ƒS.Sound.fade(sound.examplemusic, 0, 0.8, true);
//Character verstecken
ƒS.Character.hideAll();

//Text verstecken
ƒS.Speech.hide();
ƒS.update(1);


    }
}

