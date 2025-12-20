
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/firebase/auth/use-user";
import { useCollection } from "@/firebase/firestore/use-collection";
import { type Course } from "@/lib/schemas/course";
import { type Enrollment } from "@/lib/schemas/enrollment";
import { Users, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

function StatCard({ title, value, icon: Icon, description, isLoading }: { title: string, value: string | number, icon: React.ElementType, description: string, isLoading?: boolean }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {isLoading ? <div className="h-8 w-1/2 animate-pulse rounded-md bg-muted" /> : <div className="text-2xl font-bold">{value}</div>}
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
    courseIds.length > 0 ? `enrollments` : null,
    {
      queries: [
        { attribute: 'courseId', operator: 'in', value: courseIds }
      ]
    }
  );

  const totalStudents = useMemo(() => {
    if (!enrollments) return 0;
    const uniqueStudents = new Set(enrollments.map(e => e.studentId));
    return uniqueStudents.size;
  }, [enrollments]);

  const isLoading = coursesLoading;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatCard
          title="Total Courses"
          value={teacherCourses?.length || 0}
          icon={BookOpen}
          description="Number of courses you've created"
          isLoading={isLoading}
        />
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={Users}
          description="Across all your courses"
          isLoading={!!(isLoading || (teacherCourses && teacherCourses.length > 0 && enrollmentsLoading))}
        />
      </div>
      {/* Additional components like recent activity or notifications can be added here */}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => <div key={i} className="h-48 animate-pulse rounded-lg bg-muted" />)}
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
