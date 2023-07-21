declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        Transitionname: {
            duration: number;
            alpha: string;
            edge: number;
        };
        Transitionname2: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let gameMenu: ƒS.Menu;
    function hndKeyPress(_event: KeyboardEvent): Promise<any>;
    let items: {
        Apfel: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            exist: boolean;
        };
    };
    let sound: {
        examplemusic: string;
        Shoreee: string;
        ForestGumpy: string;
        Rusalki: string;
    };
    let locations: {
        Hintergrund1: {
            name: string;
            background: string;
        };
        Hintergrund2: {
            name: string;
            background: string;
        };
        Hintergrund3: {
            name: string;
            background: string;
        };
        Hintergrund4: {
            name: string;
            background: string;
        };
        Hintergrund5: {
            name: string;
            background: string;
        };
        Hintergrund6: {
            name: string;
            background: string;
        };
        Forest1: {
            name: string;
            background: string;
        };
        Forest2: {
            name: string;
            background: string;
        };
        Jorogumolivingroom: {
            name: string;
            background: string;
        };
        Jorogumosleepingroom: {
            name: string;
            background: string;
        };
        CS1: {
            name: string;
            background: string;
        };
        CS2: {
            name: string;
            background: string;
        };
        RusalkaShore: {
            name: string;
            background: string;
        };
        ShoreShore: {
            name: string;
            background: string;
        };
        Felsentag: {
            name: string;
            background: string;
        };
        FelsenNacht: {
            name: string;
            background: string;
        };
        Blackscreen: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Tsuki: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                anxious: string;
                friendly: string;
                determined: string;
                transiotions: string;
            };
        };
        Taiyō: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                eyesonly: string;
            };
        };
        Jorogumo: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                jorogumo1: string;
                ending: string;
                transition1: string;
                transition2: string;
                transition3: string;
            };
        };
        Rusalka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                eyesonly: string;
            };
        };
    };
    function fromLeftToRight(): ƒS.AnimationDefinition;
    function fromlefterToLeft(): ƒS.AnimationDefinition;
    function fromCenterToCenter(): ƒS.AnimationDefinition;
    function fromCenterToLeft(): ƒS.AnimationDefinition;
    function fromLeftToCenter(): ƒS.AnimationDefinition;
    let dataForSave: {
        points: number;
        gesprochen: {
            Rusalka: boolean;
            Jorogumo: boolean;
            Taiyo: boolean;
            Tsuki: boolean;
        };
        beispielwert: number;
        beispielbool: boolean;
        evil: number;
        good: number;
    };
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
}
declare namespace Template {
    function Szene3(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene4(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene5(): ƒS.SceneReturn;
}
