import { useCallback, useEffect, useMemo, useState } from "react";

import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ListItem } from "./components/ListItem";
import { ThemeProvider } from "./components/ThemeProvider";
import { addTodoItemHook } from "./queries/addTodoItemHook";
import { getTodoItemsHook, Todos } from "./queries/getTodoItemsHook";
import { removeTodoItemHook } from "./queries/removeTodoItemHook";

export const App: React.FC = () => {
    const [todoItems, setTodoItems] = useState<Todos>();

    const addTodoItem = addTodoItemHook();
    const getTodoItems = getTodoItemsHook();
    const deleteTodoItem = removeTodoItemHook();

    const handleFetchTodoItems = () => {
        // TODO: improvements: handle catch error
        getTodoItems().then((data) => {
            setTodoItems(data);
        });
    };

    const handleAddItem = useCallback(async (v: string) => {
        await addTodoItem({
            done: false,
            title: v,
        });

        handleFetchTodoItems();
    }, []);

    const handleRemoveItem = useCallback(
        (id: number) => async () => {
            await deleteTodoItem(id);

            handleFetchTodoItems();
        },
        []
    );

    const handleEditItm = useCallback(() => {
        // TODO: implement edit
    }, []);

    useEffect(() => {
        handleFetchTodoItems();
    }, []);

    const todoItemsStatistics = useMemo(() => {
        return {
            todoItems: todoItems?.length,
            doneItems: todoItems?.filter((i) => i.done).length,
        };
    }, [todoItems]);

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <span>
                        <Header handleAddItem={handleAddItem}>To Do app</Header>
                        <List>
                            {todoItems?.map((i) => (
                                <ListItem
                                    key={i.id}
                                    label={i.title}
                                    handleEdit={handleEditItm}
                                    handleRemoval={handleRemoveItem(i.id)}
                                />
                            ))}
                        </List>
                    </span>
                    <Footer todoItems={todoItemsStatistics.todoItems} doneItems={todoItemsStatistics.doneItems} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
