"use client"

import { Auth0Provider } from "@auth0/auth0-react";

export function AuthProvider({ children }) {
    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            cacheLocation="localstorage" 
            authorizationParams={{
                redirect_uri: typeof window !== "undefined" && window.location.origin,
                audience: process.env.NEXT_PUBLIC_AUDIENCE,
                scope: "profile email openid"
            }}
        >
            {children}
        </Auth0Provider>
    )
}
