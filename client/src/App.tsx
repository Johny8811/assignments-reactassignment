import { useCallback, useEffect, useState } from "react";

import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ListItem } from "./components/ListItem";
import { ThemeProvider } from "./components/ThemeProvider";
import { addTodoItemHook } from "./queries/addTodoItemHook";
import { getTodoItemsHook, Todos } from "./queries/getTodoItemsHook";

export const App: React.FC = () => {
    const [todoItems, setTodoItems] = useState<Todos>();

    const addTodoItem = addTodoItemHook();
    const getTodoItems = getTodoItemsHook();

    const handleAddItem = useCallback((v: string) => {
        void addTodoItem({
            done: false,
            title: v,
        });
    }, []);

    useEffect(() => {
        getTodoItems().then((data) => {
            setTodoItems(data);
        });
        // TODO: improvements: handle catch error
    }, []);

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <span>
                        <Header handleAddItem={handleAddItem}>To Do app</Header>
                        <List>
                            {todoItems?.map((i) => (
                                <ListItem key={i.id} label={i.title} handleEdit={() => {}} handleRemoval={() => {}} />
                            ))}
                        </List>
                    </span>
                    <Footer />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
