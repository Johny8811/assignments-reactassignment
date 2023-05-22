import { useLoading } from "../integrations/fetch/LoadingProvider";

import { LOADING_ENUM, TODO_ITEMS } from "./enpoints";
import { fetchApi, Methods } from "../integrations/fetch/fetchAPI";

export const removeTodoItemHook = () => {
    const { startLoading, stopLoading } = useLoading();

    return async (id: number) => {
        startLoading?.(`${LOADING_ENUM.DELETE_TODO_ITEMS}/${id}`);

        await fetchApi({
            url: `${TODO_ITEMS}/${id}`,
            method: Methods.delete,
            headers: {
                "Content-Type": "application/json",
            },
        });

        stopLoading?.(`${LOADING_ENUM.DELETE_TODO_ITEMS}/${id}`);
    };
};
