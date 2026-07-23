import { createContext, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";


const AuthContext = createContext();

export function AuthProvider({ children }){

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
    onError: () => {
      console.log("Google login failed");
    },
  });


  return (
    <AuthContext.Provider value={{ googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}