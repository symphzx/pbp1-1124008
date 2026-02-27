import { useCallback } from "react";

export function useDeleteMenu() {
    return useCallback(async (id: string) => {
        const response = await fetch("/api/delete-menu/" + id, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        });

        if (response.status != 200) {
            alert("Failed to delete menu");
            return;
        }
    }, []);
}
