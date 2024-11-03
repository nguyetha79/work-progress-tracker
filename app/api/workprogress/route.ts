import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createWorkItemSchema = z.object({
  workItem: z.string().min(1).max(255),
  description: z.string().min(1),
  notes: z.string().min(1),
  dueDate: z.string().datetime()
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createWorkItemSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newWorkProgress = await prisma.workProgress.create({
    data: {
      workItem: body.workItem,
      description: body.description,
      notes: body.notes,
      dueDate: body.dueDate
    },
  });

  return NextResponse.json(newWorkProgress, {status: 201})
}
