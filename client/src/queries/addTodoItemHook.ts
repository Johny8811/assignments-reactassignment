import { fetchApi, Methods } from "../integrations/fetch/fetchAPI";
import { useLoading } from "../integrations/fetch/LoadingProvider";

import { ADD_TODO_ITEM } from "./enpoints";

type Todo = {
    title: string;
    done: boolean;
};

export const addTodoItemHook = () => {
    const { startLoading, stopLoading } = useLoading();

    return async (todo: Todo) => {
        startLoading?.(ADD_TODO_ITEM);

        await fetchApi({
            url: ADD_TODO_ITEM,
            method: Methods.post,
            body: todo,
            headers: {
                "Content-Type": "application/json",
            },
        });

        stopLoading?.(ADD_TODO_ITEM);
    };
};
