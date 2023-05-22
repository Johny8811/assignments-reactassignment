import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export const App: React.FC = () => (
    <ThemeProvider>
        <Container>
            <Layout>
                <span>
                    <Header handleAddItem={() => console.warn("unimplemented")}>To Do app</Header>
                    <List>
                        <div>abc</div>
                    </List>
                </span>
                <Footer />
            </Layout>
        </Container>
    </ThemeProvider>
);
