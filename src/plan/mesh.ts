import { TextureLoader } from "expo-three";
import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial
} from "three";

export class PlanMesh extends Mesh {
    constructor() {
      super(
        new BoxBufferGeometry(1000, 0.1, 1000),
        new MeshStandardMaterial({
            color: "rgb(255, 255, 255)"
        })
      );
    }
}