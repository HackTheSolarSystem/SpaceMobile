const serverSocketConnection = io => {  //gets passed a client's information to be emitted to all other clients by server

var status = null;
var planets = [
    {
        "name": "Sun",
        "socket_id": null,
    },
    {
        "name": "Mercury",
        "socket_id": null,
    },
    {
        "name": "Venus",
        "socket_id": null,
    },
    {
        "name": "Earth",
        "socket_id": null,
    },
    {
        "name": "Mars",
        "socket_id": null,
    },
    {
        "name": "Jupiter",
        "socket_id": null,
    },
    {
        "name": "Saturn",
        "socket_id": null,
    },
    {
        "name": "Uranus",
        "socket_id": null,
    },
    {
        "name": "Neptune",
        "socket_id": null,
    },
];

const is_first_join = () => {
    return status == null
}

const is_playing = () => {
    return status == 'playing'
}

const is_ready = () => {
    return status == 'ready'
}

const is_sun = (socket_id) => {
    return planets[0]['socket_id'] == socket_id;
}

const prepare_game = (socket_id) => {
    for (var i = 0; i < planets.length; i++) {
        if (planets[i]['name'] == 'Sun') {
            planets[i]['socket_id'] = socket_id;
            status = 'ready';
            return planets[i]['name'];
        }
    }
}

const get_random_planet = (socket_id) => {
    let random_index = get_random_planet_index();
    if (random_index == -1) {
        return {'error': 'no more spot left'}
    }else {
        planets[random_index]['socket_id'] = socket_id;
        return {'planet_name': planets[random_index]['name']};
    }
}

const get_random_planet_index = () => {
    let available_planet_indexes = [];
    for (var i = 0; i < planets.length; i++) {
        if (planets[i].socket_id == null) {
            available_planet_indexes.push(i);
        }
    }
    if (available_planet_indexes.length == 0) {
        return -1;
    }else {
        let random_number = Math.floor(Math.random() * (available_planet_indexes.length - 1))
        return available_planet_indexes[random_number];    
    }
}

const init_player_by_socket_id = (socket_id) => {
    for (var i = 0; i < planets.length; i++) {
        if (planets[i]['socket_id'] == socket_id) {
            planets[i]['socket_id'] = null;
        }
    }
}

const sung_debug = () => {
    console.log(status);
    console.log(planets);
}

io.on('connection', socket => {
    console.log(`${socket.id} has made a connection`);

    // join
    socket.on('join', () => {
        if (is_first_join()) {
            let planet_name = prepare_game(socket.id);
            socket.emit("join", {"planet_name": planet_name});
            console.log(`${socket.id} joined as ${planet_name}`);
        }else if (is_playing()) {
            socket.emit('join', {'error': 'you cannot join while the game is playing'});
            console.log(`${socket.id} rejected to join`);
        }else if (is_ready()) {
            let result = get_random_planet(socket.id);
            socket.emit("join", result);
            if (typeof result['error'] != 'undefined') {
                console.log(`${socket.id} could not join because ${result['error']}`);
            }else {
                console.log(`${socket.id} joined as ${result['planet_name']}`);
            }
        }
        sung_debug();
    })

    // start game
    socket.on('start', () => {
        if (is_sun(socket.id)) {
            status = 'playing'
            socket.emit("start", {"message": "game started"});
            console.log(`Sun started the game`);
        }else {
            socket.emit("start", {"error": "only Sun can start game"});
        }
        sung_debug();
    })

    // disconnect
    socket.on('disconnect', socket => {
        init_player_by_socket_id(socket.id)
        console.log(`${socket.id} has logged off`);
        sung_debug();
    })
  })
  
}

module.exports = serverSocketConnection