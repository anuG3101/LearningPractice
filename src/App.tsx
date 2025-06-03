import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { XRDisplay } from "./components/XRDisplay";
import { VoiceControl, Message } from "./components/VoiceControl/VoiceControl";

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

      <Canvas style={styles.canvas}>
        <XR store={store}>
          <XRDisplay messages={messages} onNewMessage={handleNewMessage} />
        </XR>
      </Canvas>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
 appContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  enterButton: {
    position: "absolute",
    top: "20px",  // Adjust as needed
    left: "20px", // Adjust as needed
    zIndex: 20,   // Ensure it is above other elements
    backgroundColor: "#1976d2",
    color: "white",
    padding: "12px 24px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px", // Slightly larger font
    borderRadius: "5px", // Add some rounding for a better look
  },
  canvas: {
    width: "100%",
    height: "100%",
  },
};