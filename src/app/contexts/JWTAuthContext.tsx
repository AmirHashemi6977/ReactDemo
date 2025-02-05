import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
// CUSTOM COMPONENT
import { ReactDemoLoading } from "../components";

const initialState = {
  user: null || Object,
  isInitialized: false,
  isAuthenticated: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated, user } = action.payload;
      return { ...state, isAuthenticated, isInitialized: true, user };
    }

    case "LOGIN": {
      return { ...state, isAuthenticated: true, user: action.payload.user };
    }

    case "LOGOUT": {
      return { ...state, isAuthenticated: false, user: null };
    }

    case "REGISTER": {
      const { user } = action.payload;

      return { ...state, isAuthenticated: true, user };
    }

    default:
      return state;
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  login: (email: string, password: string) => {},
  logout: () => {},
  register: (email: string, username: string, password: string) => {},
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email: string, password: string) => {
    const response = await axios.post("/api/auth/login", { email, password });
    const { user } = response.data;

    dispatch({ type: "LOGIN", payload: { user } });
  };

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    const response = await axios.post("/api/auth/register", {
      email,
      username,
      password,
    });
    const { user } = response.data;

    dispatch({ type: "REGISTER", payload: { user } });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/auth/profile");
        dispatch({
          type: "INIT",
          payload: { isAuthenticated: true, user: data.user },
        });
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INIT",
          payload: { isAuthenticated: false, user: null },
        });
      }
    })();
  }, []);

  // SHOW LOADER
  if (!state.isInitialized) return <ReactDemoLoading />;

  return (
    <AuthContext.Provider
      value={{ ...state, method: "JWT", login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
