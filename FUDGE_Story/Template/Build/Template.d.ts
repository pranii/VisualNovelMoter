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
    let sound: {
        examplemusic: string;
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
    };
    let characters: {
        Tsuki: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                eyesonly: string;
            };
        };
        Taiyō: {
            name: string;
        };
    }, TaiyōundTsuki: {
        name: "Taiyō und Tsuki";
    };
    function fromLeftToRight(): ƒS.AnimationDefinition;
    function fromlefterToLeft(): ƒS.AnimationDefinition;
    function fromCenterToCenter(): ƒS.AnimationDefinition;
    function fromCenterToLeft(): ƒS.AnimationDefinition;
    function fromLeftToCenter(): ƒS.AnimationDefinition;
    let dataForSave: {
        points: number;
        gesprochen: {
            marie: boolean;
            james: boolean;
            violet: boolean;
            luna: boolean;
        };
        beispielwert: number;
        beispielbool: boolean;
        evil: number;
        good: number;
        crazy: number;
        calm: number;
    };
    let gameMenu: ƒS.Menu;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    function hndKeyPress(_event: KeyboardEvent): Promise<any>;
}
declare namespace Template {
    function Szene1(): ƒS.SceneReturn;
}
