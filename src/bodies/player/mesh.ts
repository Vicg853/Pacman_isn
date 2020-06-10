import { TextureLoader } from "expo-three";
import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial
} from "three";

export class IconMesh extends Mesh {
    constructor() {
        super(
            new BoxBufferGeometry(1.0, 1.0, 1.0),
            new MeshStandardMaterial({
              map: new TextureLoader().load(require("../../icon.jpg")),
              // color: 0xff0000
            })
        )
    }
}