import React from "react";
import {
  DefaultLinkFactory,
  DefaultLinkWidget
} from "@projectstorm/react-diagrams";
import { CoreLinkModel } from "./CoreLinkModel";
import { CoreLinkSegment } from "./CoreLinkSegment";

export class CoreLinkFactory extends DefaultLinkFactory {
  constructor() {
    super();
    this.type = "core";
  }

  getNewInstance(initialConfig?: any) {
    return new CoreLinkModel();
  }

  generateLinkSegment(
    model: CoreLinkModel,
    widget: DefaultLinkWidget,
    selected: boolean,
    path: string
  ) {
    return (
      <g>
        <CoreLinkSegment model={model} path={path} width={5} />
      </g>
    );
  }
}
