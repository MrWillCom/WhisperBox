import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      if (typeof req.body["question"] === "string") {
        await prisma.questions.create({
          data: { question: req.body.question },
        });

        res.status(201).end();
      } else {
        res.status(400).end();
      }
    } else {
      res.status(405).end();
    }

    await prisma.$disconnect();
  } catch (error) {
    res.status(500).end();
    await prisma.$disconnect();
    throw error;
  }
}
