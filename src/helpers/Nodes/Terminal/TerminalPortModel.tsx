import * as _ from "lodash";
import * as SRD from "@projectstorm/react-diagrams";
import { CoreLinkModel } from "../../Links/CoreLinkModel";
import { DiagramEngine } from "@projectstorm/react-diagrams";

export class TerminalPortModel extends SRD.PortModel {
  position: string | "left" | "right";
  constructor(pos: string = "left") {
    super(pos);
    this.position = pos;
  }
  serialize() {
    return _.merge(super.serialize(), { position: this.position });
  }

  deSerialize(data: TerminalPortModel, engine: DiagramEngine) {
    super.deSerialize(data, engine);
    this.position = data.position;
  }

  createLinkModel(): SRD.LinkModel {
    return new CoreLinkModel();
  }
}