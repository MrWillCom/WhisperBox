import { NextApiRequest, NextApiResponse } from "next";
import supabase from "./_supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.from("questions").select();
  if (error) {
    res.status(500).end();
    throw error;
  }

  res.status(200).send(data);
}
