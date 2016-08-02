/// <reference path="../typings/index.d.ts" />

// Placeholder file for Node.js game server
import io = require('socket.io');
import util = require('util');
import Player = require('./Player');

class Game {
    private _io: SocketIO.Server;
    private _players: Player.Player[];

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
            .on('new player', this._onNewPlayer.bind(this, client))
            .on('move player', this._onMovePlayer);
    }

    private _onClientDisconnect(client: SocketIO.Socket) {
        let removePlayer: Player.Player = this._players.find(player => player.id == client.id);
        if (!removePlayer) {
            return util.log(`Player not found: ${client.id}`);
        }

        this._players = this._players.filter(player => player.id != client.id);
        client.broadcast.emit('remove player', { id: removePlayer.id });
    }

    private _onNewPlayer(client: SocketIO.Socket, data) {
        const newPlayer = new Player.Player(data.x, data.y, client.id);

        client.broadcast.emit('new player', newPlayer.info);
        for (let player of this._players) {
            client.emit('new player', player.info);
        }

        this._players.push(newPlayer);
    }

    private _onMovePlayer() {
    }
}

const app = new Game();
