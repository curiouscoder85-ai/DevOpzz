
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/hooks/use-user";
import { useCollection } from "@/hooks/use-collection";
import { type Course } from "@/lib/schemas/course";
import { type Enrollment } from "@/lib/schemas/enrollment";
import { Users, BookOpen } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function StatCard({ title, value, icon: Icon, description, isLoading }: { title: string, value: string | number, icon: React.ElementType, description: string, isLoading?: boolean }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {isLoading ? <Skeleton className="h-8 w-1/2" /> : <div className="text-2xl font-bold">{value}</div>}
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function TeacherDashboard() {
  const { data: user } = useUser();
  const { data: teacherCourses, loading: coursesLoading } = useCollection<Course>(user ? `users/${user.uid}/courses` : null);

  const courseIds = useMemo(() => teacherCourses?.map(c => c.id) || [], [teacherCourses]);

  const { data: enrollments, loading: enrollmentsLoading } = useCollection<Enrollment>(
    courseIds.length > 0 ? 'enrollments' : null,
    {
      queries: courseIds.length > 0 ? [{ attribute: 'courseId', operator: 'in', value: courseIds }] : undefined,
    }
  );

  const totalStudents = useMemo(() => {
    if (!enrollments) return 0;
    const uniqueStudents = new Set(enrollments.map(e => e.studentId));
    return uniqueStudents.size;
  }, [enrollments]);

  const areEnrollmentsLoading = coursesLoading || (courseIds.length > 0 && enrollmentsLoading);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatCard
          title="Total Courses"
          value={teacherCourses?.length || 0}
          icon={BookOpen}
          description="Number of courses you've created"
          isLoading={coursesLoading}
        />
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={Users}
          description="Across all your courses"
          isLoading={areEnrollmentsLoading}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
        {coursesLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => <Skeleton key={i} className="h-48" />)}
          </div>
        ) : (teacherCourses && teacherCourses.length > 0) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teacherCourses.map(course => (
              <Link key={course.id} href={`/teacher/courses/${course.id}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description.substring(0, 100)}...</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p>You haven't created any courses yet.</p>
        )}
      </div>
    </div>
  );
}
