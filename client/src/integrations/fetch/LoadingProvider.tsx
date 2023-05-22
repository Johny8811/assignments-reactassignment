// TODO: replace with better loading management (e.g. react-query)
import React, { createContext, ReactNode, useMemo, useState, useContext } from "react";

type LoadingProviderType = {
    loading: {
        [key: string]: boolean;
    };
    startLoading?: (key: string) => void;
    stopLoading?: (key: string) => void;
};

const LoadingContext = createContext<LoadingProviderType>({
    loading: {},
});

type Props = {
    children: ReactNode;
};

export function LoadingProvider({ children }: Props) {
    const [loading, setLoading] = useState({});

    const handleStartLoading = (key: string) =>
        setLoading((state) => ({
            ...state,
            [key]: true,
        }));
    const handleStopLoading = (key: string) =>
        setLoading((state) => ({
            ...state,
            [key]: false,
        }));

    const value = useMemo(
        () => ({
            loading,
            startLoading: handleStartLoading,
            stopLoading: handleStopLoading,
        }),
        [loading]
    );

    return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}

export const useLoading = () => {
    const loadingContext = useContext(LoadingContext);

    if (!loadingContext) {
        throw new Error("calling useLoading out of LoadingContext");
    }

    return loadingContext;
};
