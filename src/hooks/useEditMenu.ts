import { useCallback } from "react";
import type { EditMenuPayload } from "../types";

export function useEditMenu(){
    return useCallback(async (payload: EditMenuPayload) => {}, []);
}