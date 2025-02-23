import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthSuccess = () => { 
    const navigate = useNavigate();
    const { login } = useAuth();
    const hasRun = useRef(false); // Prevent double execution

    useEffect(() => {
        if (hasRun.current) return; // Prevent multiple runs
        hasRun.current = true;

        const token = new URL(window.location.href).searchParams.get("token");
        console.log("Received Token:", token);

        if (token) {
            localStorage.setItem("token", token);
            login(token);
            navigate("/"); 
        } else {
            navigate("/login"); 
        }
    }, [navigate, login]);

    return <p>Authenticating...</p>;
};

export default AuthSuccess;
