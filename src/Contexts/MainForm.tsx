import React, { useReducer, createContext, useContext, ReactNode } from "react";

type Action =
  | { type: "RESET_FORM" }
  | { type: "START_FORM" }
  | { type: "SET_VALUE"; field: string; value: string };

type Dispatch = (action: Action) => void;
type MasterFormProviderProps = { children: ReactNode };
type State = {
  enProceso: boolean;
  folio: string;
  zona: string;
  fechaLevantamiento: string;
  encuestador: string;
  nombre: string;
  edad: string;
  sexo: string;
  religion: string;
  estadoCivil: string;
  escolaridad: string;
  ocupacion: string;
  domicilio: string;
  numIntegrantes: string;
  idIntegrante1: string;
  idIntegrante2: string;
  idIntegrante3: string;
  idIntegrante4: string;
  idIntegrante5: string;
  idIntegrante6: string;
  idIntegrante7: string;
  idIntegrante8: string;
  idIntegrante9: string;
  idIntegrante10: string;
  idIntegrante11: string;
  idIntegrante12: string;
  edadIntegrante1: string;
  edadIntegrante2: string;
  edadIntegrante3: string;
  edadIntegrante4: string;
  edadIntegrante5: string;
  edadIntegrante6: string;
  edadIntegrante7: string;
  edadIntegrante8: string;
  edadIntegrante9: string;
  edadIntegrante10: string;
  edadIntegrante11: string;
  edadIntegrante12: string;
  escolaridadIntegrante1: string;
  escolaridadIntegrante2: string;
  escolaridadIntegrante3: string;
  escolaridadIntegrante4: string;
  escolaridadIntegrante5: string;
  escolaridadIntegrante6: string;
  escolaridadIntegrante7: string;
  escolaridadIntegrante8: string;
  escolaridadIntegrante9: string;
  escolaridadIntegrante10: string;
  escolaridadIntegrante11: string;
  escolaridadIntegrante12: string;
  personasEnCasa4horasAlDia: string;
};

const defaultFormData: State = {
  enProceso: false,
  folio: "",
  zona: "",
  fechaLevantamiento: "",
  encuestador: "",
  nombre: "",
  edad: "",
  sexo: "1",
  religion: "1",
  estadoCivil: "1",
  escolaridad: "1",
  ocupacion: "",
  domicilio: "",
  numIntegrantes: "1",
  idIntegrante1: "1",
  idIntegrante2: "",
  idIntegrante3: "",
  idIntegrante4: "",
  idIntegrante5: "",
  idIntegrante6: "",
  idIntegrante7: "",
  idIntegrante8: "",
  idIntegrante9: "",
  idIntegrante10: "",
  idIntegrante11: "",
  idIntegrante12: "",
  edadIntegrante1: "10",
  edadIntegrante2: "",
  edadIntegrante3: "",
  edadIntegrante4: "",
  edadIntegrante5: "",
  edadIntegrante6: "",
  edadIntegrante7: "",
  edadIntegrante8: "",
  edadIntegrante9: "",
  edadIntegrante10: "",
  edadIntegrante11: "",
  edadIntegrante12: "",
  escolaridadIntegrante1: "1",
  escolaridadIntegrante2: "",
  escolaridadIntegrante3: "",
  escolaridadIntegrante4: "",
  escolaridadIntegrante5: "",
  escolaridadIntegrante6: "",
  escolaridadIntegrante7: "",
  escolaridadIntegrante8: "",
  escolaridadIntegrante9: "",
  escolaridadIntegrante10: "",
  escolaridadIntegrante11: "",
  escolaridadIntegrante12: "",
  personasEnCasa4horasAlDia: "0",
};

const masterFormReducer = (state: State = defaultFormData, action: Action) => {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, [action.field]: action.value };
    case "START_FORM":
      return { ...defaultFormData, enProceso: true };
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
