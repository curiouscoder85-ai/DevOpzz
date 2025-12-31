import { z } from 'zod';

export const EnrollmentSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  studentId: z.string(),
  enrollmentDate: z.date(),
});

export type Enrollment = z.infer<typeof EnrollmentSchema>;
