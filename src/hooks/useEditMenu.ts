import { useCallback } from "react";
import type { EditMenuPayload } from "../types";

export function useEditMenu(){
    return useCallback(async (payload: EditMenuPayload) => {
        const response = await fetch("/api/update-menu/" + payload.id, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                nama: payload.nama,
                deskripsi: payload.deskripsi,
                harga: payload.harga,
                size: payload.size,
                label: payload.label,
                kategori: payload.kategori,
            }),
        })

        if (response.status != 200) {
            alert("Failed to update menu");
            return;
        }
    }, []);
}