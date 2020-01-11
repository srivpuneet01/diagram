import React from "react";
import * as SRD from "@projectstorm/react-diagrams";
import { TerminalNodeWidget } from "./TerminalNodeWidget";
import { TerminalNodeModel } from "./TerminalNodeModel";

export class TerminalNodeFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super("terminal");
  }

  generateReactWidget(
    diagramEngine: SRD.DiagramEngine,
    node: SRD.NodeModel<SRD.NodeModelListener>
  ): JSX.Element {
    return <TerminalNodeWidget node={node} />;
  }

  getNewInstance(initialConfig?: any): SRD.NodeModel<SRD.NodeModelListener> {
    return new TerminalNodeModel();
  }
}
