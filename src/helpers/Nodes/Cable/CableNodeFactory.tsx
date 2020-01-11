import React from "react";
import * as SRD from "@projectstorm/react-diagrams";
import { CableNodeWidget } from "./CableNodeWidget";
import { CableNodeModel } from "./CableNodeModel";

export class CableNodeFactory extends SRD.AbstractNodeFactory{
    constructor(){
        super("cable");
    }
    
    generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel<SRD.NodeModelListener>): JSX.Element {
        return <CableNodeWidget node={node} />
    }    
    
    getNewInstance(initialConfig?: any): SRD.NodeModel<SRD.NodeModelListener> {
        return new CableNodeModel();
    }


}