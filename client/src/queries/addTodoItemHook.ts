import { fetchApi, Methods } from "../integrations/fetch/fetchAPI";
import { useLoading } from "../integrations/fetch/LoadingProvider";

import { TODO_ITEMS, LOADING_ENUM } from "./enpoints";

type Todo = {
    title: string;
    done: boolean;
};

export const addTodoItemHook = () => {
    const { startLoading, stopLoading } = useLoading();

    return async (todo: Todo) => {
        startLoading?.(LOADING_ENUM.ADD_TODO_ITEM);

        await fetchApi({
            url: TODO_ITEMS,
            method: Methods.post,
            body: todo,
            headers: {
                "Content-Type": "application/json",
            },
        });

        stopLoading?.(LOADING_ENUM.ADD_TODO_ITEM);
    };
};
