/// <reference path="../typings/index.d.ts" />

import io = require('socket.io');

export interface PlayerInfo {
    x: number;
    y: number;
    id: string;
}

export class Player {
    private _x: number;
    private _y: number;
    private _id: string;

    public get x(): number {
        return this._x;
    }
    
    public set x(v : number) {
        this._x = v;
    }
    
    public get y() : number {
        return this._y;
    }

    public set y(v : number) {
        this._y = v;
    }

    public get id() : string {
        return this._id;
    }

    public get info(): PlayerInfo {
        return {
            x: this.x,
            y: this.y,
            id: this.id,
        };
    }

    constructor(x: number, y: number, id: string) {
        this._x = x;
        this._y = y;
        this._id = id;
    }
}
