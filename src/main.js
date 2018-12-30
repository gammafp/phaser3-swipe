/**
* @author       Francisco Pereira Alvarado - gammafp <gammafp@gmail.com>
* @copyright    2018 gammafp.
*/
class Phaser3Swipe extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
        super(pluginManager);

        this.directions = {
            left: false,
            right: false,
            up: false,
            down: false
        };
    }

    cargar(scene) {
        this.scene = scene;
        
        this.scene.input.on("pointerdown", (e) => {
            this.x = e.x;
            this.y = e.y; 
        });

        this.scene.input.on("pointerup", (e) => {
            let resetDir = this.resetDirections(this.directions);

            let deltaY = (e.y - this.y);
            let deltaX = (e.x - this.x);

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 100) {
                    this.sendEvent(resetDir("right"));
                } else if (deltaX < -100) {
                    this.sendEvent(resetDir("left"));
                }
            } else {
                if (deltaY > 100) {
                    this.sendEvent(resetDir("down"));
                } else if (deltaY < -100) {
                    this.sendEvent(resetDir("up"));
                }
            }
        });

    }

    resetDirections(dir) {
        return (newDir) => {
            let outDir = dir;
            Object.keys(dir).map( (x) => {
                outDir[x] = x === newDir;
            });
            return outDir;  
        }
    }

    sendEvent(dir) {
        this.scene.events.emit("swipe", dir);
    }

}

// Exportación
module.exports = Phaser3Swipe;
global.Phaser3Swipe = Phaser3Swipe;
