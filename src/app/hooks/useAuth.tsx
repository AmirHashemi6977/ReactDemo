import { useContext } from "react";
// import AuthContext from "app/contexts/Auth0Context";
// import AuthContext from "app/contexts/JWTAuthContext";
import AuthContext from "../contexts/JWTAuthContext";

const useAuth = () => useContext(AuthContext);
export default useAuth;
