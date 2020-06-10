import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { Renderer } from "expo-three";
import * as React from "react";
import {
  AmbientLight,
  Fog,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from "three";

const camera = new PerspectiveCamera(70, width / height, 0.01, 500);

camera.position.set(2, 5, 5);