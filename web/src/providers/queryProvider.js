"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MODE } from '@/lib/api/config'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 2,
            cacheTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false, // dev
            refetchOnMount: false, // dev
        },
    },
})

if (typeof window !== "undefined") {
    const persister = createAsyncStoragePersister({ storage: window.localStorage })

    persistQueryClient({ queryClient, persister })
}

export function QueryProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {MODE === "development" && <ReactQueryDevtools initialIsOpen={false}
                position="right"
                buttonPosition="bottom-right" />}
        </QueryClientProvider>
    )
}