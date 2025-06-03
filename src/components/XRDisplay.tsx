import React from "react";
import { Html } from "@react-three/drei";
import { Message } from "./VoiceControl/VoiceControl";
import { VoiceControl } from "./VoiceControl/VoiceControl";

interface XRDisplayProps {
  messages: Message[];
  onNewMessage: (message: Message) => void;
}

export function XRDisplay({ messages, onNewMessage }: XRDisplayProps) {
  const assistantMessages = messages.filter((m) => m.role === "assistant");
  const lastMessage = assistantMessages.length > 0 ? assistantMessages[assistantMessages.length - 1] : null;

  return (
    <>
      <Html position={[0, 0.5, -2]} transform occlude>
        <div style={{ padding: '2rem', fontFamily: 'Arial', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
          <VoiceControl onNewMessage={onNewMessage} />
          {lastMessage && (
            <div className="message-response" style={{ marginTop: '1rem', width: '100%' }}>
              <strong>Assistant:</strong> {lastMessage.content}
            </div>
          )}
        </div>
      </Html>
    </>
  );
}