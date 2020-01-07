import React from "react";
import "../sass/";
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DefaultLinkModel,
  DiagramWidget
} from "@projectstorm/react-diagrams";
import { WorkspaceWidget } from "../helpers/WorkspaceWidget";

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
    var diagramEngine = new DiagramEngine();
    diagramEngine.installDefaultFactories();
    var model = new DiagramModel();

    var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
    let port1 = node1.addOutPort("Out");
    node1.setPosition(100, 100);

    //3-B) create another default node
    var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
    let port2 = node2.addInPort("In");
    node2.setPosition(400, 100);

    // link the ports
    let link1 = port1.link(port2);
    (link1 as DefaultLinkModel).addLabel("Hello World!");

    //4) add the models to the root graph
    model.addAll(node1, node2, link1);

    //5) load model into engine
    diagramEngine.setDiagramModel(model);

    return (
      <WorkspaceWidget>
        <DiagramWidget diagramEngine={diagramEngine}></DiagramWidget>
      </WorkspaceWidget>
    );
  }
}
