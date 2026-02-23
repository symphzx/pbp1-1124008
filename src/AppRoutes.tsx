import { lazy } from "react";
import { Route, Routes } from "react-router";

const ListMenu = lazy(() => import("./pages/ListMenu"));
const CreateMenu = lazy(() => import("./pages/CreateMenu"));
const MenuDetail = lazy(() => import("./pages/MenuDetail"));

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/list-menu" element={<ListMenu />} />
            <Route path="/create-menu" element={<CreateMenu />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
        </Routes>
    );
}
