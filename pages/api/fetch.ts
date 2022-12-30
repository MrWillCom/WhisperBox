import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    var allQuestions = await prisma.questions.findMany({
      where: { public: true },
    });

    var temp: any[] = [];
    allQuestions.forEach((val, i) => {
      temp[i] = val;
      temp[i].id = temp[i].id.toString();
    });

    res.status(200).json(temp);

    await prisma.$disconnect();
  } catch (error) {
    res.status(500).end();
    await prisma.$disconnect();
    throw error;
  }
}

export default handler;
