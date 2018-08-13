# phaser3-swipe
Un plugin para Phaser3 que provee la posibilidad de usar gestos swipe

## Instalación:
- Descargar el plugin clonandolo desde github.
- Dentro de la carpeta dist está el plugin.

### Se puede llamar el archivo por carga estática o por webpack.
- Llamada del archivo en el html: 
    ```html
    <script src="./plugin/Phaser3Swipe.min.js"></script>
    ```
- Llamada del archivo por webpack

    En el archivo que usará el plugin se llama con import: 
    ```javascript
    import Phaser3Swipe from './plugin/Phaser3Swipe.min.js';
    ``` 
## Uso del plugin en Phaser
- Dentro de nuestro juego agregamos esto en el **preload()**: 
```javascript
    this.load.plugin("Phaser3Swipe", Phaser3Swipe, true);
```
- Solo nos queda asignar el plugin a una variable y esto lo hacemos dentro del **create()**:
```javascript
    let swipe = this.plugins.get('Phaser3Swipe');
    swipe.cargar(this);
```
- Con el punto anterior ya disponemos de el evento swipe que lo podemos usar así (dentro de **create()** por ejemplo): 
```javascript
    this.events.on("swipe", (e) => {
        if(e.right) {
            console.log("Hacer algo a la derecha");
        }
        else if(e.left) {
            console.log("Hacer algo a la izquierda");
        }
        else if(e.up) {
            console.log("Hacer algo a la arriba");
        }
        else if(e.down) {
            console.log("Hacer algo a la abajo");      
        }
    })
```
