import * as SRD from "@projectstorm/react-diagrams";
import { CablePortModel } from "./CablePortModel";

export class CableNodeModel extends SRD.NodeModel {
  constructor(text?:string) {
    super("cable", text);
    this.addPort(new CablePortModel("left"));
    this.addPort(new CablePortModel("right"));
  }
}
