import { useState } from "react";
import { useAuthContext } from "../Contexts/AuthContext";

//const BASE_URL = "/api/user";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    // setIsLoading(true);
    // setError(null);

    // const response = await fetch(`${BASE_URL}/signup`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    // const json = await response.json();

    // if (!response.ok) {
    //   setIsLoading(false);
    //   setError(json.error);
    // }

    // if (response.ok) {
    //   setError(null);

    //   //save user to localstorage
    //  localStorage.setItem("user", JSON.stringify(json));

    //   //update auth context state
    //   dispatch({ type: "LOGIN", payload: { email, password } });

    //   setIsLoading(false);
    // }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    sessionStorage.setItem("user", JSON.stringify({ email, password }));

    dispatch({ type: "LOGIN", payload: { email, password } });
  };

  return { signup, isLoading, error };
};
