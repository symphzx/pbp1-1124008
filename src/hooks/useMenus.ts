import { useCallback, useMemo } from "react";
import { menuActions } from "../store/menuSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export function useMenus() {
    const dispatch = useAppDispatch();
    const { menus, menuState: state } = useAppSelector((state) => state.menu);

    const reload = useCallback( async () => {
        dispatch(menuActions.setMenuState("loading"));

        try {
            const response = await fetch("/api/list-menu", {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            });
            if (response.status != 200) {
                alert("Failed to Reload Post");
                throw new Error("Failed to Reload Post");
            }

            const data = await response.json();
            dispatch(menuActions.setMenus(data));
        } catch {
            dispatch(menuActions.setMenuState("error"));
        }
    }, [dispatch]);

    return useMemo(() => ({
            reload,
            menus,
            state,
        }), [reload, menus, state],);
}
