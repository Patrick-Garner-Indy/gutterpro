import { supabase } from "@/lib/supabase";

export async function uploadPhoto(userId: string, fileUri: string) {
  const fileName = `${userId}/${Date.now()}.jpg`;
  const { data, error } = await supabase.storage
    .from("photos")
    .upload(fileName, fileUri, { upsert: false });
  if (error) console.error("Upload error:", error);
  return { data, error };
}

export async function cleanupOldPhotos(userId: string, retentionDays = 90) {
  const cutoff = Date.now() - retentionDays * 24 * 60 * 60 * 1000;
  const { data: files } = await supabase.storage.from("photos").list(userId);

  for (const file of files || []) {
    const createdAt = new Date(file.created_at).getTime();
    if (createdAt < cutoff) {
      await supabase.storage.from("photos").remove([`${userId}/${file.name}`]);
    }
  }
}
