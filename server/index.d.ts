interface DataPacket {
    timestamp: number;
    quality: number;
    temperature: number;
    front_left: number;
    front_right: number;
    bottom_left: number;
    bottom_right: number;
    latitude: number,
    longitude: number,
    arm: number;
    x:number;
    y:number;
    z:number;
    velocity: number;
    voltage: boolean;
    voltages: number;
    current: number;
    camera1: string;
    camera2: string;
    camera3: string;
    camera4: string;
    x_s: number;
    y_s: number;
    x_tvoc: number;
    y_tvoc: number;
}