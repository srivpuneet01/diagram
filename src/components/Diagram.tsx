import React from "react";
import "../sass/widgets.scss";
import * as md from "react-icons/md";
import * as fa from "react-icons/fa";
import * as SRD from "@projectstorm/react-diagrams";
import { WorkspaceWidget } from "../helpers/WorkspaceWidget";
import { CableNodeFactory } from "../helpers/Nodes/Cable/CableNodeFactory";
import { SimplePortFactory } from "../helpers/Nodes/Terminal/SimplePortFactory";
import { TerminalPortModel } from "../helpers/Nodes/Terminal/TerminalPortModel";
import { CablePortModel } from "../helpers/Nodes/Cable/CablePortModel";
import { TerminalNodeFactory } from "../helpers/Nodes/Terminal/TerminalNodeFactory";
import { CableNodeModel } from "../helpers/Nodes/Cable/CableNodeModel";
import { TerminalNodeModel } from "../helpers/Nodes/Terminal/TerminalNodeModel";

export interface WorkspaceWidgetProps {
  buttons?: any;
}
export interface WorkspaceWidgetState {}

export default class Diagram extends React.Component<
  WorkspaceWidgetProps,
  WorkspaceWidgetState
> {
  constructor(props: WorkspaceWidgetProps) {
    super(props);
    this.state = {};
  }

  render() {
    var diagramEngine = new SRD.DiagramEngine();
    diagramEngine.installDefaultFactories();

    // register some other factories as well
    diagramEngine.registerPortFactory(new SimplePortFactory("terminal", config => new TerminalPortModel()));
    diagramEngine.registerPortFactory(new SimplePortFactory("cable", config => new CablePortModel()));
    diagramEngine.registerNodeFactory(new CableNodeFactory());
    diagramEngine.registerNodeFactory(new TerminalNodeFactory());
  
    var model = new SRD.DiagramModel();
    model.setZoomLevel(200);

    var node1 = new CableNodeModel("Cable");
    node1.setPosition(100, 100);

    //3-B) create another default node
    var node2 = new TerminalNodeModel();
    node2.setPosition(400, 100);

    //4) add the models to the root graph
    model.addAll(node1, node2);
    diagramEngine.setDiagramModel(model);

    return (
      <WorkspaceWidget
        buttons={
          <>
            <button onClick={() => diagramEngine.zoomToFit()}>
              <fa.FaArrowsAltH />
            </button>
            <button
              onClick={() => {
                var zoomLevel = diagramEngine.getDiagramModel().getZoomLevel();
                console.log(zoomLevel);
                diagramEngine.getDiagramModel().setZoomLevel(zoomLevel + 10);
                diagramEngine.repaintCanvas();
              }}
            >
              <md.MdZoomIn />
            </button>
            <button
              onClick={() => {
                var zoomLevel = diagramEngine.getDiagramModel().getZoomLevel();
                console.log(zoomLevel);
                diagramEngine.getDiagramModel().setZoomLevel(zoomLevel - 10);
                diagramEngine.repaintCanvas();
              }}
            >
              <md.MdZoomOut />
            </button>
          </>
        }
      >
        <SRD.DiagramWidget
          className="srd-demo-canvas"
          diagramEngine={diagramEngine}
        ></SRD.DiagramWidget>
      </WorkspaceWidget>
    );
  }
}
