import CreateStudent from "../components/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";

export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashboard />,
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