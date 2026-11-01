import { Navigate, Outlet } from "react-router";
import { getStoredUser } from "../types/user";

function ProtectedRoute() {
    return getStoredUser() ? <Outlet /> : <Navigate to="/plataforma" replace />;
}

export default ProtectedRoute;
