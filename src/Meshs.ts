import { TextureLoader } from "expo-three";
import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    RGBADepthPacking,
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

export class IconMesh extends Mesh {
    constructor() {
        super(
            new BoxBufferGeometry(1.0, 1.0, 1.0),
            new MeshStandardMaterial({
              map: new TextureLoader().load(require("../icon.jpg")),
              // color: 0xff0000
            })
        )
    }
}