import { fetchApi, Methods } from "../integrations/fetch/fetchAPI";
import { useLoading } from "../integrations/fetch/LoadingProvider";

import { TODO_ITEMS, LOADING_ENUM } from "./enpoints";
import { Todo } from "./getTodoItemsHook";

type AddTodo = Pick<Todo, "title" | "done">;

export const addTodoItemHook = () => {
    const { startLoading, stopLoading } = useLoading();

    return async (todo: AddTodo) => {
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
