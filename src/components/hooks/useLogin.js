import { useState } from "react";
//import { useAuthContext } from "./useAuthContext";
import { useHistory, useLocation } from "react-router-dom";
import { Routes } from "../../routes";
import { useAuthContext } from "../Contexts/AuthContext";

const BASE_URL = "/api/user";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();
  const history = useHistory();
  const location = useLocation();
  const storedUser = JSON.parse(sessionStorage.getItem("user"));

  const login = (email, password) => {
    console.log("Submitted Email:", email, "Password:", password);

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      dispatch({ type: "LOGIN", payload: storedUser });
      localStorage.setItem("user", JSON.stringify(storedUser));

      const { state } = location;
      if (state && state.from) {
        // Redirect to the originally requested page
        history.replace(state.from);
      } else {
        // Redirect to default page
        history.replace(Routes.DashboardOverview.path);
      }
    } else {
      console.log(" invalid credentials");
    }
  };

  return { login, storedUser, isLoading, error };
};
