"use client";

import { io } from "socket.io-client";
import { SOCKET_URL } from "./config";
import { error } from "@/components/ui/alerts";

let socket = null;

export const getSocket = () => {
    if (!socket) {
        socket = io(SOCKET_URL, {
            transports: ["websocket"],
            autoConnect: false,
            withCredentials: true,
            auth: (cb) => {
                cb({ token: typeof window !== "undefined" ? localStorage.getItem("token") : null });
            },
        });

        socket.on("connect_error", (err) => {
            error(err.message || "Socket connection error");
        });

        socket.on("disconnect", (reason) => {
            if (reason === "io server disconnect") {
                // server forcibly closed it — e.g. auth failure, matches your 401/403 handling
                error("Disconnected from server");
            }
        });
    }

    return socket;
};

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
};

export default getSocket;