import * as SRD from "@projectstorm/react-diagrams";
import { TerminalPortModel } from "./TerminalPortModel";

export class TerminalNodeModel extends SRD.NodeModel {
  constructor() {
    super("terminal");
    this.addPort(new TerminalPortModel("left"));
    this.addPort(new TerminalPortModel("right"));
  }
}