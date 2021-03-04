import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import XLSX from "xlsx";
import { saveAs } from "file-saver";

// styles
import {
  Container,
  Content,
  Title,
  ButtonsContainer,
  CircleIcon,
} from "./Home.styled";

// components
import Footer from "../../components/ui/Footer";
import PrimaryBtn from "../../components/ui/PrimaryBtn";

// icons
import { ReactComponent as DocIcon } from "../../assets/icons/NewTrans.svg";
import { ReactComponent as ConIcon } from "../../assets/icons/ContTrans.svg";
import { ReactComponent as XlsIcon } from "../../assets/icons/xls.svg";

// contexts
import { useMasterFormDistach, useMasterForm } from "../../Contexts/MainForm";

// utils
import { db } from "../../utils/Firebase";

// types
import { Encuesta } from "../../Contexts/MainForm";

const Home = () => {
  const history = useHistory();
  const formDispatcher = useMasterFormDistach();
  const { enProceso } = useMasterForm();
  const [encuentasTotales, setEncuestas] = useState<null | any[] | Encuesta[]>(
    null
  );

  const handleInitCapture = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    formDispatcher({ type: "START_FORM" });
    history.push("captura/nueva");
  };

  const handleContinueCapture = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push("captura/nueva");
  };

  const getEncuestas = async () => {
    db.collection("2020").onSnapshot((querySnapshot) => {
      const encuestas: any[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        encuestas.push(data);
      });
      setEncuestas(encuestas);
    });
  };

  const handleExportXls = () => {
    getEncuestas();
  };

  const s2ab = (s: XLSX.WorkSheet) => {
    const buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    const view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
    return buf;
  };

  const constructXLS = (encuestas: Encuesta[]) => {
    const book = XLSX.utils.book_new();
    book.Props = {
      Title: "Encuestas Dengue 2020",
      Subject: "Encuestas Dengue 2020",
      Author: "Raul Pavel Contreras Sandoval",
      CreatedDate: new Date(Date.now()),
    };
    book.SheetNames.push("Encuestas 2020");
    const wsData = [
      [
        "Folio",
        "Zona",
        "Encuestador",
        "Fecha de levantamiento",
        "Nombre",
        "Identificación del integrante",
        "Edad",
        "Sexo",
        "Religión",
        "Estado Civil",
        "Escolaridad",
        "Ocupación/empleo",
        "Domicilio",
        "Número de integrantes de esta casa",
        "Identificación Integrante 2",
        "Edad Integrante 2",
        "Escolaridad Integrante 2",
        "Identificación Integrante 3",
        "Edad Integrante 3",
        "Escolaridad Integrante 3",
        "Identificación Integrante 4",
        "Edad Integrante 4",
        "Escolaridad Integrante 4",
        "Identificación Integrante 5",
        "Edad Integrante 5",
        "Escolaridad Integrante 5",
        "Identificación Integrante 6",
        "Edad Integrante 6",
        "Escolaridad Integrante 6",
        "Identificación Integrante 7",
        "Edad Integrante 7",
        "Escolaridad Integrante 7",
        "Identificación Integrante 8",
        "Edad Integrante 8",
        "Escolaridad Integrante 8",
        "Identificación Integrante 9",
        "Edad Integrante 9",
        "Escolaridad Integrante 9",
        "Identificación Integrante 10",
        "Edad Integrante 10",
        "Escolaridad Integrante 10",
        "Identificación Integrante 11",
        "Edad Integrante 11",
        "Escolaridad Integrante 11",
        "Identificación Integrante 12",
        "Edad Integrante 12",
        "Escolaridad Integrante 12",
        "¿Cuántas personas se encuentran en casa más de 4 horas al día?",
        "Agua Potable",
        "Drenaje",
        "Tipo de Drenaje",
        "Medio de deposición de Excretas",
        "Recolección de basura",
        "Frecuencia recolección de basura",
        "Parques y jardines cercanos",
        "Sistema de almacenamiento de agua",
        "Número de cuartos en su casa",
        "¿Cuenta con jardin en casa?",
        "Tipo de jardin en casa",
        "Acceso a televisión",
        "Número de televisiones en casa",
        "Acceso a la radio",
        "Número de radios en casa",
        "Tiene Celular Encuestado ?",
        "Tiene Celular Integrante 1 ?",
        "Tiene Celular Integrante 2 ?",
        "Tiene Celular Integrante 3 ?",
        "Tiene Celular Integrante 4 ?",
        "Tiene Celular Integrante 5 ?",
        "Tiene Celular Integrante 6 ?",
        "Tiene Celular Integrante 7 ?",
        "Tiene Celular Integrante 8 ?",
        "Tiene Celular Integrante 9 ?",
        "Tiene Celular Integrante 10 ?",
        "Tiene Celular Integrante 11 ?",
        "Tiene Celular Integrante 12 ?",
        "Hrs al día TV Integrante 1",
        "Hrs al día TV Integrante 2",
        "Hrs al día TV Integrante 3",
        "Hrs al día TV Integrante 4",
        "Hrs al día TV Integrante 5",
        "Hrs al día TV Integrante 6",
        "Hrs al día TV Integrante 7",
        "Hrs al día TV Integrante 8",
        "Hrs al día TV Integrante 9",
        "Hrs al día TV Integrante 10",
        "Hrs al día TV Integrante 11",
        "Hrs al día TV Integrante 12",
        "Hrs al día Radio Integrante 1",
        "Hrs al día Radio Integrante 2",
        "Hrs al día Radio Integrante 3",
        "Hrs al día Radio Integrante 4",
        "Hrs al día Radio Integrante 5",
        "Hrs al día Radio Integrante 6",
        "Hrs al día Radio Integrante 7",
        "Hrs al día Radio Integrante 8",
        "Hrs al día Radio Integrante 9",
        "Hrs al día Radio Integrante 10",
        "Hrs al día Radio Integrante 11",
        "Hrs al día Radio Integrante 12",
        "Hrs al día Celular Integrante 1",
        "Hrs al día Celular Integrante 2",
        "Hrs al día Celular Integrante 3",
        "Hrs al día Celular Integrante 4",
        "Hrs al día Celular Integrante 5",
        "Hrs al día Celular Integrante 6",
        "Hrs al día Celular Integrante 7",
        "Hrs al día Celular Integrante 8",
        "Hrs al día Celular Integrante 9",
        "Hrs al día Celular Integrante 10",
        "Hrs al día Celular Integrante 11",
        "Hrs al día Celular Integrante 12",
        "Hrs al día Lectura Integrante 1",
        "Hrs al día Lectura Integrante 2",
        "Hrs al día Lectura Integrante 3",
        "Hrs al día Lectura Integrante 4",
        "Hrs al día Lectura Integrante 5",
        "Hrs al día Lectura Integrante 6",
        "Hrs al día Lectura Integrante 7",
        "Hrs al día Lectura Integrante 8",
        "Hrs al día Lectura Integrante 9",
        "Hrs al día Lectura Integrante 10",
        "Hrs al día Lectura Integrante 11",
        "Hrs al día Lectura Integrante 12",
        "Hrs al día Deporte Integrante 1",
        "Hrs al día Deporte Integrante 2",
        "Hrs al día Deporte Integrante 3",
        "Hrs al día Deporte Integrante 4",
        "Hrs al día Deporte Integrante 5",
        "Hrs al día Deporte Integrante 6",
        "Hrs al día Deporte Integrante 7",
        "Hrs al día Deporte Integrante 8",
        "Hrs al día Deporte Integrante 9",
        "Hrs al día Deporte Integrante 10",
        "Hrs al día Deporte Integrante 11",
        "Hrs al día Deporte Integrante 12",
        "Hrs al día Aseo Casa Integrante 1",
        "Hrs al día Aseo Casa Integrante 2",
        "Hrs al día Aseo Casa Integrante 3",
        "Hrs al día Aseo Casa Integrante 4",
        "Hrs al día Aseo Casa Integrante 5",
        "Hrs al día Aseo Casa Integrante 6",
        "Hrs al día Aseo Casa Integrante 7",
        "Hrs al día Aseo Casa Integrante 8",
        "Hrs al día Aseo Casa Integrante 9",
        "Hrs al día Aseo Casa Integrante 10",
        "Hrs al día Aseo Casa Integrante 11",
        "Hrs al día Aseo Casa Integrante 12",
        "No Diario Aseo, Frecuencia Integrante 1",
        "No Diario Aseo, Frecuencia Integrante 2",
        "No Diario Aseo, Frecuencia Integrante 3",
        "No Diario Aseo, Frecuencia Integrante 4",
        "No Diario Aseo, Frecuencia Integrante 5",
        "No Diario Aseo, Frecuencia Integrante 6",
        "No Diario Aseo, Frecuencia Integrante 7",
        "No Diario Aseo, Frecuencia Integrante 8",
        "No Diario Aseo, Frecuencia Integrante 9",
        "No Diario Aseo, Frecuencia Integrante 10",
        "No Diario Aseo, Frecuencia Integrante 11",
        "No Diario Aseo, Frecuencia Integrante 12",
        "¿Conoce estrategias para prevenir enfermedades?",
        "Si la respuesta es si, mencione cuales",
        "¿Sabe que enfermedades afectan su comunidad?",
        "Si la respuesta es si, ¿Puede mencionarlas?",
        "¿Sabes que es un entorno saludable?",
        "¿Sabe qué es el dengue?",
        "¿Conoce cómo se trasmite el dengue?",
        "Si la respuesta es si, ¿Cómo?",
        "¿Conoce cómo se reproducen los mosquitos?",
        "¿En qué lugares se esconden los mosquitos?",
        "¿El dengue se puede prevenir?",
        "Si la respuesta es sí, ¿Cómo?",
        "¿Sabe que es una descacharrización?",
        "¿Conoce que es el programa Patio Limpio?",
        "Si la respuesta es sí, ¿Cómo?",
        "¿Conoce la estrategía Lava, Tapa, Voltea y Tira?",
        "Si al respuesta es sí ¿Cómo supo de ella?",
        "El mensaje de la estrategia le parece claro",
        "¿Qué le trasmite?",
        "Desde su punto de vista ¿Qué significa?",
        "¿Qué imagén y/o palabra llama más su atención?",
        "¿Por qué?",
        "Para usted ¿Qué significa Lava?",
        "Para usted ¿Qué significa Tapa?",
        "Para usted ¿Qué significa Voltea?",
        "Para usted ¿Qué significa Tira?",
        "¿Conoce a Tomás? (marioneta)",
        "¿Se siente identificado con él? Y ¿Por qué?",
        "Algún miembro de su familia ¿Se siente identificado?",
        "¿Por qué cree que eso sucede?",
        "¿El mensaje le despierta intéres?",
        "¿Ha hecho algúna actividad de las que plantean?",
        "Si la respuesta es sí ¿Cuál?",
        "¿Conoce Aguas el dengue esta en casa?",
        "¿Cómo la conoció?",
        "Si es así ¿Qué significa para usted?",
        "¿Conoce Aplicación de celular 'Sin dengue' ?",
        "Si la respuesta es sí ¿Cómo la conoció?",
        "Si la conoce ¿La ha utilizado?",
        "¿Le parece últil?",
        "¿Por qué?",
        "Sabe si algún miembro de su familia ¿La ha utilizado?",
        "¿Qué elementos de la aplicación le parecen más importantes?",
        "¿Por qué?",
        "¿Qué medio prefiere?",
        "¿Por qué?",
      ],
    ];
    encuestas.forEach((encuesta) =>
      wsData.push([
        encuesta.folio,
        encuesta.zona,
        encuesta.encuestador,
        encuesta.fechaLevantamiento,
        encuesta.nombre,
        encuesta.idEncuestado,
        encuesta.edad,
        encuesta.sexo,
        encuesta.religion,
        encuesta.estadoCivil,
        encuesta.escolaridad,
        encuesta.ocupacion,
        encuesta.domicilio,
        encuesta.numIntegrantes,
        encuesta.idIntegrante2,
        encuesta.edadIntegrante2,
        encuesta.escolaridadIntegrante2,
        encuesta.idIntegrante3,
        encuesta.edadIntegrante3,
        encuesta.escolaridadIntegrante3,
        encuesta.idIntegrante4,
        encuesta.edadIntegrante4,
        encuesta.escolaridadIntegrante4,
        encuesta.idIntegrante5,
        encuesta.edadIntegrante5,
        encuesta.escolaridadIntegrante5,
        encuesta.idIntegrante7,
        encuesta.edadIntegrante7,
        encuesta.escolaridadIntegrante7,
        encuesta.idIntegrante8,
        encuesta.edadIntegrante8,
        encuesta.escolaridadIntegrante8,
        encuesta.idIntegrante10,
        encuesta.edadIntegrante10,
        encuesta.escolaridadIntegrante10,
        encuesta.idIntegrante11,
        encuesta.edadIntegrante11,
        encuesta.escolaridadIntegrante11,
        encuesta.idIntegrante12,
        encuesta.edadIntegrante12,
        encuesta.escolaridadIntegrante12,
        "",
        "",
        "",
        "",
        "",
        "",
        encuesta.personasEnCasa4horasAlDia,
        encuesta.aguaPotable,
        encuesta.drenaje,
        encuesta.tipoDrenaje,
        encuesta.medioDeposicion,
        encuesta.recoleccionBasura,
        encuesta.frecuenciaBasura,
        encuesta.parquesJardines,
        encuesta.sistemaAlmacenamientoAgua,
        encuesta.numCuartos,
        encuesta.jardinCasa,
        encuesta.tipoJardinEnCasa,
        encuesta.accesoTv,
        encuesta.numTvCasa,
        encuesta.accesoRadio,
        encuesta.numRadiosCasa,
        encuesta.celular,
        encuesta.celularIntegrante1,
        encuesta.celularIntegrante2,
        encuesta.celularIntegrante3,
        encuesta.celularIntegrante4,
        encuesta.celularIntegrante5,
        encuesta.celularIntegrante6,
        encuesta.celularIntegrante7,
        encuesta.celularIntegrante8,
        encuesta.celularIntegrante9,
        encuesta.celularIntegrante10,
        encuesta.celularIntegrante11,
        encuesta.celularIntegrante12,
        encuesta.verTvIntegrante1,
        encuesta.verTvIntegrante2,
        encuesta.verTvIntegrante3,
        encuesta.verTvIntegrante4,
        encuesta.verTvIntegrante5,
        encuesta.verTvIntegrante6,
        encuesta.verTvIntegrante7,
        encuesta.verTvIntegrante8,
        encuesta.verTvIntegrante9,
        encuesta.verTvIntegrante10,
        encuesta.verTvIntegrante11,
        encuesta.verTvIntegrante12,
        encuesta.radioIntegrante1,
        encuesta.radioIntegrante2,
        encuesta.radioIntegrante3,
        encuesta.radioIntegrante4,
        encuesta.radioIntegrante5,
        encuesta.radioIntegrante6,
        encuesta.radioIntegrante7,
        encuesta.radioIntegrante8,
        encuesta.radioIntegrante9,
        encuesta.radioIntegrante10,
        encuesta.radioIntegrante11,
        encuesta.radioIntegrante12,
        encuesta.usarCelIntegrante1,
        encuesta.usarCelIntegrante2,
        encuesta.usarCelIntegrante3,
        encuesta.usarCelIntegrante4,
        encuesta.usarCelIntegrante5,
        encuesta.usarCelIntegrante6,
        encuesta.usarCelIntegrante7,
        encuesta.usarCelIntegrante8,
        encuesta.usarCelIntegrante9,
        encuesta.usarCelIntegrante10,
        encuesta.usarCelIntegrante11,
        encuesta.usarCelIntegrante12,
        encuesta.lecturaIntegrante1,
        encuesta.lecturaIntegrante2,
        encuesta.lecturaIntegrante3,
        encuesta.lecturaIntegrante4,
        encuesta.lecturaIntegrante5,
        encuesta.lecturaIntegrante6,
        encuesta.lecturaIntegrante7,
        encuesta.lecturaIntegrante8,
        encuesta.lecturaIntegrante9,
        encuesta.lecturaIntegrante10,
        encuesta.lecturaIntegrante11,
        encuesta.lecturaIntegrante12,
        encuesta.fisicaIntegrante1,
        encuesta.fisicaIntegrante2,
        encuesta.fisicaIntegrante3,
        encuesta.fisicaIntegrante4,
        encuesta.fisicaIntegrante5,
        encuesta.fisicaIntegrante6,
        encuesta.fisicaIntegrante7,
        encuesta.fisicaIntegrante8,
        encuesta.fisicaIntegrante9,
        encuesta.fisicaIntegrante10,
        encuesta.fisicaIntegrante11,
        encuesta.fisicaIntegrante12,
        encuesta.aseoIntegrante1,
        encuesta.aseoIntegrante2,
        encuesta.aseoIntegrante3,
        encuesta.aseoIntegrante4,
        encuesta.aseoIntegrante5,
        encuesta.aseoIntegrante6,
        encuesta.aseoIntegrante7,
        encuesta.aseoIntegrante8,
        encuesta.aseoIntegrante9,
        encuesta.aseoIntegrante10,
        encuesta.aseoIntegrante11,
        encuesta.aseoIntegrante12,
        encuesta.opcionAseoIntegrante1,
        encuesta.opcionAseoIntegrante2,
        encuesta.opcionAseoIntegrante3,
        encuesta.opcionAseoIntegrante4,
        encuesta.opcionAseoIntegrante5,
        encuesta.opcionAseoIntegrante6,
        encuesta.opcionAseoIntegrante7,
        encuesta.opcionAseoIntegrante8,
        encuesta.opcionAseoIntegrante9,
        encuesta.opcionAseoIntegrante10,
        encuesta.opcionAseoIntegrante11,
        encuesta.opcionAseoIntegrante12,
        encuesta.conoceEstrategias,
        encuesta.detalleEstrategias,
        encuesta.conoceEnfermedades,
        encuesta.detalleEnfermedades,
        encuesta.conoceSaludable,
        encuesta.conoceDengue,
        encuesta.conoceTransmisionDengue,
        encuesta.detalleTransmisionDengue,
        encuesta.conoceRepMosquitos,
        encuesta.esconditeMosquitos,
        encuesta.denguePrevenir,
        encuesta.detallePrevenirDengue,
        encuesta.conoceDescacha,
        encuesta.conoceProgramaPatio,
        encuesta.detallePatioLimpio,
        encuesta.conoceEstrategiasDengue,
        encuesta.comoSupoEstrategiasDengue,
        encuesta.esClaroMensaje,
        encuesta.queTransmiteMensaje,
        encuesta.queSignificaMensaje,
        encuesta.imagenAtencion,
        encuesta.porqueImagen,
        encuesta.significaLava,
        encuesta.significaTapa,
        encuesta.significaVoltea,
        encuesta.significaTira,
        encuesta.conoceTomas,
        encuesta.seIdentifica,
        encuesta.algunMiembroIdentifica,
        encuesta.porqueIdentifica,
        encuesta.mensajeInteres,
        encuesta.haHechoActividad,
        encuesta.detalleActividad,
        encuesta.conoceAguasDengue,
        encuesta.comoConocioAguasDengue,
        encuesta.queSignificaAguasDengue,
        encuesta.conoceAppDengue,
        encuesta.comoConoceApp,
        encuesta.utilizaApp,
        encuesta.utilApp,
        encuesta.porqueUtilApp,
        encuesta.algunMiembroUtilizaApp,
        encuesta.importantesApp,
        encuesta.detalleImportantesApp,
        encuesta.medioMensajes,
        encuesta.detalleMedio,
      ])
    );

    const workSheet = XLSX.utils.aoa_to_sheet(wsData);
    book.Sheets["Encuestas 2020"] = workSheet;

    const workBookOut = XLSX.write(book, { bookType: "xlsx", type: "binary" });

    saveAs(
      new Blob([s2ab(workBookOut)], {
        type: "application/octet-stream",
      }),
      "encuestas_dengue_2020.xlsx"
    );
  };

  useEffect(() => {
    if (encuentasTotales) {
      constructXLS(encuentasTotales);
    }
    // eslint-disable-next-line
  }, [encuentasTotales]);

  return (
    <Container>
      <Content>
        <Title>Inicio</Title>
        <ButtonsContainer>
          <PrimaryBtn onClick={handleInitCapture}>
            Capturar encuesta
            <CircleIcon>
              <DocIcon />
            </CircleIcon>
          </PrimaryBtn>
          {enProceso && (
            <PrimaryBtn onClick={handleContinueCapture}>
              Continuar encuesta
              <CircleIcon>
                <ConIcon />
              </CircleIcon>
            </PrimaryBtn>
          )}
          <PrimaryBtn onClick={handleExportXls}>
            Exportar encuestas
            <CircleIcon>
              <XlsIcon />
            </CircleIcon>
          </PrimaryBtn>
        </ButtonsContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
