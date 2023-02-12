namespace NAMESPACENAME {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
  
    console.log("FudgeStory template starting");
  
    //Transitions
    export let transition = {
      name: {
        duration: 1,
        alpha: "Pfad hier eingeben",
        edge: 1,
      },
      name2: {
        duration: 1,
        alpha: "",
        edge: 1,
  
      }
    };
  
    //Sounds
    export let sound = {
      examplemusic: "Pfad examplemusic",
      examplemusic2: "Pfad examplemusic2",
    }; 
    //Backgrounds
    export let locations = {
      Location1: {
        name: "Location - Name",
        background: "Pfad Location",
      },
      Location2: {
        name: "Location2 - Name",
        background: "Pfad Location",
      },
    };
    //Charakter benennen
    //export let data : Hier werden verschiedene Infos gespeichert
    //In diesem Fall: Der Name des Protagonisten
    export let data = {
      protagonist: {
        name: "",//Muss leer bleiben wenn der Spieler den Namen eintippen soll
      },
    };
  
    //Charakters
    export let characters = {
      beispielcharacter: {
        name: "Charakter-Name",
        origin: ƒS.ORIGIN.BOTTOMLEFT,
        pose: {
          standard: "Der Pfad zum Bild der Pose",
        }
      },
    };
    //Animations
    export function fromLeftToRight(): ƒS.AnimationDefinition {
      return {
        start: { translation: ƒS.positionPercent(15, 100) },
        end: { translation: ƒS.positions.bottomright },
        duration: 2,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
      };
    }
    export function fromlefterToLeft(): ƒS.AnimationDefinition {
      return {
        start: { translation: ƒS.positionPercent(75, 100) },
        end: { translation: ƒS.positionPercent(100, 100) },
        duration: 1,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
      };
    }
    export function fromCenterToCenter(): ƒS.AnimationDefinition {
      return {
        start: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.5, 0.5) },
        end: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.5, 0.5) },
        duration: 2,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
      };
    }
    export function fromCenterToLeft(): ƒS.AnimationDefinition {
      return {
        start: { translation: ƒS.positionPercent(40, 80)},
        end: { translation: ƒS.positionPercent(10, 80)},
        duration: 2,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
      };
    }
    export function fromLeftToCenter(): ƒS.AnimationDefinition {
      return {
        start: { translation: ƒS.positionPercent(10, 80)},
        end: { translation: ƒS.positionPercent(40, 80)},
        duration: 2,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
      };
    }
  
    //SaveGame preparation
    export let dataForSave = {
      //Hier Speicherbare Elemente eintragen wie zb. Name oder so
      beispielwert: 0,
      beispielbool: false,
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
  
    //Menüfunktionen
    export let gameMenu: ƒS.Menu;
    //Lautstärke Standard
    let volume: number = 5.0;
  
    //Sound lauter machen
    export function incrementSound(): void {
      if (volume >= 10) return;
      volume += 0.5;
      ƒS.Sound.setMasterVolume(volume);
    }
  
    //Sound leiser machen
    export function decrementSound(): void {
      if (volume <= 0) return;
      volume -= 0.5;
      ƒS.Sound.setMasterVolume(volume);
    }
  
    //Credits anzeigen
    export function showCredits(): void {
      ƒS.Text.addClass("credits");
      ƒS.Text.print(
        "Die Visual Novel wurde mit FudgeStory erstellt." +
        "<br/>" +
        "Von Leonie Schwall" +
        "<br/>" +
        "Die Hintergründe, Charaktere und Items wurden selbst gezeichnet." +
        "<br/>" +
        "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurrde." +
        "<br/>" +
        "Die Soundelemente wurden mit einer Envato Elements Lizenz lizensiert heruntergeladen" +
        "<br/>"
      );
    }
  
    //Buttonfunktionen im Menü
    async function buttonFunctionalities(_option: string): Promise<void> {
      console.log(_option);
      switch (_option) {
        //Speichern
        case inGameMenu.save:
          await ƒS.Progress.save();
          break;
        //Laden
        case inGameMenu.load:
          await ƒS.Progress.load();
          break;
        //Sound lauter
        case inGameMenu.volumeup:
          incrementSound();
          break;
        //Sound leiser
        case inGameMenu.volumedown:
          decrementSound();
          break;
        //Credits
        case inGameMenu.credits:
          showCredits();
          break;
      }
    }
    //Menü standardmäßig an = true. Standardmäßig aus = false
    let menu: boolean = false;
  
    //Delay Funktion (Warten)
    export let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
  
    //Shortcuts fürs Menu
    document.addEventListener("keydown", hndKeyPress);
   export async function hndKeyPress(_event: KeyboardEvent): Promise<any> {
      switch (_event.code) {
        case ƒ.KEYBOARD_CODE.F8:
          console.log("Save");
          await ƒS.Progress.save();
          break;
        case ƒ.KEYBOARD_CODE.F9:
          console.log("Load");
          await ƒS.Progress.load();
          break;
        case ƒ.KEYBOARD_CODE.M:
          if (menu) {
            console.log("Close");
            gameMenu.close();
            menu = false;
          } else {
            console.log("Open");
            gameMenu.open();
            menu = true;
          }
          break;
      }
    }
 //Items + Inventar fehlt hier weil habs selber nicht
  
    console.log(1);
    window.addEventListener("load", start);
    function start(_event: Event): void {
      console.log(2);

      //Menu
      gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
  
      //Szenen aufrufen bezogen auf die .TS Datei
      let scenes: ƒS.Scenes = [
        { id:"beispielszene1",scene: Szene1, name: "Szene1" },
        { id:"beispielszene2",scene: Szene1, name: "Szene1" },

      ];
      let uiElement: HTMLElement = document.querySelector("[type=interface]");
      dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
      // start the sequence
      // ƒS.Progress.setData(data);
      ƒS.Progress.go(scenes);
  
    
    }
  }