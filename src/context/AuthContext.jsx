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

  const githubLogin = () => {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    redirect_uri: "https://mindspace-taskmanager.vercel.app",
    scope: "read:user user:email",
  });

  window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
};


  return (
    <AuthContext.Provider value={{ googleLogin,  githubLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}