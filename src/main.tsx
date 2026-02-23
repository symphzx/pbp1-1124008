import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./AppRoutes.tsx";
import { BrowserRouter } from "react-router";
import { Layout } from "./components/Layout.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    </StrictMode>,
);
