import { z } from 'zod';

export const CourseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  teacherId: z.string(),
});

export type Course = z.infer<typeof CourseSchema>;
