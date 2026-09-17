"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { getSocket } from "@/lib/api/socket";

export function useSocket() {
  const [socket] = useState(() => getSocket());
  const socketRef = useRef(socket);
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const s = socketRef.current;

    if (!s.connected) s.connect();

    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);

    s.on("connect", onConnect);
    s.on("disconnect", onDisconnect);

    return () => {
      s.off("connect", onConnect);
      s.off("disconnect", onDisconnect);
    };
  }, []);

  const emit = useCallback((event, payload) => {
    socketRef.current?.emit(event, payload);
  }, []);

  const on = useCallback((event, cb) => {
    socketRef.current?.on(event, cb);
    return () => socketRef.current?.off(event, cb);
  }, []);

  return { socket, isConnected, emit, on };
}