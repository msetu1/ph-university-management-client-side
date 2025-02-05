import CreateStudent from "../components/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/userManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/userManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/userManagement/CreateAcademicSemester";
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
          name: 'Crete A. Semester',
          path: 'create-academic-semester',
          element: <CreateAcademicSemester />,
        },
        {
          name: 'Academic Semester',
          path: 'academic-semester',
          element: <AcademicSemester />,
        },
        {
          name: 'Create A. Faculty',
          path: 'create-academic-faculty',
          element: <CreateAcademicFaculty />,
        },
        {
          name: 'Academic Faculty',
          path: 'academic-faculty',
          element: <AcademicFaculty />,
        },
        {
          name: 'Create A. Department',
          path: 'create-academic-department',
          element: <CreateAcademicDepartment />,
        },
        {
          name: 'Academic Department',
          path: 'academic-department',
          element: <AcademicDepartment />,
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