import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email({ error: "Invalid email format" }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().max(500).optional(),
  source: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const webhook = await fetch(
      "https://hook.eu1.make.com/mlfubzmrrhtk4dlg8vm72rd43qqhyfo2",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );

    if (!webhook.ok) {
      return NextResponse.json(
        { error: "Failed to process submission" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
