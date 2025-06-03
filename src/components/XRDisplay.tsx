import React from "react";
import { Text, Html } from "@react-three/drei";
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

      <Html position={[0, 0, -3]}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VoiceControl onNewMessage={onNewMessage} />
        </div>
      </Html>
      {lastMessage && (
        <Text
          position={[0, 1.5, -2]}
          fontSize={0.1}
          color="white"
          maxWidth={2}
          anchorX="center"
          anchorY="middle"
        >
          {lastMessage.content}
        </Text>
      )}

    </>
  );
}