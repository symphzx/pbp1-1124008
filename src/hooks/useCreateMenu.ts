import { useCallback } from "react";
import type { CreateMenuPayload } from "../types";

export function useCreateMenu() {
    return useCallback(async (payload: CreateMenuPayload) => {
        const response = await fetch("/api/create-menu", {
            method: "POST",
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
            alert("Failed to create menu");
            return;
        }
        
    }, []);
}