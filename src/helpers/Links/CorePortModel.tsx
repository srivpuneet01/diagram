import * as SRD from "@projectstorm/react-diagrams";
import { CoreLinkModel } from "./CoreLinkModel";

export class CorePortModel extends SRD.DefaultPortModel {
  createLinkModel(): CoreLinkModel {
    return new CoreLinkModel();
  }
}
