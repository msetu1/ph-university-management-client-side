import MainLayout from "./components/layout/MainLayout";
import ProtectedRoutes from "./components/layout/ProtectedRoutes";

const App = () => {
  return (
    <div>
     <ProtectedRoutes>
     <MainLayout/>
     </ProtectedRoutes>
    </div>
  );
};

export default App;