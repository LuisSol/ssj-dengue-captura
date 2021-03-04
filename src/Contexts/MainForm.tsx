import React, { useReducer, createContext, useContext, ReactNode } from "react";

type Action =
  | { type: "RESET_FORM" }
  | { type: "START_FORM" }
  | { type: "SET_VALUE"; field: string; value: string };

type Dispatch = (action: Action) => void;
type MasterFormProviderProps = { children: ReactNode };
export type Encuesta = {
  // init
  enProceso: boolean | null;
  folio: string;
  zona: string;
  fechaLevantamiento: string;
  encuestador: string;
  // sociodemografico
  nombre: string;
  idEncuestado: string;
  edad: string;
  sexo: string;
  religion: string;
  estadoCivil: string;
  escolaridad: string;
  ocupacion: string;
  domicilio: string;
  numIntegrantes: string;
  idIntegrante2: string;
  idIntegrante3: string;
  idIntegrante4: string;
  idIntegrante5: string;
  idIntegrante7: string;
  idIntegrante8: string;
  idIntegrante9: string;
  idIntegrante10: string;
  idIntegrante11: string;
  idIntegrante12: string;
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
  escolaridadIntegrante2: string;
  escolaridadIntegrante3: string;
  escolaridadIntegrante4: string;
  escolaridadIntegrante5: string;
  escolaridadIntegrante7: string;
  escolaridadIntegrante8: string;
  escolaridadIntegrante10: string;
  escolaridadIntegrante11: string;
  escolaridadIntegrante12: string;
  personasEnCasa4horasAlDia: string;
  // servicios
  aguaPotable: string;
  drenaje: string;
  tipoDrenaje: string;
  medioDeposicion: string;
  recoleccionBasura: string;
  frecuenciaBasura: string;
  parquesJardines: string;
  sistemaAlmacenamientoAgua: string;
  numCuartos: string;
  jardinCasa: string;
  tipoJardinEnCasa: string;
  accesoTv: string;
  numTvCasa: string;
  accesoRadio: string;
  numRadiosCasa: string;
  celular: string;
  celularIntegrante1: string;
  celularIntegrante2: string;
  celularIntegrante3: string;
  celularIntegrante4: string;
  celularIntegrante5: string;
  celularIntegrante6: string;
  celularIntegrante7: string;
  celularIntegrante8: string;
  celularIntegrante9: string;
  celularIntegrante10: string;
  celularIntegrante11: string;
  celularIntegrante12: string;
  // actividades en casa
  verTvIntegrante1: string;
  verTvIntegrante2: string;
  verTvIntegrante3: string;
  verTvIntegrante4: string;
  verTvIntegrante5: string;
  verTvIntegrante6: string;
  verTvIntegrante7: string;
  verTvIntegrante8: string;
  verTvIntegrante9: string;
  verTvIntegrante10: string;
  verTvIntegrante11: string;
  verTvIntegrante12: string;
  radioIntegrante1: string;
  radioIntegrante2: string;
  radioIntegrante3: string;
  radioIntegrante4: string;
  radioIntegrante5: string;
  radioIntegrante6: string;
  radioIntegrante7: string;
  radioIntegrante8: string;
  radioIntegrante9: string;
  radioIntegrante10: string;
  radioIntegrante11: string;
  radioIntegrante12: string;
  usarCelIntegrante1: string;
  usarCelIntegrante2: string;
  usarCelIntegrante3: string;
  usarCelIntegrante4: string;
  usarCelIntegrante5: string;
  usarCelIntegrante6: string;
  usarCelIntegrante7: string;
  usarCelIntegrante8: string;
  usarCelIntegrante9: string;
  usarCelIntegrante10: string;
  usarCelIntegrante11: string;
  usarCelIntegrante12: string;
  lecturaIntegrante1: string;
  lecturaIntegrante2: string;
  lecturaIntegrante3: string;
  lecturaIntegrante4: string;
  lecturaIntegrante5: string;
  lecturaIntegrante6: string;
  lecturaIntegrante7: string;
  lecturaIntegrante8: string;
  lecturaIntegrante9: string;
  lecturaIntegrante10: string;
  lecturaIntegrante11: string;
  lecturaIntegrante12: string;
  fisicaIntegrante1: string;
  fisicaIntegrante2: string;
  fisicaIntegrante3: string;
  fisicaIntegrante4: string;
  fisicaIntegrante5: string;
  fisicaIntegrante6: string;
  fisicaIntegrante7: string;
  fisicaIntegrante8: string;
  fisicaIntegrante9: string;
  fisicaIntegrante10: string;
  fisicaIntegrante11: string;
  fisicaIntegrante12: string;
  aseoIntegrante1: string;
  aseoIntegrante2: string;
  aseoIntegrante3: string;
  aseoIntegrante4: string;
  aseoIntegrante5: string;
  aseoIntegrante6: string;
  aseoIntegrante7: string;
  aseoIntegrante8: string;
  aseoIntegrante9: string;
  aseoIntegrante10: string;
  aseoIntegrante11: string;
  aseoIntegrante12: string;
  opcionAseoIntegrante1: string;
  opcionAseoIntegrante2: string;
  opcionAseoIntegrante3: string;
  opcionAseoIntegrante4: string;
  opcionAseoIntegrante5: string;
  opcionAseoIntegrante6: string;
  opcionAseoIntegrante7: string;
  opcionAseoIntegrante8: string;
  opcionAseoIntegrante9: string;
  opcionAseoIntegrante10: string;
  opcionAseoIntegrante11: string;
  opcionAseoIntegrante12: string;
  // conocimiento
  conoceEstrategias: string;
  detalleEstrategias: string;
  conoceEnfermedades: string;
  detalleEnfermedades: string;
  conoceSaludable: string;
  conoceDengue: string;
  conoceTransmisionDengue: string;
  detalleTransmisionDengue: string;
  conoceRepMosquitos: string;
  esconditeMosquitos: string;
  denguePrevenir: string;
  detallePrevenirDengue: string;
  conoceDescacha: string;
  conoceProgramaPatio: string;
  detallePatioLimpio: string;
  conoceEstrategiasDengue: string;
  comoSupoEstrategiasDengue: string;
  esClaroMensaje: string;
  queTransmiteMensaje: string;
  queSignificaMensaje: string;
  imagenAtencion: string;
  porqueImagen: string;
  significaLava: string;
  significaTapa: string;
  significaVoltea: string;
  significaTira: string;
  conoceTomas: string;
  seIdentifica: string;
  algunMiembroIdentifica: string;
  porqueIdentifica: string;
  mensajeInteres: string;
  haHechoActividad: string;
  detalleActividad: string;
  conoceAguasDengue: string;
  comoConocioAguasDengue: string;
  queSignificaAguasDengue: string;
  conoceAppDengue: string;
  comoConoceApp: string;
  utilizaApp: string;
  utilApp: string;
  porqueUtilApp: string;
  algunMiembroUtilizaApp: string;
  importantesApp: string;
  detalleImportantesApp: string;
  medioMensajes: string;
  detalleMedio: string;
};

const defaultFormData: Encuesta = {
  enProceso: false,
  folio: "",
  zona: "",
  fechaLevantamiento: "",
  encuestador: "",
  nombre: "",
  idEncuestado: "1",
  edad: "",
  sexo: "1",
  religion: "1",
  estadoCivil: "1",
  escolaridad: "1",
  ocupacion: "",
  domicilio: "",
  numIntegrantes: "1",
  idIntegrante2: "",
  idIntegrante3: "",
  idIntegrante4: "",
  idIntegrante5: "",
  idIntegrante7: "",
  idIntegrante8: "",
  idIntegrante9: "",
  idIntegrante10: "",
  idIntegrante11: "",
  idIntegrante12: "",
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
  escolaridadIntegrante2: "",
  escolaridadIntegrante3: "",
  escolaridadIntegrante4: "",
  escolaridadIntegrante5: "",
  escolaridadIntegrante7: "",
  escolaridadIntegrante8: "",
  escolaridadIntegrante10: "",
  escolaridadIntegrante11: "",
  escolaridadIntegrante12: "",
  personasEnCasa4horasAlDia: "0",
  aguaPotable: "",
  drenaje: "",
  tipoDrenaje: "",
  medioDeposicion: "",
  recoleccionBasura: "",
  frecuenciaBasura: "",
  parquesJardines: "",
  sistemaAlmacenamientoAgua: "",
  numCuartos: "",
  jardinCasa: "",
  tipoJardinEnCasa: "",
  accesoTv: "",
  numTvCasa: "",
  accesoRadio: "",
  numRadiosCasa: "",
  celular: "",
  celularIntegrante1: "",
  celularIntegrante2: "",
  celularIntegrante3: "",
  celularIntegrante4: "",
  celularIntegrante5: "",
  celularIntegrante6: "",
  celularIntegrante7: "",
  celularIntegrante8: "",
  celularIntegrante9: "",
  celularIntegrante10: "",
  celularIntegrante11: "",
  celularIntegrante12: "",
  verTvIntegrante1: "",
  verTvIntegrante2: "",
  verTvIntegrante3: "",
  verTvIntegrante4: "",
  verTvIntegrante5: "",
  verTvIntegrante6: "",
  verTvIntegrante7: "",
  verTvIntegrante8: "",
  verTvIntegrante9: "",
  verTvIntegrante10: "",
  verTvIntegrante11: "",
  verTvIntegrante12: "",
  radioIntegrante1: "",
  radioIntegrante2: "",
  radioIntegrante3: "",
  radioIntegrante4: "",
  radioIntegrante5: "",
  radioIntegrante6: "",
  radioIntegrante7: "",
  radioIntegrante8: "",
  radioIntegrante9: "",
  radioIntegrante10: "",
  radioIntegrante11: "",
  radioIntegrante12: "",
  usarCelIntegrante1: "",
  usarCelIntegrante2: "",
  usarCelIntegrante3: "",
  usarCelIntegrante4: "",
  usarCelIntegrante5: "",
  usarCelIntegrante6: "",
  usarCelIntegrante7: "",
  usarCelIntegrante8: "",
  usarCelIntegrante9: "",
  usarCelIntegrante10: "",
  usarCelIntegrante11: "",
  usarCelIntegrante12: "",
  lecturaIntegrante1: "",
  lecturaIntegrante2: "",
  lecturaIntegrante3: "",
  lecturaIntegrante4: "",
  lecturaIntegrante5: "",
  lecturaIntegrante6: "",
  lecturaIntegrante7: "",
  lecturaIntegrante8: "",
  lecturaIntegrante9: "",
  lecturaIntegrante10: "",
  lecturaIntegrante11: "",
  lecturaIntegrante12: "",
  fisicaIntegrante1: "",
  fisicaIntegrante2: "",
  fisicaIntegrante3: "",
  fisicaIntegrante4: "",
  fisicaIntegrante5: "",
  fisicaIntegrante6: "",
  fisicaIntegrante7: "",
  fisicaIntegrante8: "",
  fisicaIntegrante9: "",
  fisicaIntegrante10: "",
  fisicaIntegrante11: "",
  fisicaIntegrante12: "",
  aseoIntegrante1: "",
  aseoIntegrante2: "",
  aseoIntegrante3: "",
  aseoIntegrante4: "",
  aseoIntegrante5: "",
  aseoIntegrante6: "",
  aseoIntegrante7: "",
  aseoIntegrante8: "",
  aseoIntegrante9: "",
  aseoIntegrante10: "",
  aseoIntegrante11: "",
  aseoIntegrante12: "",
  opcionAseoIntegrante1: "",
  opcionAseoIntegrante2: "",
  opcionAseoIntegrante3: "",
  opcionAseoIntegrante4: "",
  opcionAseoIntegrante5: "",
  opcionAseoIntegrante6: "",
  opcionAseoIntegrante7: "",
  opcionAseoIntegrante8: "",
  opcionAseoIntegrante9: "",
  opcionAseoIntegrante10: "",
  opcionAseoIntegrante11: "",
  opcionAseoIntegrante12: "",
  conoceEstrategias: "",
  detalleEstrategias: "",
  conoceEnfermedades: "",
  detalleEnfermedades: "",
  conoceSaludable: "",
  conoceDengue: "",
  conoceTransmisionDengue: "",
  detalleTransmisionDengue: "",
  conoceRepMosquitos: "",
  esconditeMosquitos: "",
  denguePrevenir: "",
  detallePrevenirDengue: "",
  conoceDescacha: "",
  conoceProgramaPatio: "",
  detallePatioLimpio: "",
  conoceEstrategiasDengue: "",
  comoSupoEstrategiasDengue: "",
  esClaroMensaje: "",
  queTransmiteMensaje: "",
  queSignificaMensaje: "",
  imagenAtencion: "",
  porqueImagen: "",
  significaLava: "",
  significaTapa: "",
  significaVoltea: "",
  significaTira: "",
  conoceTomas: "",
  seIdentifica: "",
  algunMiembroIdentifica: "",
  porqueIdentifica: "",
  mensajeInteres: "",
  haHechoActividad: "",
  detalleActividad: "",
  conoceAguasDengue: "",
  comoConocioAguasDengue: "",
  queSignificaAguasDengue: "",
  conoceAppDengue: "",
  comoConoceApp: "",
  utilizaApp: "",
  utilApp: "",
  porqueUtilApp: "",
  algunMiembroUtilizaApp: "",
  importantesApp: "",
  detalleImportantesApp: "",
  medioMensajes: "",
  detalleMedio: "",
};

const masterFormReducer = (
  state: Encuesta = defaultFormData,
  action: Action
) => {
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

const MasterFormContext = createContext<Encuesta | undefined>(undefined);
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
