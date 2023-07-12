import {
  flowRendererV2,
  flowStyles
} from "./chunk-Q4PGGWEH.js";
import {
  flowDb,
  parser$1
} from "./chunk-SQYVA3CP.js";
import "./chunk-R5DGEJB2.js";
import "./chunk-LVQ4OUEN.js";
import "./chunk-KMAHDU2Z.js";
import "./chunk-TXRDFQD3.js";
import "./chunk-POXDRQ3X.js";
import "./chunk-NRXDIBYM.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-7U2ZNJPH.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/mermaid/dist/flowDiagram-v2-fe64f300.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-fe64f300-EVWDWSIL.js.map
