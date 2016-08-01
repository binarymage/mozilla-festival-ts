/// <reference path="../typings/index.d.ts" />

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
        this._setEventHandlers.call(this);
    }

    private _setEventHandlers(): void {
        this._io.on('connection', this._onClientConnect.bind(this));
    }

    private _onClientConnect(client: SocketIO.Socket) {
        util.log(`New player has connected: ${client.id}`);
        client.on('disconnect', this._onClientDisconnect.bind(this, client))
            .on('new player', this._onNewPlayer)
            .on('move player', this._onMovePlayer);
    }

    private _onClientDisconnect(client: SocketIO.Socket) {
        util.log(`Player has disconnected: ${client.id}`);
    }

    private _onNewPlayer() {
    }

    private _onMovePlayer() {
    }
}

const app = new Game();
