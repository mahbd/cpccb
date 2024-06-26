import { Language } from "@prisma/client";
import { z } from "zod";

export const submissionSchema = z.object({
  problemId: z.string(),
  contestId: z.string().optional(),
  language: z.nativeEnum(Language),
  code: z.string().min(50).max(65000),
});

export type SubmissionFormData = z.infer<typeof submissionSchema>;
