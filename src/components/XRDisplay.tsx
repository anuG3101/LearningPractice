import React, { useState } from "react";
import { Html } from "@react-three/drei";
import { Message } from "./VoiceControl/VoiceControl";
import { VoiceControl } from "./VoiceControl/VoiceControl";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR, XRDomOverlay } from "@react-three/xr";


const store = createXRStore();

export function XRDisplay() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [arStarted, setARStarted] = useState(false);

  const handleNewMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };
  const handleEnterAR = async () => {
    try {
      await store.enterAR();
      setARStarted(true);
    } catch (err) {
      console.warn("Failed to enter AR mode:", err);
    }
  };

  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <ambientLight intensity={1} />
          <XRDomOverlay style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ padding: '2rem', fontFamily: 'Arial', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', zIndex:10 }}>
              <VoiceControl onNewMessage={handleNewMessage} />
            </div>

          </XRDomOverlay>
        </XR>
      </Canvas>
    </>
  )
};