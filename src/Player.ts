/// <reference path="../typings/index.d.ts" />

import io = require('socket.io');

export class Player {
    private _x: number;
    private _y: number;
    private _id: any;

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

    public get id() : any {
        return this._id;
    }

    public set id(v : any) {
        this._id = v;
    }

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
}
