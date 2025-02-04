import CreateStudent from "../components/CreateStudent";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";

export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashboard />,
    },
    {
      name: 'Academic Management',
      children: [
        {
          name: 'Academic Semester',
          path: 'academic-semester',
          element: <AcademicSemester />,
        },
      ]
  },
    {
        name: 'User Management',
        children: [
          {
            name: 'Create Student',
            path: 'create-student',
            element: <CreateStudent />,
          },
        ]
    }
]