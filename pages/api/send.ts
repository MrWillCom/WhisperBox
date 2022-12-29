import { NextApiRequest, NextApiResponse } from "next";
import supabase from "./_supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (typeof req.body["question"] === "string") {
      const { error } = await supabase
        .from("questions")
        .insert({ question: req.body.question });
      if (error) {
        res.status(500).end();
        throw error;
      }

      res.status(201).end();
    } else {
      res.status(400).end();
    }
  } else {
    res.status(405).end();
  }
}
