import { useCallback } from "react";

import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { addTodoItemHook } from "./queries/addTodoItemHook";

export const App: React.FC = () => {
    const addTodoItem = addTodoItemHook();

    const handleAddItem = useCallback((v: string) => {
        void addTodoItem({
            done: false,
            title: v,
        });
    }, []);

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <span>
                        <Header handleAddItem={handleAddItem}>To Do app</Header>
                        <List>
                            <div>abc</div>
                        </List>
                    </span>
                    <Footer />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
