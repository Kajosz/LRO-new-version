export type assetType = {
    x: number,
    y: number,
    size? : number
    graphicUrl: string,
    img?: HTMLImageElement,
    toBeRedrawn? :boolean,
    resized? :boolean,
    mouseOnMap? :boolean,
    sourceWidth?: number,
    sourceHeight?: number,
    currentGraphicUrl?: string,
    isVisible? : boolean,
    isDrawn? : boolean,
    name: string

}

export type characterType = assetType & {
    aimedX?: number,
    aimedY?: number,
    id: string,
    active?: boolean,
    speed?: number
}

export type mapType = assetType & {
    visibleWidth: number,
    visibleHeight: number,
    canvas: CanvasRenderingContext2D,
    rawCanvas: HTMLCanvasElement,
    assets : characterType[],
    pressedKeys: any,
    presets: mapPresets,
    mouseX :number,
    mouseY: number,
    onCanvasX: number,
    onCanvasY: number,
    borderVisible? : boolean,
    onCanvasWidth: number,
    onCanvasHeight: number,
    sourceX: number,
    sourceY: number,
    rightBorderVisible? : boolean,
    bottomBorderVisible? : boolean,
    borderImg?: HTMLImageElement,
    borderImgReady?: boolean,
    frameDrawing? : boolean,
    activeSide: number,
    controllFunction: Function,
    activeAssetId?: string,
    absoluteMouseX: number,
    absoluteMouseY: number,
    miniMapWidth?: number,
    miniMapHeight?: number,
    miniMapBorderX?: number,
    miniMapBorderY?: number,
    miniMapX?: number,
    miniMapY?: number,
    miniMapPointerWidth?: number,
    miniMapPointerHeight?: number,
    miniMapPointerX? :number,
    miniMapPointerY? :number,
    miniMapAimedX?: number,
    miniMapAimedY?: number,
    miniMapCurrentX?: number,
    miniMapCurrentY?: number,
    mouseOnMiniMap?: boolean,
    measuring: boolean,
    measurePoint: {x: number, y: number},
    distance: {meters: string, feets:string},
    measureFont: string,
    measureLineWidth: number,
    measureRadius: number,
    showMiniMap? :boolean,
    allowHideMiniMap? :boolean,
    placeholderFont: string,
    distanceOverflowing? :boolean,

}

export function getDefaultMap(canvasContext: CanvasRenderingContext2D, canvas: HTMLCanvasElement, presets:mapPresets, externalFunction: Function){
    const returned : mapType = {

        canvas: canvasContext,
        rawCanvas: canvas,
        assets: [],
        x: 0,
        y: 0,
        sourceWidth: 0,
        sourceHeight: 0,
        visibleWidth: 0,
        visibleHeight: 0,
        graphicUrl: 'https://s13.gifyu.com/images/S0Irz.jpg',
        currentGraphicUrl: '',
        toBeRedrawn: true,
        presets: presets,
        mouseX :0,
        mouseY :0,
        pressedKeys: {},
        onCanvasX: 0,
        onCanvasY: 0,
        onCanvasWidth: 0,
        onCanvasHeight: 0,
        sourceX: 0,
        sourceY: 0,
        activeSide: 0,
        controllFunction: externalFunction,
        absoluteMouseX: 0,
        absoluteMouseY: 0,
        measuring: false,
        measurePoint: {x:0, y:0},
        distance: {meters:'', feets:''},
        measureFont: '30px Laila',
        measureLineWidth: 5,
        measureRadius: 0,
        showMiniMap: true,
        allowHideMiniMap: true,
        placeholderFont: '30px Fondamento',
        name: 'placeholder-name'
        
    }

    return returned;
}

export type mapPresets = {
    ASSET_SIZE : number,
    PRIMARY_SCROLL_KEY : string,
    SECONDARY_SCROLL_KEY : string,
    DISABLE_MINI_MAP_KEY : string,     
    START_MEASURE_KEY: string, //lowerCase!!!
    STOP_MEASURE_KEY: string,   //lowerCase!!!
    MINI_MAP_HEIGHT_PERCENT?: number,
    MINI_MAP_WIDTH_PERCENT?: number,
    MAP_WIDTH_PERCENT: number,
    MAP_HEIGHT_PERCENT: number,
    MAP_BORDER_LENGTH: number,
    SCROLLING_SPEED: number,
    SCROLLING_BOOSTER: number,
    SCROLL_MOUSE_POSITION_THRESHOLD: number //0-1,
    POSITION_X_ON_CANVAS: number,
    POSITION_Y_ON_CANVAS: number,
    MAP_BORDER_COLOR: string,
    BORDER_GRAPHIC_URL: string,
    ASSET_STEP_SIZE: number,
    ASSET_ACTIVE_STROKE_STYLE: string,
    ASSET_ACTIVE_LINE_WIDTH: number,
    ASSET_ACTIVE_SHADOW_FILL_STYLE: string,
    PLACEHOLDER_TEXT : string,
    DISTANCE_TEXT_SIZE_PERCENT: number,
    PLAHOLDER_FILL_STYLE : string,
    PLACEHOLDER_TEXT_ALIGNMENT: 'start' | 'end' | 'center' | 'left' | 'right',
    PLACEHOLDER_FONT: string,
    PLACEHOLDER_TEXT_SIZE_PERCENT: number,
    MINI_MAP_RIGHT_MARGIN_PERCENT?: number,
    MINI_MAP_BOTTOM_MARGIN_PERCENT?: number,
    MINI_MAP_BORDER_THICKNESS?: number,
    MINI_MAP_BORDER_STROKE_STYLE? :string,
    MINI_MAP_POINTER_FILL_STYLE? : string,
    MINI_MAP_PREVIEW_STROKE_STYLE? :string,
    MINI_MAP_PREVIEW_LINE_WIDTH?: number,
    FEET_DISTANCE_MULTIPLIER: number,
    DISTANCE_FONT: string,
    DISTANCE_FONT_SIZE_PERCENT: number,
    DISTANCE_LINE_COLOR: string,
    DISTANCE_CIRCLE_FILL_STYLE: string,
    DISTANCE_LINE_WIDTH_PERCENT: number,
    DISTANCE_FONT_FILL_STYLE: string,
    DISTANCE_OVERFLOWING_FONT_FILL_STYLE: string,
    DISTANCE_FONT_STROKE_STYLE: string,
    DISTANCE_OVERFLOWING_FONT_STROKE_STYLE: string,
    MINI_MAP_HIDE_FILTER_TIME?: number
}

export function getMainMapPresets(){
    const returned : mapPresets = {
        ASSET_SIZE : 50,
        ASSET_STEP_SIZE: 10,
        PRIMARY_SCROLL_KEY : 'Shift',
        SECONDARY_SCROLL_KEY : 'Alt',
        DISABLE_MINI_MAP_KEY : 'Control',
        START_MEASURE_KEY: 'r',
        STOP_MEASURE_KEY: 't',
        MINI_MAP_HEIGHT_PERCENT: 20,
        MINI_MAP_WIDTH_PERCENT: 20,
        MAP_WIDTH_PERCENT: 55,
        MAP_HEIGHT_PERCENT: 60,
        MAP_BORDER_LENGTH: 100,
        SCROLLING_SPEED: 20,
        SCROLLING_BOOSTER: 30,
        SCROLL_MOUSE_POSITION_THRESHOLD: 0.1,
        POSITION_X_ON_CANVAS: 0,
        POSITION_Y_ON_CANVAS: 0,
        MAP_BORDER_COLOR: 'gray',
        BORDER_GRAPHIC_URL: '',
        ASSET_ACTIVE_STROKE_STYLE: 'blue',
        ASSET_ACTIVE_LINE_WIDTH: 3,
        ASSET_ACTIVE_SHADOW_FILL_STYLE: 'gray',
        PLACEHOLDER_TEXT: 'Map is loading...',
        PLAHOLDER_FILL_STYLE: 'white',
        PLACEHOLDER_TEXT_SIZE_PERCENT: 10,
        PLACEHOLDER_TEXT_ALIGNMENT: 'center',
        PLACEHOLDER_FONT: 'Fondamento',
        DISTANCE_TEXT_SIZE_PERCENT: 5,
        MINI_MAP_RIGHT_MARGIN_PERCENT: 5,
        MINI_MAP_BOTTOM_MARGIN_PERCENT: 5,
        MINI_MAP_BORDER_THICKNESS: 4,
        MINI_MAP_BORDER_STROKE_STYLE: 'black',
        MINI_MAP_POINTER_FILL_STYLE: 'gray',
        MINI_MAP_PREVIEW_STROKE_STYLE: 'red',
        MINI_MAP_PREVIEW_LINE_WIDTH: 2,
        FEET_DISTANCE_MULTIPLIER: 5,
        DISTANCE_FONT: 'Laila',
        DISTANCE_FONT_SIZE_PERCENT: 3,
        DISTANCE_LINE_COLOR: 'white',
        DISTANCE_CIRCLE_FILL_STYLE: 'rgba(80, 80, 80, 0.5)',
        DISTANCE_LINE_WIDTH_PERCENT: 10,
        DISTANCE_FONT_FILL_STYLE: 'white',
        DISTANCE_OVERFLOWING_FONT_FILL_STYLE: 'red',
        DISTANCE_OVERFLOWING_FONT_STROKE_STYLE: 'black',
        DISTANCE_FONT_STROKE_STYLE: 'black',
        MINI_MAP_HIDE_FILTER_TIME: 500


    }
    
    return returned;
}