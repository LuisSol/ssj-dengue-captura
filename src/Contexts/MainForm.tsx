import React, { useReducer, createContext, useContext, ReactNode } from "react";

type Action = { type: "RESET_FORM" };

type Dispatch = (action: Action) => void;
type State = {
  partner: string;
};
type MasterFormProviderProps = { children: ReactNode };

const defaultFormData: State = {
  partner: "",
};

const masterFormReducer = (state: State = defaultFormData, action: Action) => {
  switch (action.type) {
    case "RESET_FORM":
      return defaultFormData;
    default:
      return state;
  }
};

const MasterFormContext = createContext<State | undefined>(undefined);
const MasterFormDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

const MasterFormProvider = ({ children }: MasterFormProviderProps) => {
  const [state, dispatch] = useReducer(masterFormReducer, defaultFormData);

  return (
    <MasterFormContext.Provider value={state}>
      <MasterFormDispatchContext.Provider value={dispatch}>
        {children}
      </MasterFormDispatchContext.Provider>
    </MasterFormContext.Provider>
  );
};

const useMasterForm = () => {
  const context = useContext(MasterFormContext);
  if (context === undefined) {
    throw new Error("useMasterForm must be used within a MasterFormProvider");
  }
  return context;
};

const useMasterFormDistach = () => {
  const context = useContext(MasterFormDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useMasterFormDispath must be used within a MasterFormProvider"
    );
  }
  return context;
};

export { MasterFormProvider, useMasterForm, useMasterFormDistach };
