/// </// <reference path="typings/index.d.ts" />

// Placeholder file for Node.js game server
import io = require("socket.io");
import util = require("util");

class Game {
    private _io: SocketIO.Server;
    private _players: number[];

    constructor(port: number = 8000) {
        this._io = io(port, {
            transports: ['websocket'],
        });
        this._players = [];
    }
}

const app = new Game();
