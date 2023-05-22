import { fetchApi, Methods } from "../integrations/fetchAPI";

import { ADD_TODO_ITEM } from "./enpoints";

type Todo = {
    title: string;
    done: boolean;
};

export const addTodoItemQuery = (todo: Todo) =>
    fetchApi({
        url: ADD_TODO_ITEM,
        method: Methods.post,
        body: todo,
        headers: {
            "Content-Type": "application/json",
        },
    });
