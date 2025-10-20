import { useEffect } from "react";
import { cleanupOldPhotos } from "@/services/storageManager";
import { RETENTION_DAYS } from "@/lib/constants";

export function useStorageCleanup(userId: string | undefined) {
  useEffect(() => {
    if (!userId) return;
    cleanupOldPhotos(userId, RETENTION_DAYS);
  }, [userId]);
}
