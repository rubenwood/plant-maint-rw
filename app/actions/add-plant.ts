"use server";

import { createClient } from "@/lib/supabase/server";

export async function addPlant() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { data, error } = await supabase
    .from("plants")
    .insert({
        name: "New Plant",
        descr:"testing",
        short_descr:"some more testing"
    }).select().single();

  if (error) {
    throw error;
  }

  console.log("Plant added successfully", data);
  return data;
}