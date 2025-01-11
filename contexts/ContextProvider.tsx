import { createContext, useContext, useState, useEffect } from "react";

interface StateContextType {
  username: string;
  userToken: string | null;
  setUsername: (username: string) => void;
  setUserToken: (token: string | null) => void;
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const StateContext = createContext<StateContextType>({
  username: "",
  userToken: null,
  setUsername: () => {},
  setUserToken: () => {},
  activeTab: 1,
  setActiveTab: () => {},
});

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string>("");
  const [userToken, _setUserToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    // Safely initialize `userToken` from localStorage if it exists
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("TOKEN");
      if (token) {
        _setUserToken(token);
      }
    }
  }, []);

  const setUserToken = (token: string | null) => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("TOKEN", token);
      } else {
        localStorage.removeItem("TOKEN");
      }
    }
    _setUserToken(token);
  };

  return (
    <StateContext.Provider
      value={{
        username,
        setUsername,
        userToken,
        setUserToken,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => useContext(StateContext);
