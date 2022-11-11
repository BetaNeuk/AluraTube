import { createClient  } from "@supabase/supabase-js";

const PROJECT_URL = "https://zhftwzeviamfzqhsczqs.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZnR3emV2aWFtZnpxaHNjenFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTYyOTUsImV4cCI6MTk4Mzc3MjI5NX0.9bESS4YM2zohcLMgFprseDIrdVd_je-KmUuxfitg_no";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video")
        .select("*");
    }
  }
}