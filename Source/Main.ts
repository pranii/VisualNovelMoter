namespace Moter {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory Moter starting");

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
    case inGameMenu.inventar:
        await ƒS.Inventory.open(); 
        await ƒS.update();
        console.log("inventory open");
        break;
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
        await ƒS.Inventory.open(); 

        await ƒS.update();
        //hier inventar öffnungsfunktion
      console.log("A");
 }
}
 


export let items = {
  Apfel: {
    name: "Apfel",
    description: " saftiger Apfel.",
    image: "./Ressources/Images/Items/Apfel.png",
    static: true,
    exist: true,
  }
  }

 //Sounds
 export let sound = {
  //music 
  examplemusic: "./Ressources/Audio/Audio_01.wav",
  Shoreee: "./Ressources/Audio/shore.wav",
  ForestGumpy: "./Ressources/Audio/Forest.wav",
  Rusalki: "./Ressources/Audio/Choir.wav",
 };

 //Backgrounds
 export let locations = {
  Hintergrund1: {
    name: "Balkon",
    background: "./Ressources/Background1/Balkon.png",
  },
  Hintergrund2: {
    name: "Wohnzimmer",
    background: "./Ressources/Background1/Wohnzimmer1.png",
  },
  Hintergrund3: {
    name: "Wohnzimmer2",
    background: "./Ressources/Background1/Wohnzimmer2.png",
  },
  Hintergrund4: {
    name: "Nachrichten",
    background: "./Ressources/Background1/Nachrichten.png",
  },
  Hintergrund5: {
    name: "LP1",
    background: "./Ressources/Background1/LostPlace1.png",
  },
  Hintergrund6: {
    name: "LP2",
    background: "./Ressources/Background1/LostPlace2.png",
  },


  Forest1: {
    name: "Forest1",
    background: "./Ressources/Background1/World2/Forest.png",
  },

  Forest2: {
    name: "Forest2",
    background: "FUDGE_Story/Moter/Ressources/Background1/World2/ForestForest.png",
  },

  Jorogumolivingroom: {
    name: "Jorogumolivingroom",
    background: "./Ressources/Background1/Jorogumoliving.png",
  },

  Jorogumosleepingroom: {
    name: "JorogumoSleeping",
    background: "./Ressources/Background1/Jorogumosleep.png",
  },

  CS1: {
    name: "JorogumoCS",
    background: "./Ressources/Background1/CS1.png",
  },

  CS2: {
    name: "RusalkaCS",
    background: "./Ressources/Background1/CS2.png",
  },

  RusalkaShore: {
    name: "RusalkaShore",
    background: "./Ressources/Background1/World2/Shore.png",
  },
  ShoreShore: {
    name: "ShoreShore",
    background: "./Ressources/Background1/World2/ShoreShore.png",
  },

  Felsentag: {
    name: "FelsenTag",
    background: "./Ressources/Background1/World2/Felsen.png",
  },

  FelsenNacht: {
    name: "LP2",
    background: "./Ressources/Background1/World2/Ende.png",
  },

  Blackscreen: {
    name: "Blackscreen",
    background: "./Ressources/Background1/World2/33.png",
  }
};






//Charakters
export let characters = {
  Tsuki: {
    name: "Tsuki",
    origin: ƒS.ORIGIN.BOTTOMLEFT, //Wo soll er auftauchen
    pose: { //Gefühlsbilder?
      standard: "./Ressources/Character/Twins/Tsuki.png",
      anxious: "./Ressources/Character/Twins/twinsanxious.png",
      friendly: "./Ressources/Character/Twins/TaiyoTsukifriendly.png",
      determined: "./Ressources/Character/Twins/determined.png",
      transiotions: "./Ressources/Character/Twins/Transition.png"
    }
    
  },

  Taiyō: {
    name: "Taiyō",
    origin: ƒS.ORIGIN.BOTTOMLEFT, 
    pose: { 
      standard: "./Ressources/Character/Twins/Tayio.png",
      eyesonly: "Quelle"
    }
  },

  Jorogumo: {
    name: "Jorogumo",
    origin: ƒS.ORIGIN.BOTTOMLEFT, 
    pose: { 
      standard: "./Ressources/Character/Jorugomo/Jorogumo1.png",
      jorogumo1: "./Ressources/Character/Jorugomo/Jorogumo2.png",
      ending: "./Ressources/Character/Jorugomo/Jorogumo ending.png",
      transition1: "./Ressources/Character/Jorugomo/Jorogumotrs20.png",
      transition2: "./Ressources/Character/Jorugomo/Jorogumotrs21.png",
      transition3: "./Ressources/Character/Jorugomo/Jorogumotrs22.png",
    }
  },
    Rusalka: {
      name: "Rusalka",
      origin: ƒS.ORIGIN.BOTTOMLEFT, 
      pose: { 
        standard: "./Ressources/Character/Rusalka/Rusalka.png",
        eyesonly: "Quelle"
      }
  }


  
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
    Rusalka: false,
    Jorogumo: false,
    Taiyo: false,
    Tsuki: false
  },
  beispielwert: 0,
  beispielbool: false,
  evil: 0,
  good: 0,

};


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
    "Von Pranvera Pelaj" +
    "<br/>" +
    "Die Hintergründe, Charaktere und Items wurden mit Hilfe von MidJourney und DALL-E generiert." +
    "<br/>" +
    "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurde." +
    "<br/>" +
    "Die Soundelemente wurden mit einer Motion Array Lizenz lizensiert heruntergeladen." +
    "<br/>"
  );
}



 console.log(1);
 window.addEventListener("load", start);
 function start(_event: Event): void {
   console.log(2);
  //Menu
  gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

  //Szenen aufrufen bezogen auf die .TS Datei  // SZENE HINZUFP
  let scenes: ƒS.Scenes = [
 { id:"Szenenid",scene: Szene1, name: "Name" },
  {id:"Szene2",scene: Szene2, name: "Szene2" },
  {id:"Szene3",scene: Szene3, name: "Szene3" },
  {id:"Szene4",scene: Szene4, name: "Szene4" },
    {id:"Szene5",scene: Szene5, name: "Szene5" },
    
  ];
  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
  
  ƒS.Progress.go(scenes);

}
}