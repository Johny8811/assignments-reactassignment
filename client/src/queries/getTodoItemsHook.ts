import { useLoading } from "../integrations/fetch/LoadingProvider";
import { fetchApi, Methods } from "../integrations/fetch/fetchAPI";

import { LOADING_ENUM, TODO_ITEMS } from "./enpoints";

export type Todo = {
    createdAt: number;
    done: boolean;
    id: number;
    title: string;
};

export type Todos = Todo[];

export const getTodoItemsHook = () => {
    const { startLoading, stopLoading } = useLoading();

    return async () => {
        startLoading?.(LOADING_ENUM.GET_TODO_ITEMS);

        const result = await fetchApi({
            url: TODO_ITEMS,
            method: Methods.get,
            headers: {
                "Content-Type": "application/json",
            },
        });

        stopLoading?.(LOADING_ENUM.GET_TODO_ITEMS);

        return result;
    };
};
