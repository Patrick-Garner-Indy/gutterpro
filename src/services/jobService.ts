import { supabase } from "@/lib/supabase";

export async function getJobs(userId: string) {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  return { data, error };
}

export async function createJob(userId: string, job: any) {
  const { data, error } = await supabase
    .from("jobs")
    .insert([{ ...job, user_id: userId }]);
  return { data, error };
}

export async function deleteJob(id: string) {
  const { error } = await supabase.from("jobs").delete().eq("id", id);
  return { error };
}
