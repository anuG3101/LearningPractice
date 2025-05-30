import React from "react";
import { Text } from "@react-three/drei";
import { Message } from "./VoiceControl/VoiceControl";

interface XRDisplayProps {
  messages: Message[];
}

export function XRDisplay({ messages }: XRDisplayProps) {
  const assistantMessages = messages.filter((m) => m.role === "assistant");
  const lastMessage = assistantMessages.length > 0 ? assistantMessages[assistantMessages.length - 1] : null;

  return lastMessage ? (
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
  ) : null;
}
