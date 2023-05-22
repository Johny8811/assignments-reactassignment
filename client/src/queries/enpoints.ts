const BASE = "http://localhost:3000";

export const TODO_ITEMS = `${BASE}/items`;

export enum LOADING_ENUM {
    ADD_TODO_ITEM = `POST:${TODO_ITEMS}`,
    GET_TODO_ITEMS = `GET:${TODO_ITEMS}`,
    EDIT_TODO_ITEM = `PATCH:${TODO_ITEMS}`,
    DELETE_TODO_ITEMS = `DELETE:${TODO_ITEMS}`,
}
