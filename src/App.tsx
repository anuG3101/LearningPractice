import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { VoiceControl, Message } from "./components/VoiceControl/VoiceControl";
import { XRDisplay } from "./components/XRDisplay";

// Create XR store
const store = createXRStore();

export default function App() {
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
    <div style={styles.appContainer}>
      {!arStarted && (
        <button style={styles.enterButton} onClick={handleEnterAR}>
          Enter AR Mode
        </button>
      )}

      <VoiceControl onNewMessage={handleNewMessage} />

      <Canvas style={styles.canvas}>
        <XR store={store}>
          <XRDisplay messages={messages} />
        </XR>
      </Canvas>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#000",
  },
  enterButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "16px 32px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#1a73e8",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    zIndex: 10,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s ease",
  },
  canvas: {
    width: "100%",
    height: "100%",
  },
};
