import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { XRDisplay } from "./components/XRDisplay";
import { Message, VoiceControl } from "./components/VoiceControl/VoiceControl";
import { Html } from "@react-three/drei";



export default function App() {


    return (
        <>
           <XRDisplay />
        </>
    )
};