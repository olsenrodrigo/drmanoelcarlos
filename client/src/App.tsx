import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import {
  agendar,
  barraFunda,
  comoCuido,
  consultorio,
  faq,
  jornada,
  oncologiaClinica,
  perdizes,
  saoPaulo,
  segundaOpiniao,
} from "@/content/pages";
import Home from "@/pages/Home";
import ComoCuido from "@/pages/ComoCuido";
import OncologiaClinica from "@/pages/OncologiaClinica";
import Jornada from "@/pages/Jornada";
import SegundaOpiniao from "@/pages/SegundaOpiniao";
import OndeAtendo from "@/pages/OndeAtendo";
import Faq from "@/pages/Faq";
import Agendar from "@/pages/Agendar";
import PaginaArea from "@/pages/Area";
import NotFound from "@/pages/not-found";

/** Toda navegação começa no topo — manter o scroll entre rotas confunde. */
function TopoAoNavegar() {
  const [local] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [local]);
  return null;
}

function Rotas() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path={comoCuido.path} component={ComoCuido} />
      <Route path={oncologiaClinica.path} component={OncologiaClinica} />
      <Route path={jornada.path} component={Jornada} />
      <Route path={segundaOpiniao.path} component={SegundaOpiniao} />
      <Route path={consultorio.path} component={OndeAtendo} />
      <Route path={faq.path} component={Faq} />
      <Route path={agendar.path} component={Agendar} />
      {[saoPaulo, perdizes, barraFunda].map((area) => (
        <Route key={area.path} path={area.path}>
          <PaginaArea dados={area} />
        </Route>
      ))}
      {/* Curinga por último: um <Route> sem `path` dentro do Switch casa com
          tudo, e colocá-lo antes mataria as rotas acima. */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TopoAoNavegar />
      <Rotas />
    </QueryClientProvider>
  );
}
