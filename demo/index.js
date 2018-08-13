const conf = {
    width: 600,
    height: 400,
    parent: 'contenedor',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(conf);

function preload() {
    // Se carga el plugin en memoria
    this.load.plugin("Phaser3Swipe", Phaser3Swipe, true);
}

function create() {
    // Se obtiene el plugin desde el cache manager
    let plugin = this.plugins.get('Phaser3Swipe');
    
    // iniciamos la carga del plugin (esto puede variar en futuras actualiaciones)
    plugin.cargar(this);
    
    // Agregamos el evento de escucha
    this.events.on("swipe", (e) => {
        if(e.right) {
            alert("RIGHT: Hacer algo a la derecha");
        }
        else if(e.left) {
            alert("LEFT: Hacer algo a la izquierda");
        }
        else if(e.up) {
            alert("UP: Hacer algo a la arriba");
        }
        else if(e.down) {
            alert("DOWN: Hacer algo a la abajo");      
        }
    })
   
}