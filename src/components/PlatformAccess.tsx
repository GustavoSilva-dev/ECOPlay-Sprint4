import { Navigate } from "react-router";
import Register from "../pages/auth/Register";
import { getStoredUser } from "../types/user";

function PlatformAccess() {
    return getStoredUser() ? <Navigate to="/plataforma/home" replace /> : <Register />;
}

export default PlatformAccess;
