namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

 //Transitions
 export let transition = {
  Transitionname: {
    duration: 1,
    alpha: "./Ressources/Logo.png",
    edge: 1,
  },
  Transitionname2: {
    duration: 1,
    alpha: "./Ressources/Logo.png",
    edge: 1,
  }
};

 //Sounds
 export let sound = {
  //music 
  examplemusic: "./Ressources/Audio/Audio_01.wav",
 };

 //Backgrounds
 export let locations = {
  Hintergrund1: {
    name: "Wohnzimmer",
    background: "./Ressources/Background1/Wohnzimmer1.png",
  },
  Hintergrund2: {
    name: "Wohnzimmer2",
    background: "./Ressources/Background1/Wohnzimmer2.png",
  }
};

//Charakters
export let characters = {
  Tsuki: {
    name: "Tsuki",
    origin: ƒS.ORIGIN.BOTTOMLEFT, //Wo soll er auftauchen
    pose: { //Gefühlsbilder?
      standard: "./Ressources/Ressources/Character/Twins",
      eyesonly: "Quelle"
    }
  },
  Taiyō: {
    name: "Taiyō",
  }
},
TaiyōundTsuki: {
  name: "Taiyō und Tsuki",
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

 //Menüfunktionen
 export let gameMenu: ƒS.Menu;

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

//Buttonfunktionen
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
let menu: boolean = false;

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
      case ƒ.KEYBOARD_CODE.I:
        //hier inventar öffnungsfunktion
      console.log("Inventar");
 }
}
 

 console.log(1);
 window.addEventListener("load", start);
 function start(_event: Event): void {
   console.log(2);
  //Menu
  gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

  //Szenen aufrufen bezogen auf die .TS Datei
  let scenes: ƒS.Scenes = [
    { id:"Szenenid",scene: Szene1, name: "Name" },
    //{ scene: Szene2, name: "Szene2" },
  ];
  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
  // start the sequence
  // ƒS.Progress.setData(data);
  ƒS.Progress.go(scenes);

}
}